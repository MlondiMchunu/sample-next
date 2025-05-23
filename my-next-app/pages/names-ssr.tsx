import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
    NextPage,
    PreviewData
} from "next";

import { ParsedUrlQuery } from "querystring";
import { fetchNames } from "../utils/fetch-names";
//import { getServerSideProps } from "next/dist/build/templates/pages";

type responseItemType = {
    id: string;
    name: string;
};


/**Create the page */
const NamesSSR: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const output = props.names.map((item: responseItemType, idx: number) => {
        return (
            <li key={`name-${idx}`}>
                {item.id} : {item.name}
            </li>
        );
    });
    return (
        <ul>
            {output}
        </ul>
    );
};

/**get data from the api 
 * & return the created dataset from the async function and pas it to the NextPage*/
export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
    let names: responseItemType[] | [] = [];
    try {
        names = await fetchNames();
    } catch (err) { }
    return {
        props: {
            names
        }
    };

};


export default NamesSSR;