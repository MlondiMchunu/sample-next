import type { NextPage } from "next";
import Head from "next/head";

const Hi: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Hello World Page Title</title>
                <meta property="og:title" content="Hello World" key="title" />
            </Head>
            <>Hello World!</>
        </div>)
};

export default Hi;