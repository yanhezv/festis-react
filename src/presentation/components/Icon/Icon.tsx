import { SVGAttributes } from "react";

import styles from "./Icon.module.sass";

interface IconProps {
   Svg: React.FC<SVGAttributes<any>>;
   size?: '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x'
   className?: string;
}

export const Icon: React.FC<IconProps> = ({Svg, size = '3x', className = ''}) => {
   return (
      <i className = { `${styles.Container} ${styles[`Icon-${size}`]} ${className}`.trim() }>
         <Svg/>
      </i>
   );
}
