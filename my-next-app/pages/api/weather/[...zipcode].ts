import type { NextApiRequest, NextApiResponse } from "next";
import { findByZip } from "@/mongoose/weather/services";
import {dbConnect} from "@/middleware/db-connect";
dbConnect();

type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<WeatherDetailType> | void> {
    let data = await findByZip(req.query.zipcode as string);
    return res.status(200).json({
        data
        //zipcode: req.query.zipcode,
        //weather: "sunny",
        //temp: 35
    });
}