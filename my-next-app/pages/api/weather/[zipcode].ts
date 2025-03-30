import type { NextApiRequest, NextApiResponse } from "next";

type WeatheerDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
}