import Head from "next/head";
import Navbar from "../navbar";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";
import Link from "next/link";
import NavbarHeading from "../navbar/heading";
import NavbarItem from "../navbar/item";
import NavbarItemGroup from "../navbar/item-group";
import ThemeToggle from "../theme/theme-toggle";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

interface LayoutProps {
  children?: React.ReactNode;
  pageTitle?: string;
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Will's Blog{pageTitle ? " - " + pageTitle : ""}</title>
        <meta name="description" content="A blog by William." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex flex-col items-center">
        <div id="navbarContainer" className="flex w-screen justify-center">
          <Navbar className="w-full">
            <NavbarHeading className="text-lg">
              <Link href={"/"}>Will's Blog</Link>
            </NavbarHeading>
            <NavbarItemGroup className="hidden md:flex">
              <NavbarItem>
                <Link href="/posts">Posts</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/about">About</Link>
              </NavbarItem>
            </NavbarItemGroup>
            <NavbarItemGroup align="right" className="text-lg">
              <NavbarItemGroup
                align="right"
                variant="icon"
                className="hidden sm:flex"
              >
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
              <NavbarItem className="hidden sm:flex">
                <Separator orientation="vertical" className="h-8" />
              </NavbarItem>
              {sessionData && (
                <NavbarItem className="text-sm">
                  <span className="flex text-base">
                    Logged in as {sessionData.user?.name}
                  </span>
                </NavbarItem>
              )}
              <NavbarItem>
                <Button
                  className=" px-5 py-3 "
                  onClick={
                    sessionData ? () => void signOut() : () => void signIn()
                  }
                >
                  {sessionData ? "Sign Out" : "Sign In"}
                </Button>
              </NavbarItem>
            </NavbarItemGroup>
          </Navbar>
        </div>
        <div className="flex w-screen justify-center">{children}</div>
      </main>
    </>
  );
};

export default Layout;
