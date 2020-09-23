<FacebookLogin
        appId={FB_APP_ID}
        onSuccess={(res) => console.log(res)}
        onFailure={(code) => console.log(code)}
        render={({ onClick }) => (
          <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            startIcon={<FacebookImage />}
          >
            Continue with Facebook
          </Button>
        )}
      />
