import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth } from "../auth/firebase/firebase.config";
import Spinner from "./Spinner";

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
      const checkAuthState = async () => {
        const user = await new Promise((resolve, reject) => {
          const unsubscribe = onAuthStateChanged(
            auth,
            (user) => {
              unsubscribe();
              resolve(user);
            },
            reject
          );
        });

        if (!user) {
          router.push("/unauthorized");
          console.log("Restricted Page");
          return null;
        } else {
          setUser(user);
        }

        setIsLoading(false);
      };

      checkAuthState();
    }, []);

    if (isLoading) {
      return <Spinner />;
    }

    return <WrappedComponent user={user} {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
