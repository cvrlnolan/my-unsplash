import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import Container from "@/components/layout/container";
import Navbar from "@/components/layout/navbar";
import ImageCard from "@/components/image/imageCard";
import LoadingCard from "@/components/layout/loadingCard";

const Home: NextPage = () => {
  const [results, setResults] = useState<any>();

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR<any>(() => "/api/photo/", fetcher);

  if (error) {
    return (
      <>
        <Container>
          <p className="text-center tracking-tight">{error.message}</p>
        </Container>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Container>
          <div className="page_grid_layout">
            {[...Array(10)].map((e, i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        </Container>
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
      <Container>
        <Navbar passResults={getResults} />
        {results && (
          <>
            {results.length > 0 && (
              <p className="text-center font-bold my-2 tracking-tight">
                Search Results
              </p>
            )}
            <div className="page_grid_layout">
              {results.map((photo: any) => (
                <ImageCard key={photo._id} photo={photo} />
              ))}
            </div>
          </>
        )}
        <div className="page_grid_layout">
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
      </Container>
    </>
  );
};

export default Home;
