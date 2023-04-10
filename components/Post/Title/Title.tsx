interface TitleProps {
    content: string
}

const Title = ({ content }: TitleProps) => {
  return <div className="text-6xl font-bold py-10">{content}</div>;
};

export default Title;
