import { NextPage } from "next";

interface Props {}

const View: NextPage<Props> = ({}) => {
  return (
    <div>
      <iframe src="/SubhamBeuraResume.pdf" className="w-full h-screen"></iframe>
    </div>
  );
};

export default View;
