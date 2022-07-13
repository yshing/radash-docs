import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Radash - The Typescript utility library from this decade."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Radash - The Typescript utility library from this decade."
        />
        <title>Radash - The Typescript utility library from this decade.</title>
      </Head>
      <div>
        <span>view docs at /docs</span>
      </div>
    </>
  )
}
