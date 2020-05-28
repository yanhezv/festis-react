import { SVGAttributes } from "react";

import styles from "./SectionTitle.module.sass";

interface SectionTitleProps {
   firstText: string;
   lastText: string;
   className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({firstText, lastText, className = ''}) => {
   return (
      <header className={styles.SectionTitle}>
         <h1>{firstText} <strong>{lastText}</strong></h1>
      </header>
   );
}
