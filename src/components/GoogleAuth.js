import { GoogleLogin } from '@react-oauth/google';

function GoogleAuth() {
  const handleLogin = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      onSuccess={handleLogin}
      onError={() => console.log('Login Failed')}
    />
  );
}

export default GoogleAuth;