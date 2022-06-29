import Head from "next/head";

export default function Header() {
    return (
      <>
          <Head>
              <title>Indiana Seekr</title>
              <meta name="description" content="Get Jobs or Get Hired" />
              <link rel="icon" href="/indiana.ico" />
              <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                  crossOrigin="anonymous"
              />
          </Head>
      </>
    );
}