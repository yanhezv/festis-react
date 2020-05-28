import { Fragment } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Course } from "@entities/Course";

import { Layout } from "@components/Layout";
import { Home } from "@pages/Home";

import courses from "../__mocks__/courses.json";

interface HomePageProps {
   courses: Course[]
}

const HomePage: React.FC<HomePageProps> = (props) => {
   return (
      <Fragment>
         <Head>
            <title>Home</title>
         </Head>
         <Layout>
            <Home {...props}/>
         </Layout>
      </Fragment>
   )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (context) => {
   const data = {courses};
   return {
      props: {
         ...data,
      }
   }
}

export default HomePage;
