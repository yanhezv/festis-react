import { NextApiRequest, NextApiResponse } from "next"

import { Course } from "@entities/Course";

import coursesJson from "../../../__mocks__/courses.json";

interface HomeResponse {
   courses: Course[];
}

export default (req: NextApiRequest, res: NextApiResponse<HomeResponse>) => {
   const courses = coursesJson.slice(0,10);

   res.statusCode = 200;
   res.json({ courses });
}
