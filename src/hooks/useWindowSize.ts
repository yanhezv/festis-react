import { useContext } from "react";
import { viewportContext } from "@src/contexts/ViewportContext";

export function useWindowSize() {
   const size = useContext(viewportContext);
   return size;
}
