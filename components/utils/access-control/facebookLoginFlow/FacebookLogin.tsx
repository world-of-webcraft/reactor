import React, { useEffect, useState, ReactNode } from 'react';
import {
  initializeFacebookAsync,
  initFbRoot,
  loadSdkAsync,
} from '~convapi/util';
import { FB_SDK_ID } from '~convapi/constants';

export interface IFacebookLoginProps {
  appId: string;
  fields?: string;
  scope?: string;
  version?: string;
  cookie?: boolean;
  status?: boolean;
  xfbml?: boolean;
  returnScopes?: boolean;
  language?: string;
  onSuccess: (response: any) => void;
  onFailure: (code: fb.LoginStatus) => void;
  autoLoad?: boolean;
  render: (props: IFacebookLoginRenderProps) => ReactNode;
}

interface IFacebookLoginRenderProps {
  isSdkLoaded: boolean;
  isAuthenticated: boolean;
  onClick: () => void;
}

export const FacebookLogin = ({
  appId,
  scope = 'public_profile,email,pages_show_list',
  fields = 'name',
  version = '8.0',
  cookie = true,
  autoLoad = false,
  status,
  xfbml,
  returnScopes,
  language = 'en_US',
  onSuccess,
  onFailure,
  render,
}: IFacebookLoginProps) => {
  const [isSdkLoaded, setSdkisLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (document.getElementById(FB_SDK_ID)) {
      setSdkisLoaded(true);
      return;
    }

    loadSdkAsync(language);
    initFbRoot();
    initializeFacebookAsync({ appId, version, cookie, xfbml, status }, () =>
      setSdkisLoaded(true)
    );
  }, []);

  useEffect(() => {
    if (autoLoad) {
      FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          checkLoginState(response);
        } else {
          onFailure(response.status);
        }
      });
    }
  }, [autoLoad]);

  const testApi = (authResponse: fb.AuthResponse) => {
    FB.api('/me', { fields, language }, (me: any) => {
      setIsAuthenticated(true);
      onSuccess({ ...authResponse, ...me });
    });
  };

  const checkLoginState = (response: fb.StatusResponse) => {
    if (response.authResponse) {
      testApi(response.authResponse);
    } else {
      onFailure(response.status);
    }
  };

  const onClick = () => {
    FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        checkLoginState(response);
      } else {
        FB.login(checkLoginState, { scope, return_scopes: returnScopes });
      }
    });
  };

  return <>{render({ onClick, isSdkLoaded, isAuthenticated })}</>;
};
