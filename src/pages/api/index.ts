import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse<string>) => {
  res.statusCode = 200;
  res.json("URL base de la Api de NextJS.");
}
