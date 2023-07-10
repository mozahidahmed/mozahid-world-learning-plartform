
import { FaStarOfDavid } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { AiOutlineQrcode } from "react-icons/ai";

const WhyMozahidWorld = () => {
    return (
      <div className="bg-[#fafafa] py-16">
        <h1 className=" text-center mb-6 text-4xl font-bold">
          Why Mozahid World?
        </h1>
        <div className="grid p-6 md:grid-cols-2 justify-center items-center lg:grid-cols-3 ">
          <div className="flex justify-center mt-6">
            <div className="p-2 text-4xl text-[#0556f3]">
              <FaStarOfDavid />
            </div>
            <div className="">
              <h1 className=" mb-2 text-2xl">Programming made easy</h1>
              <p>
                We focus on simplicity.<br></br> Programming tutorials and{" "}
                <br></br>examples written in simple,<br></br> understandable
                language for <br></br>beginners.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6 ">
            <div className="p-2 text-4xl text-[#0556f3]">
              <AiOutlineQrcode />
            </div>
            <div className="">
              <h1 className=" mb-2 text-2xl">Content You Can Trust</h1>
              <p>
                We focus on simplicity.<br></br> Programming tutorials and{" "}
                <br></br>examples written in simple,<br></br> understandable
                language for <br></br>beginners.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div className="p-2 text-4xl text-[#0556f3]">
              <BsCodeSquare />
            </div>
            <div className="">
              <h1 className=" mb-2 text-2xl">Learn by Doing</h1>
              <p>
                We focus on simplicity.<br></br> Programming tutorials and{" "}
                <br></br>examples written in simple,<br></br> understandable
                language for <br></br>beginners.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhyMozahidWorld;