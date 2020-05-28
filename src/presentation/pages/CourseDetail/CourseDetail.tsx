import { Course } from "@entities/Course";

import styles from "./CourseDetail.module.sass";

interface CourseDetailProps {
   course: Course
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course, ...props}) => {
   return (
      <div className={styles.CourseDetail}>
         <h1 className="e-h1">{course.name}</h1>
      </div>
   );
}
