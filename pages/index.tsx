import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>AI-Powered Photo Restoration - Bring Faded Memories Back to Life</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Preserving history using AI,{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
          </span>{" "}
          one pixel at a time.
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Our state-of-the-art technology will restore and upscale your old, blurry and distorted photos,
          making them as clear and crisp as the day they were taken. And the best part? It's 100% free.
        </p>
        <Link
          className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
          href="/restore"
        >
          Upload your photo
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Before</h2>
                <Image
                  alt=""
                  src="/input.jpg"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">After</h2>
                <Image
                  alt=""
                  width={400}
                  height={400}
                  src="/output.jpg"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
