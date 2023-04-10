import PostBox from "../PostBox";

interface PostInterface {
  title: string;
  text: string;
  date: string;
  href: string;
}
const posts: PostInterface[] = [];

for (let i = 0; i < 20; i++) {
  posts.push({
    title: `Post ${i}`,
    text: "Id nisi adipisicing elit ipsum consequat incididunt exercitation dolor. Exercitation aliquip ut id elit irure consequat aute veniam. Cupidatat id do consectetur in cillum amet in non velit sint. Est dolor culpa nisi elit minim excepteur duis aliqua nulla magna labore. Do nostrud ea voluptate elit labore incididunt. Deserunt sint occaecat esse elit. Aliqua fugiat eiusmod ullamco dolor.",
    date: "Sun 10 Jan 2023",
    href: `./post/`,
  });
}

interface PostContainerProps {
  children: React.ReactNode;
}

const PostContainer: React.FC<PostContainerProps> = ({ children }) => {
  return (
    <div className="p-10 grid grid-cols-3 grid-flow-row gap-10">
      {posts.map((post) => {
        return (
          <PostBox
            key={1}
            title={post.title}
            text={post.text}
            date={post.date}
            href={post.href + "1"}
          />
        );
      })}
    </div>
  );
};

export default PostContainer;
