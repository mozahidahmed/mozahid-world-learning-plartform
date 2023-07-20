


const LearnProgrammingForFree = () => {
    return (
      <div className="lg:px-16 md:px-12 px-6">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
          <div className="">
            <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl">
              Learn Programming <br></br> For Free
            </h1>
            <p className="mt-6">
              Learn to program with our beginner-friendly tutorials <br></br>{" "}
              and examples. Read tutorials, try examples, write <br></br>code
              and learn to program.
            </p>
            <div className="mt-12">
              <h1 className="font-bold lg:text-2xl">
                Get the latest tutorials and updates
              </h1>
              <div className="flex mt-2">
                <input
                  type="email"
                  name="email"
                  className="mt-1 px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-64  rounded-md sm:text-sm focus:ring-1"
                  placeholder="you@example.com"
                />
                <button className="bg-[#0556f3] text-white font-bold mt-1 px-3 py-4  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-32   rounded-md sm:text-sm focus:ring-1 rounded-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="lg:order-last md:order-last order-first">
            <img
              src="https://www.programiz.com/sites/all/themes/programiz/assets/cover-artwork.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default LearnProgrammingForFree;