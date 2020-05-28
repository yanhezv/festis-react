import { createContext, useState, useEffect } from "react";

export const viewportContext = createContext({ width: 0, height: 0 });

export const ViewportContextProvider: React.FC = ({children}) => {
   const [size, setSize] = useState({ width: 0, height: 0 });

   const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
   }

   useEffect(() => {
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
   }, []);

   return (
      <viewportContext.Provider value={size}>
         {children}
      </viewportContext.Provider>
   );
}
