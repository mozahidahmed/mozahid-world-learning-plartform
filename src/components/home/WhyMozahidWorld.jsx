
import { FaStarOfDavid } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { AiOutlineQrcode } from "react-icons/ai";

const WhyMozahidWorld = () => {
    return (
      <div className="bg-[#fafafa] py-24 lg:px-16 md:px-12 px-6">
        <h1 className=" text-center mb-6 lg:text-4xl md:text-3xl text-2xl font-bold">
          Why Mozahid World ?
        </h1>
        <div className="grid px-6 md:grid-cols-2 justify-center items-center lg:grid-cols-3 ">
          <div className="flex justify-center  mt-6">
            <div className="p-2 text-4xl text-[#0556f3]">
              <FaStarOfDavid />
            </div>
            <div className="">
              <h1 className=" mb-2 lg:text-2xl text-xl">
                Programming made easy
              </h1>
              <p>
                We focus on simplicity.<br></br> Programming tutorials and{" "}
                <br></br>examples written in simple,<br></br> understandable
                language for <br></br>beginners.
              </p>
            </div>
          </div>
          <div className="flex justify-center  mt-6 ">
            <div className="px-2 text-4xl text-[#0556f3]">
              <AiOutlineQrcode />
            </div>
            <div className="">
              <h1 className=" mb-2 lg:text-2xl text-xl">
                Content You Can Trust Me
              </h1>
              <p>
                We focus on simplicity.<br></br> Programming tutorials and{" "}
                <br></br>examples written in simple,<br></br> understandable
                language for <br></br>beginners.
              </p>
            </div>
          </div>
          <div className="flex justify-center  mt-6">
            <div className="px-2 text-4xl text-[#0556f3]">
              <BsCodeSquare />
            </div>
            <div className="">
              <h1 className=" mb-2 lg:text-2xl text-xl">
                Learn by as well as Doing
              </h1>
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