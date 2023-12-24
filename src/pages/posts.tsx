import { useSession } from "next-auth/react";
import Layout from "~/components/layout";

const Posts = () => {
  const { data, status, update } = useSession();

  return (
    <Layout pageTitle="Posts">
      <div className="ml-8 mr-8 mt-10 flex w-full flex-col items-center justify-center gap-4 rounded-lg">
        <h1 className="text-3xl font-bold">Posts</h1>
        <p className="text-lg">Welcome to the posts page.</p>
        <p className="text-lg">
          This page is only accessible by authenticated users.
        </p>
        <p className="text-lg">
          If you are authenticated, you should see your name below:
        </p>
        <p className="text-lg">
          {status === "authenticated" ? data?.user?.name : "Not authenticated"}
        </p>
      </div>
    </Layout>
  );
};

export default Posts;
