import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaGitSquare } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoPython,
  BiLogoSass,
} from "react-icons/bi";
import { SiTypescript } from "react-icons/si";

const Course = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Choose what to learn</h1>
      <div className="grid md:grid-cols-2 items-center lg:grid-cols-4 gap-2">
        <div className="flex items-center text-3xl border-2 p-5 shadow-sm gap-2">
          <div className="bg-[#0556f3] text-white rounded-full p-2">
            <AiFillHtml5 />
          </div>
          <h1 className="text-2xl">Learn html</h1>
        </div>
        <div className="flex items-center text-3xl border-2 p-5 shadow-sm gap-2">
          <div className="bg-[#0556f3] text-white rounded-full p-2">
            <FaCss3Alt />
          </div>
          <h1 className="text-2xl">Learn css</h1>
        </div>
        <div className="flex items-center text-3xl border-2 p-5 shadow-sm gap-2">
          <div className="bg-[#0556f3] text-white rounded-full p-2">
            <BiLogoJavascript />
          </div>

          <h1 className="text-2xl">Learn JavaScript</h1>
        </div>
        <div className="flex items-center text-3xl border-2 p-5 shadow-sm gap-2">
          <div className="bg-[#0556f3] text-white rounded-full p-2">
            <BiLogoReact />
          </div>

          <h1 className="text-2xl">Learn React</h1>
        </div>
        <div className="flex items-center text-3xl border-2 p-5 shadow-sm gap-2">
          <div className="bg-[#0556f3] text-white rounded-full p-2">
            <BiLogoPython />
          </div>

          <h1 className="text-2xl">Learn Pythone</h1>
        </div>
        <div className="flex items-center text-3xl border-2 p-5 shadow-sm gap-2">
          <div className="bg-[#0556f3] text-white rounded-full p-2">
            <SiTypescript />
          </div>

          <h1 className="text-2xl">Learn TypeScript</h1>
        </div>
        <div className="flex items-center text-3xl border-2 p-5 shadow-sm gap-2">
          <div className="bg-[#0556f3] text-white rounded-full p-2">
            <BiLogoSass />
          </div>

          <h1 className="text-2xl">Learn Sass</h1>
        </div>
        <div className="flex items-center text-3xl border-2 p-5 shadow-sm gap-2">
          <div className="bg-[#0556f3] text-white rounded-full p-2">
            <FaGitSquare />
          </div>

          <h1 className="text-2xl">Learn Git</h1>
        </div>
      </div>
    </div>
  );
};

export default Course;
