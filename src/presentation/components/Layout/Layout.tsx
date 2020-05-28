import { Header } from "@components/Header";

import styles from "./Layout.module.sass";

interface LayoutProps {
   top?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({top,children}) => {
   return (
      <div className={styles.Layout}>
         <Header/>
         <main>
            { children }
         </main>
      </div>
   );
}
