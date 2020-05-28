import { NextApiRequest, NextApiResponse } from "next"

import courses from "../../../__mocks__/courses.json";
import { Course } from "@entities/Course";

interface CourseResponse {
   course: Course | null;
}

export default (req: NextApiRequest, res: NextApiResponse<CourseResponse>) => {
   const slug = req.query.slug.toString();
   const course = courses.find((course: Course) => course.slug === slug)

   res.status(200).json({ course: !!course ? course : null });
}
