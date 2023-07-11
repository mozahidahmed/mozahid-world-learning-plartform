import { GiWorld } from "react-icons/gi";

const Navbar = () => {
    return (
      <div className="lg:px-16 md:px-12 px-6 py-6  ">
        <div className="py-2 lg:flex md:flex  justify-between lg:gap-8 ">
          <div className="flex gap-2  items-center">
            <GiWorld className="text-4xl text-[#0556f3]" />
            <h1 className="text-3xl ">ᗰᗯOᖇᒪᗪ</h1>
          </div>
          <div className="flex gap-6 text-2xl lg:mt-0 md:mt-0 mt-4">
            <div className="">𝙷𝚘𝚖𝚎</div>
            <div className="">𝙼𝚒𝚜𝚜𝚒𝚘𝚗</div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;