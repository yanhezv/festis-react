import { useState } from "react";

import { Course, CourseStatus } from "@entities/Course";
import { slugify } from "@src/utils/generator";
import { SectionTitle } from "@components/SectionTitle";

import { CourseCard } from "./components/CourseCard";
import { Cover } from "./components/Cover";
import { CourseForm } from "./components/CourseForm";

import styles from "./Home.module.sass";

interface HomeProps {
   courses: Course[];
}

export const Home: React.FC<HomeProps> = ({ courses }) => {
   const [currentCourses, setCurrentCourses] = useState(courses);
   const [currentCourse, setCurrentCourse]   = useState<Course | null>(null);

   const handleCourseSave = (name: string, description: string) => {
      setCurrentCourses((before) => {
         const slug = slugify(name);

         if (currentCourse !== null) {
            const index       = currentCourses.findIndex(course => course.id === currentCourse.id);
            const newCourses  = [...before];
            newCourses[index] = {...newCourses[index], name, slug, description};
            return newCourses
         }

         const id     = currentCourses.length + 1;
         const course = { id, name, description, slug, status: CourseStatus.Active };
         return [...before, course]
      });
      setCurrentCourse(null)
   };

   const handleCourseEdit = (id: number) => {
      setCurrentCourse((before) => {
         return currentCourses.find(course => course.id === id);
      });
   };

   const handleCourseRemove = (id: number) => {
      setCurrentCourses((before) => {
         return before.filter((course) => course.id !== id);
      });
   };

   return (
      <div className={styles.Home}>
         <Cover/>
         <div className={`e-max-width ${styles.Courses}`}>

            <section className={styles.CourseForm}>
               <SectionTitle
                  firstText="Nuevo"
                  lastText="Curso"
               />
               <CourseForm
                  course = {currentCourse}
                  onSave = {handleCourseSave}
               />
            </section>
            <section className={styles.CourseList}>
               <SectionTitle
                  firstText="Cursos"
                  lastText="Disponibles"
               />
               <ul className={styles.Items}>
                  {
                     currentCourses.map((course, index) => {
                        return (
                           <li key={index} className={styles.Item}>
                              <CourseCard
                                 itemNumber = {index + 1} course={course}
                                 onEdit     = {handleCourseEdit}
                                 onRemove   = {handleCourseRemove}
                              />
                           </li>
                        )
                     })
                  }
               </ul>
            </section>
         </div>
      </div>
   );
}
