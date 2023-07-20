import { CgMouse } from "react-icons/cg";

const WelCome = () => {
  return (
    <div className="lg:px-16 md:px-12 px-6">
      <div className="py-6">
        <div className="lg:text-[120px] text-[30px]  grid  ">
          <h1 className="font-bold specialhead">CREATING</h1>
          <h1 className="lg:mt-[-60px]  text-[#0556f3] font-bold">
            THE - FUTURE
          </h1>
          <h1 className="lg:mt-[-60px] font-bold specialhead">WEB DEVELOPER </h1>
        </div>
        <h1 className="lg:text-3xl mb-12 dark_style">
          Helping businesses go online and grow bigger <br /> with high-tech web
          applications.
        </h1>
      </div>
      <div className="text-5xl fade grid justify-center animate-bounce">
        <CgMouse />
      </div>

      <div className="py-12">
        <div className="py-6">
          <h1>WE ENVISION WITH A MISSION</h1>

          <h1 className="text-3xl font-bold py-2">
            Here, we embrace the challenge to drive <br />each other to excellence by
            enriching <br />our own capabilities
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12">
          <p>
            We have a unique combination of talents motivated by ambitious goals
            and a can-do attitude. Our drive to develop excellent products is
            built on teamwork, passion, and giving team members full control
            over their work to succeed on their own. We want to create an
            environment where ideas can flourish. We have a unique combination
            of talents motivated by ambitious goals and a can-do attitude. Our
            drive to develop excellent products is built on teamwork, passion,
            and giving team members full control over their work to succeed on
            their own. We want to create an environment where ideas can
            flourish.
          </p>
          <p>
            We have a unique combination of talents motivated by ambitious goals
            and a can-do attitude. Our drive to develop excellent products is
            built on teamwork, passion, and giving team members full control
            over their work to succeed on their own. We want to create an
            environment where ideas can flourish. We have a unique combination
            of talents motivated by ambitious goals and a can-do attitude. Our
            drive to develop excellent products is built on teamwork, passion,
            and giving team members full control over their work to succeed on
            their own. We want to create an environment where ideas can
            flourish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelCome;
