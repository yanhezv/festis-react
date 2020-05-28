import Link from "next/link";

import { useScroll } from "@hooks/useScroll";
import { Icon } from "@components/Icon";
import SearchIcon from "../../../icons/search.svg";

import styles from "./Header.module.sass";
import { useState } from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
   const { scrollY } = useScroll();
   const [showingMenu, setShowMenu] = useState(false);
   const [showingSearcher, setShowSearcher] = useState(false);

   const handleShowMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setShowMenu(!showingMenu);
   };
   const handleShowSearcherClick = (event: React.MouseEvent<HTMLLabelElement>) => {
      setShowSearcher(!showingSearcher);
   };

   return (
      <header className={`${styles.Header} ${scrollY > 50 ? styles.Normal : ''} ${showingMenu ? styles.Mobile : ''}`}>
         <nav>
            <div className={styles.Logo}>
               <Link href="/">
                  <a><img src="/assets/Logo.png" alt="Logo" /></a>
               </Link>
            </div>
            <div className={`${styles.Navigation} ${showingMenu ? styles.Open : ''}`}>
               <ul className={styles.Options}>
                  <li>
                     <Link href="/"><a className={styles.Selected}>HTML</a></Link>
                  </li>
                  <li>
                     <Link href="/"><a>CSS</a></Link>
                  </li>
                  <li>
                     <Link href="/"><a>JAVASCRIPT</a></Link>
                  </li>
                  <li>
                     <Link href="/"><a>VIDEOS</a></Link>
                  </li>
               </ul>
               <div className={styles.Buscador}>
                  <div className={`${styles.Input} ${showingSearcher ? styles.Open : ''}`}>
                     <input
                        type        = "text"
                        name        = "search"
                        id          = "buscador"
                        placeholder = "Buscar cursos"
                     />
                  </div>
                  <label htmlFor="buscador" onClick={handleShowSearcherClick}>
                     <Icon Svg={SearchIcon} />
                  </label>
               </div>
            </div>
            <div className={`${styles.MenuIcon} ${showingMenu ? styles.Close : ''}`}>
               <button className={styles.Icon} onClick={handleShowMenuClick}>
                  <i/>
               </button>
            </div>
         </nav>
      </header>
   );
}
