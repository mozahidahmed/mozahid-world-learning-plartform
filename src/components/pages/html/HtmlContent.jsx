import { useEffect, useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";



const HtmlContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/htmlData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="lg:px-16 md:px-12 px-6 text-xl py-6">
      <div className="  rounded-full p-2 flex gap-2">
        <AiFillHtml5 className="bg-[#0556f3] lg:text-[200px] lg:p-6 p-2 md:text-[150px] lg:rounded-xl text-6xl text-white" />
        <h1 className="lg:text-5xl md:text-4xl text-2xl">Learn HTML</h1>
      </div>

      <div className="mt-6">
        <p>
          HTML (HyperText Markup Language) is a language used for creating
          webpages which is the fundamental building block of the Web.
        </p>
        <p className="mt-6 mb-6">
          One thing to remember about HTML is that it is a markup language with
          no programming constructs. Instead, the language provides us with a
          structure to build web pages.
        </p>
        <p>
          Using HTML, we can define web page elements such as paragraphs,
          headings, links, and images. Our HTML tutorials will teach you
          everything you need to know about HTML5 (modern HTML) step-by-step.
        </p>
      </div>

      <div className="border-2 p-6 mt-6 rounded-xl bg-[rgba(239,239,248,0.7)] py-2">
        <h1 className="lg:text-4xl ms:3xl text-2xl mb-2">Course Overviews</h1>
        {data?.map((content, index) => (
          <>
            <div className="flex gap-2 mt-2 items-center">
              <a href="https://youtu.be/NMZdJZz3Mig">
                <h1>
                  <span className="text-[#2874f0] font-bold">{index}</span>.{" "}
                  {content.name}
                </h1>
              </a>
            </div>
          </>
        ))}
      </div>

      <div className="mt-12">
        <h1 className="text-3xl">Course Instructor</h1>
        <div className="items-center mt-6 bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              alt="Bonnie Avatar"
            />
          </a>
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <h1 className="text-xl" href="#">
                Mozahidul Islam
              </h1>
            </h3>
            <span className="text-gray-500 dark:text-gray-400">
              CEO & Founder
            </span>
            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
              Bonnie drives the technical strategy of the flowbite platform and
              brand.
            </p>
            <ul className="flex space-x-4 sm:mt-0">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlContent;
