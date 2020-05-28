import Link from "next/link";

import { Course } from "@entities/Course";
import EditIcon from "../../../../../icons/edit.svg";
import TrashIcon from "../../../../../icons/trash.svg";

import styles from "./CourseCard.module.sass";
import { Icon } from "@components/Icon";

interface CourseCardProps {
   itemNumber: number;
   course: Course;
   onEdit: (id: number) => void;
   onRemove: (id: number) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ itemNumber, course, onEdit, onRemove }) => {
   const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onEdit(course.id);
   };

   const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onRemove(course.id);
   };

   return (
      <article className={styles.CourseCard}>
         <header>
            <div className={styles.Title}>
               <span>{itemNumber}</span>
               <h1>{course.name}</h1>
            </div>
            <div className={styles.Options}>
               <button type="button" onClick={handleEditClick}>
                  <Icon Svg={EditIcon}/>
               </button>
               <button type="button" onClick={handleRemoveClick}>
                  <Icon Svg={TrashIcon} />
               </button>
            </div>
         </header>
         <div className={styles.Description}>
            <p>{course.description}</p>
         </div>
      </article>
   );
}
