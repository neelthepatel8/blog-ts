import Content from "./Content/Content";
import Details from "./Details/Details";
import End from "./End/End";
import Title from "./Title/Title";

interface PostProps {
  title: string;
  content: string;
  date: string;
}

const Post = ({ title, content, date }: PostProps) => {
  return (
    <div className="w-3/5 place-content-center m-auto text-center text-lg font-mono">
      <Title content={title} />
      <Details />
      <Content content={content} />
      <End content={date} />
    </div>
  );
};

export default Post;
