import { FacebookProvider, LoginButton } from "react-facebook";
import Image from "next/image";

export default function LoginButtonExample() {
  const handleSuccess = (response: any) => {
    console.log(response.status);
  };

  function handleError(error: any) {
    console.log(error);
  }

  return (
    <FacebookProvider appId="761477645291335">
      <LoginButton
        scope="email"
        onError={handleError}
        onSuccess={handleSuccess}
      >
        <Image width={250} height={200} layout="responsive" src="/../assets/mblview/login/facebook.png" alt="facebook login" />
      </LoginButton>
    </FacebookProvider>
  );
}
