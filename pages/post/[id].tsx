import BodyContainer from "@/components/BodyContainer/BodyContainer";
import Navbar from "@/components/Navigation/Navbar";
import Post from "@/components/Post/Post";
import { PrismaClient } from "@prisma/client";
import { GetStaticPaths, GetStaticProps } from "next";

const prisma = new PrismaClient();

interface PageProps {
  post: {
    id: number;
    title: string;
    content: string;
    date: string;
  };
}

const PostPage = ({ post }: PageProps) => {
  if (post == null) {
    return (
      <div>
        <Navbar />
        <BodyContainer>
          <Post title="Could not fetch Post!" content="" date="" />
        </BodyContainer>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <BodyContainer>
        <Post title={post.title} content={post.content} date={post.date} />
      </BodyContainer>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await prisma.post.findMany();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false };
};

interface Params {
  id: string;
}

export async function getStaticProps({ id }: Params) {
  console.log(id);

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });
  return { props: { post } };
}

export default PostPage;
