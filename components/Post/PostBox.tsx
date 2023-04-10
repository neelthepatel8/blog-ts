import Link from "next/link";

interface PostBoxProps {
  title: String;
  text: String;
  date: String;
  href: string;
}
const PostBox: React.FC<PostBoxProps> = ({ title, text, date, href }) => {
  return (
    <Link href={href}>
      <div className="flex flex-col bg-gray-100 p-10 rounded-lg cursor-pointer">
        <div className="text-center font-bold text-xl pb-5">{title}</div>
        <div className="text-lg text-justify">{text}</div>
        <div className="pt-5 text-right font-thin italic ">{date}</div>
      </div>
    </Link>
  );
};

export default PostBox;
