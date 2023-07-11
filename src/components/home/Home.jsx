import Course from "./Course";
import LearnProgrammingForFree from "./LearnProgrammingForFree";
import WelCome from "./WelCome";
import WhyMozahidWorld from "./WhyMozahidWorld";


const Home = () => {
    return (
      <div className="lg:px-16 md:px-12 px-6">
        <WelCome />
        <LearnProgrammingForFree />
        <Course />
        <WhyMozahidWorld />
      </div>
    );
};

export default Home;