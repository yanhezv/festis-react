import { Fragment } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { Course } from "@entities/Course";

import { Layout } from "@components/Layout";
import { Home } from "@pages/Home";

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

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context) => {
   const result = await fetch(`http://localhost:3000/api/courses`);
   const data   = await result.json();

   return {
      props: {
         ...data,
      }
   }
}

export default HomePage;
