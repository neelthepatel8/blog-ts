interface ContentProps {
  content: string;
}

const Content = ({ content }: ContentProps) => {
  return (
    <div className="text-justify text-xl">
      <div>{content}</div>
    </div>
  );
};

export default Content;
