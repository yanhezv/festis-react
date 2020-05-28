import styles from "./Cover.module.sass";
import Link from "next/link";

interface CoverProps {}

export const Cover: React.FC<CoverProps> = ({ }) => {
   return (
      <section className={styles.Cover}>
         <div>
            <h1>Desarrollo Web</h1>
            <p>Aprendiendo HTML, CSS y Javascript</p>
            <div className={styles.Buttons}>
               <Link href="/"><a className={styles.Works}>Ver nuestro trabajo</a></Link>
               <Link href="/"><a className={styles.Tutorials}>Ver tutoriales</a></Link>
            </div>
         </div>
      </section>
   );
}
