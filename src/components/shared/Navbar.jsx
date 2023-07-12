import { GiWorld } from "react-icons/gi";

const Navbar = () => {
    return (
      <div className="lg:px-16  md:px-12 px-6 py-6  ">
        <div className="py-2 flex  justify-between items-center lg:gap-8 ">
          <div className="flex gap-2  items-center ">
            <GiWorld className="lg:text-4xl md:text-2xl text-xl text-[#0556f3]" />
            <h1 className="lg:text-3xl md:text-3xl text-xl">ᗰᗯOᖇᒪᗪ</h1>
          </div>
          <div className="flex lg:gap-6 md:gap-4 gap-4  items-center text-2xl lg:mt-0 md:mt-0 ">
            <div className="lg:text-2xl  text-xl">𝙷𝚘𝚖𝚎</div>
            <div className="lg:text-2xl  text-xl">𝙼𝚒𝚜𝚜𝚒𝚘𝚗</div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;