import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
      <main className="children:z-10 relative flex h-screen flex-col">
        <div
          className="absolute -bottom-20 end-24 z-0 overflow-hidden p-44"
          style={{
            transform: `translate(${cursorPos.x / 20}px, ${
              cursorPos.y / 20
            }px)`,
          }}
        >
          <div className=" h-96 w-52 rotate-45 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 opacity-15 blur-3xl"></div>
        </div>
        <div id="navbarContainer" className="flex w-screen justify-center">
          <Navbar className="w-full">
            <NavbarHeading>Will's Blog</NavbarHeading>
            <NavbarItemGroup>
              <NavbarItem>
                <Link href="/posts">Posts</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/about">About</Link>
              </NavbarItem>
            </NavbarItemGroup>
            <NavbarItemGroup align="right">
              <NavbarItemGroup align="right" variant="icon">
                <NavbarItem>
                  <Link
                    href={"https://github.com/willrees23/wills-blog"}
                    target="_blank"
                  >
                    <Button size={"icon"}>
                      <GitHubLogoIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <ThemeToggle />
                </NavbarItem>
              </NavbarItemGroup>
              <NavbarItem>
                <Separator orientation="vertical" className="h-8" />
              </NavbarItem>
              <NavbarItem>
                <Link href="/login">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/signup">Sign Up</Link>
              </NavbarItem>
            </NavbarItemGroup>
          </Navbar>
        </div>
        <div className="">
          <AuthShowcase />
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl ">
        {sessionData && (
          <span className="flex">
            Logged in as{" "}
            <Image
              alt="Profile picture"
              width={32}
              height={32}
              className="ml-5 mr-2 rounded-full"
              src={sessionData.user?.image as unknown as string}
            />{" "}
            {sessionData.user?.name}
          </span>
        )}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <Button
        className="rounded-full px-10 py-3 "
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </Button>
    </div>
  );
}
