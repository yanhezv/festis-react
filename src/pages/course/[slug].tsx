import { Fragment } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { Course } from "@entities/Course";
import { Layout } from "@components/Layout";
import { Loading } from "@components/Loading";
import { NotFound } from "@components/NotFound";
import { CourseDetail } from "@pages/CourseDetail";

import courses from "../../__mocks__/courses.json";

interface CoursePageProps {
   course: Course | null;
}

const CoursePage: React.FC<CoursePageProps> = ({ course }) => {
   const router = useRouter();

   if (router.isFallback) {
      return (
         <Fragment>
            <Layout>
               <Loading/>
            </Layout>
         </Fragment>
      )
   }

   return (
      <Fragment>
         <Layout>
            {
               !course ? (
                  <NotFound/>
               ): (
                  <Fragment>
                     <Head>
                        <title>{course.name}</title>
                     </Head>
                     <CourseDetail course={course} />
                  </Fragment>
               )
            }
         </Layout>
      </Fragment>
   )
}

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: courses.map((course) =>({
         params: { slug: course.slug }
      })),
      fallback: false
   }
}

export const getStaticProps: GetStaticProps<CoursePageProps> = async ({ params = {slug: ''} }) => {
   const slug = params.slug.toString();
   const course = courses.find((course: Course) => course.slug === slug)

   return {
      props: { course }
   }
}

export default CoursePage;
