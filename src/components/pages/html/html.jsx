
import { AiFillHtml5 } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";

const html = () => {
 

  


  return (
    <div className="lg:px-16 md:px-12 px-6 text-xl py-6">
      <div className="  rounded-full p-2 flex gap-2">
        <AiFillHtml5 className="bg-[#0556f3] lg:text-[200px] p-6 md:text-[150px] rounded-xl text-4xl text-white" />
        <h1 className="lg:text-5xl md:text-4xl text-xl">Learn HTML</h1>
      </div>

      <div className="mt-6">
        <h1>
          HTML (HyperText Markup Language) is a language used for creating
          webpages which is the fundamental building block of the Web.
        </h1>
        <h1 className="mt-6 mb-6">
          One thing to remember about HTML is that it is a markup language with
          no programming constructs. Instead, the language provides us with a
          structure to build web pages.
        </h1>
        <h1>
          Using HTML, we can define web page elements such as paragraphs,
          headings, links, and images. Our HTML tutorials will teach you
          everything you need to know about HTML5 (modern HTML) step-by-step.
        </h1>
      </div>

   



      {/* border cart */}
      <div className="border-2 p-6 mt-6 rounded-xl bg-[rgba(239,239,248,0.7)] py-2">
        <div className="py-6">
          <h1 className="text-4xl mb-2">Course Overviews</h1>
          <hr className="" />
          <div className="py-2">
            <div className="flex gap-2  items-center">
              <BsCheckCircle />
              <h1>What is HTML?</h1>
            </div>
            <div className="flex gap-2 mt-2 mb-2 items-center">
              <BsCheckCircle />
              <h1>HTML Basics?</h1>
            </div>
            <div className="flex gap-2  items-center">
              <BsCheckCircle />
              <h1>Web Design Basics?</h1>
            </div>
          </div>
        </div>
      </div>
      {/* border cart */}
    </div>
  );
};

export default html;
