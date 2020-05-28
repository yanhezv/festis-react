import { useState, useEffect } from "react";

import { Course } from "@entities/Course";

import styles from "./CourseForm.module.sass";

interface CourseFormProps {
   course: Course | null;
   onSave: (name: string, description: string) => void;
}

export const CourseForm: React.FC<CourseFormProps> = ({ course, onSave }) => {
   const [name, setName]               = useState('');
   const [description, setDescription] = useState('');

   const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
   }

   const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
   }

   const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (name.trim() !=='') {
         onSave(name, description);
         setName('');
         setDescription('');
      }
   }

   useEffect(() => {
      setName(course ? course.name : '');
      setDescription(course ? course.description : '');
   }, [course])

   return (
      <form
         className = {styles.CourseForm}
         action    = "/" method = "get"
         onSubmit  = {handleSubmit}
      >
         <div className={styles.Input}>
            <label htmlFor="nombre">Nombre del curso</label>
            <input
               type        = "text"
               name        = "course_name"
               id          = "nombre"
               className   = "e-placeholder"
               value       = {name}
               placeholder = "Ingrese un nuevo curso."
               onChange    = {handleNameChange}
            />
         </div>
         <div className={styles.Input}>
            <label htmlFor="descripcion">Descripción</label>
            <textarea
               name        = "course_description"
               id          = "descripcion"
               className   = "e-placeholder"
               placeholder = "No mayor a 140 carácteres."
               value       = {description}
               onChange    = {handleDescriptionChange}
            ></textarea>
         </div>
         <div className={styles.Actions}>
            <button type="submit">Guardar</button>
         </div>
      </form>
   );
}
