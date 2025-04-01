import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
    NextPage,
    PreviewData
} from "next";
import { ParsedUrlQuery } from "querystring";
import { fetchNames } from "../utils/fetch-names";
import { getServerSideProps } from "next/dist/build/templates/pages";

type responseItemType = {
    id: string;
    name: string;
};

const NamesSSR: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const output = props.names.map((item: responseItemType, idx: number) => {
        return (
            <li key={`name-${idx}`}>
                {item.id}:{item.name}
            </li>
        )
    })
}