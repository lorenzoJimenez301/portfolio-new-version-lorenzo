// context/NavContext.jsx
"use client";
import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export function NavProvider({ children }) {
    
  const [inView, setInView] = useState(true); 

  return (
    <NavContext.Provider value={{ inView, setInView }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  return useContext(NavContext);
}
