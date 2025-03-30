import type { NextApiRequest, NextApiResponse } from "next";

type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<WeatherDetailType> | void> {
    return res.status(200).json({
        zipcode: req.query.zipcode,
        weather: "sunny",
        temp: 35
    });
}