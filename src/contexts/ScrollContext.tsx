import { createContext, useState, useEffect } from "react";

export const scrollContext = createContext({
   scrollX: 0,
   scrollY: 0,
   scrollDirection: ''
});

export const ScrollContextProvider: React.FC = ({children}) => {
   const [scroll, setScroll] = useState({
      scrollX: 0,
      scrollY: 0,
      scrollDirection: ''
   });

   const updateScroll = () => {
      setScroll(prev => ({
         scrollX: -document.body.getBoundingClientRect().left,
         scrollY: -document.body.getBoundingClientRect().top,
         scrollDirection: prev.scrollY > -document.body.getBoundingClientRect().top ? 'up' : 'down'
      }));
   };

   useEffect(() => {
      updateScroll();
      window.addEventListener('scroll', updateScroll);
      return () => window.removeEventListener('scroll', updateScroll);
   }, []);

   return (
      <scrollContext.Provider value={scroll}>
         {children}
      </scrollContext.Provider>
   );
}
