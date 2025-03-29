import type { NextApiRequest, NextApiResponse } from "next";

type responseItemType = {
    id: string;
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<responseItemType[]> | void> {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;

    try{
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
    }
}
