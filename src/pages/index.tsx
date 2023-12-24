import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "~/components/layout";
import Navbar from "~/components/navbar";
import NavbarHeading from "~/components/navbar/heading/index";
import NavbarItem from "~/components/navbar/item";
import NavbarItemGroup from "~/components/navbar/item-group";
import ThemeToggle from "~/components/theme/theme-toggle";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const updateCursorPos = (e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPos);
    return () => window.removeEventListener("mousemove", updateCursorPos);
  }, []);

  return (
    <>
      <Head>
        <title>Will's Blog</title>
        <meta name="description" content="A blog by William." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout pageTitle="Home">
        <div className="ml-8 mr-8 mt-10 flex w-full flex-col items-center justify-center gap-4 rounded-lg">
          {/* create responsive grid that for the minute shows a list of posts with lorem text */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href={"/posts/create"}
              className="col-span-1 rounded-lg border p-4 shadow-lg transition-all hover:shadow-zinc-500"
            >
              <h3 className="text-xl font-bold">Create post!</h3>
              <p>Click me to create a new post...</p>
            </Link>
            <div className="col-span-1 rounded-lg border p-4">
              <h3 className="text-xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                rem exercitationem minima commodi dolorum nobis laboriosam
                maiores harum quia, iure esse ipsam assumenda ullam officia ea
                dolor. Velit, est nesciunt!
              </p>
            </div>
            <div className="col-span-1 rounded-lg border p-4">
              <h3 className="text-xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                rem exercitationem minima commodi dolorum nobis laboriosam
                maiores harum quia, iure esse ipsam assumenda ullam officia ea
                dolor. Velit, est nesciunt!
              </p>
            </div>
            <div className="col-span-1 rounded-lg border p-4">
              <h3 className="text-xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                rem exercitationem minima commodi dolorum nobis laboriosam
                maiores harum quia, iure esse ipsam assumenda ullam officia ea
                dolor. Velit, est nesciunt!
              </p>
            </div>
            <div className="col-span-1 rounded-lg border p-4">
              <h3 className="text-xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                rem exercitationem minima commodi dolorum nobis laboriosam
                maiores harum quia, iure esse ipsam assumenda ullam officia ea
                dolor. Velit, est nesciunt!
              </p>
            </div>
            <div className="col-span-1 rounded-lg border p-4">
              <h3 className="text-xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                rem exercitationem minima commodi dolorum nobis laboriosam
                maiores harum quia, iure esse ipsam assumenda ullam officia ea
                dolor. Velit, est nesciunt!
              </p>
            </div>
            <div className="col-span-1 rounded-lg border p-4">
              <h3 className="text-xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                rem exercitationem minima commodi dolorum nobis laboriosam
                maiores harum quia, iure esse ipsam assumenda ullam officia ea
                dolor. Velit, est nesciunt!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
