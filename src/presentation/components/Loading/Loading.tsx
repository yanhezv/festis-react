import styles from "./Loading.module.sass";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = ({ ...props }) => {

   return (
      <div className={styles.Loading}>
         <div className={styles.Loader}></div>
      </div>
   );
}
