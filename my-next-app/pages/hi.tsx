import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Hi: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Hello World Page Title</title>
                <meta property="og:title" content="Hello World" key="title" />
            </Head>
            <div>Hello World!</div>
            <div>
                Use the HTML anchor for an
                <a href="https://#"> external link</a>
                and the Link component for an <br />
                <Link href="/components/weather"><a>internal page</a></Link>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

            </div>
        </div>
    );
};

export default Hi;