import { useContext, createContext, useState } from "react";
export const urlContext = createContext();

export function UrlProvider({ children }) {
  const [url, setUrl] = useState("https://MyCart-Backend.codezillaa.repl.co/products");
  return (
    <urlContext.Provider value={{ url, setUrl }}>
      {children}
    </urlContext.Provider>
  );
}

export function useUrl() {
  return useContext(urlContext);
}
