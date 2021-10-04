import type { NextPage } from "next";
import Head from "next/head";
import { UserIcon } from "@heroicons/react/solid";
import ImageCard from "@/components/image/imageCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Unsplash</title>
      </Head>
      <div className="flex flex-col min-h-screen justify-between p-6">
        <div className="flex flex-wrap md:justify-between w-full p-6">
          <div className="flex w-full md:w-3/4 lg:w-3/5 space-x-4">
            <div className="flex my-auto space-x-2 font-bold">
              <UserIcon className="w-6 h-6" />
              <p>MyUnsplash</p>
            </div>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-200 focus:shadow-outline focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Search by name"
            />
          </div>
          <div className="flex ml-4 mt-2 md:mt-0">
            <button className="bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-200 text-white font-semibold py-2 px-4 rounded transition duration-300">
              Add a photo
            </button>
          </div>
        </div>
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
