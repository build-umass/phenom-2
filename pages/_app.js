import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/signup.css'
import Signup from './signup'

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />

  //Make sure that the window and document objects will only be used on the client side
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
  // return <Signup />
}

export default MyApp
