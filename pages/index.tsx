import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
} from "next";
import Head from "next/head";

type Props = {
  baseUrl: string;
};

const Home: NextPage<Props> = ({ baseUrl }) => {
  const title = "【デザイン不要】@vercel/ogを使っていい感じの動的OGPをつくる";
  const userName = "hiromu617";
  return (
    <div>
      <Head>
        <title>OGP Example</title>
        <meta property="og:image" content={`${baseUrl}/api/og`} />
      </Head>
      <img
        src={`${baseUrl}/api/og?title=${title}&userName=${userName}`}
        alt=""
      />
    </div>
  );
};

export default Home;

const getBaseUrl = (context: GetServerSidePropsContext) => {
  const protocol = context.req.headers["x-forwarded-proto"] || "http";
  const baseUrl = context.req
    ? `${protocol}://${context.req.headers.host}`
    : "";
  return baseUrl;
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const baseUrl = getBaseUrl(context);

  return {
    props: {
      baseUrl,
    },
  };
};
