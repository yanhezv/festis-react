import { useContext } from "react";
import { scrollContext } from "@src/contexts/ScrollContext";

export function useScroll() {
   const scroll = useContext(scrollContext);
   return scroll;
}
