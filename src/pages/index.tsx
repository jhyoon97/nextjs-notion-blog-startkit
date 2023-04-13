import Head from "next/head";
import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";

// utils
import { getPage } from "utils/notion";

export const getStaticProps = async () => {
  const page = await getPage("e3a2de15-4f9e-4cf4-8da1-1319e5dd4210");

  return {
    props: {
      page,
    },
  };
};

const Index = ({ page }: any) => {
  return (
    <>
      <Head>
        <title>{page.raw.page.properties["이름"].title[0].plain_text}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <NotionRenderer recordMap={page} components={{ Code }} />
      </div>
    </>
  );
};

export default Index;
