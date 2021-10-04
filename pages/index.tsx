import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/layout/navbar";
import ImageCard from "@/components/image/imageCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Unsplash</title>
      </Head>
      <div className="flex flex-col min-h-screen justify-between p-6">
        <Navbar />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(10)].map((e, i) => (
            <ImageCard key={e} />
          ))}
        </div>
        <footer className="bottom-0 my-3">
          <div className="flex justify-center mb-0">
            <p className="text-center font-mono tracking-tight">
              Designed & Developped by{" "}
              <a
                href="https://carlnolan.lootyclub.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                Carl Nolan.
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
