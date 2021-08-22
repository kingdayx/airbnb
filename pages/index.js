import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
  console.log(exploreData);
  return (
    <div className="">
      <Head>
        <title>Elisha Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/*Banner*/}
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/** pull data from a server API Endpoints */}
          <div className="">
            {exploreData?.map(({ img, distance, location }) => {
              return (
                <SmallCard
                  key={img}
                  img={img}
                  distance={distance}
                  location={location}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData: exploreData,
    },
  };
}
