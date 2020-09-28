import { FB_SDK_ID } from '~convapi/constants';

export const initializeFacebookAsync = (
  { appId, version = '8.0', cookie, xfbml, status }: fb.InitParams,
  callback: Function
) => {
  // @ts-ignore
  window.fbAsyncInit = () => {
    FB.init({
      version: `v${version}`,
      cookie,
      xfbml: xfbml,
      status,
      appId,
    });

    callback();
  };
};

export const getFacebookSdkUrl = (language: string) => {
  return `https://connect.facebook.net/${language}/sdk.js`;
};

export const initFbRoot = () => {
  let fbRoot = document.getElementById('fb-root');
  if (!fbRoot) {
    fbRoot = document.createElement('div');
    fbRoot.id = 'fb-root';
    document.body.appendChild(fbRoot);
  }
};

export const loadSdkAsync = (language: string) => {
  ((d, id) => {
    const allScripts = d.getElementsByTagName('script');
    const firstScript: HTMLScriptElement = allScripts[0];
    let newScript = firstScript;

    if (d.getElementById(id)) {
      return;
    }

    newScript = d.createElement('script');
    newScript.id = id;
    newScript.src = getFacebookSdkUrl(language);
    newScript.defer = true;
    newScript.async = true;
    newScript.crossOrigin = 'anonymous';
    firstScript.parentNode?.insertBefore(newScript, firstScript);
  })(document, FB_SDK_ID);
};
