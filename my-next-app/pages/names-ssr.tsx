import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
    NextPage,
    PreviewData
} from "next";
import {ParsedUrlQuery} from "querystring";
import {fetchNames} from "../utils/fetch-names";

