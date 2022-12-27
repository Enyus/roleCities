import { createContext, useState } from "react";

import "../styles/globals.css";

export const UserContext = createContext(null);
export const LoadingContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{loading, setLoading}}>
      <UserContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </LoadingContext.Provider>
  );
}

export default MyApp;
