import styles from "./NotFound.module.sass";

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = ({ ...props }) => {

   return (
      <div className={styles.NotFound}>
         <h1 className="e-h1">404</h1>
         <h2 className="e-h4">Pagina no encontrada!</h2>
      </div>
   );
}
