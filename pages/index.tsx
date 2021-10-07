import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import Navbar from "@/components/layout/navbar";
import ImageCard from "@/components/image/imageCard";

const Home: NextPage = () => {
  const [results, setResults] = useState<any>();

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR<any>(() => "/api/photo/", fetcher);

  if (error) {
    return (
      <>
        <div>{error.message}</div>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  const getResults = (res: any) => {
    console.log(res);
    setResults(res);
  };

  return (
    <>
      <Head>
        <title>My Unsplash</title>
      </Head>
      <div className="flex flex-col min-h-screen justify-between p-6">
        <Navbar passResults={getResults} />
        {results.length > 0 && (
          <>
            <p className="text-center font-bold my-2">Search Results</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((photo: any) => (
                <ImageCard key={photo._id} photo={photo} />
              ))}
            </div>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* {[...Array(10)].map((e, i) => (
            <ImageCard key={e} />
          ))} */}
          {data.map((photo: any) => (
            <ImageCard key={photo._id} photo={photo} />
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
