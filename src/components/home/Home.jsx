import Course from "./Course";
import LearnProgrammingForFree from "./LearnProgrammingForFree";
import WelCome from "./WelCome";
import WhyMozahidWorld from "./WhyMozahidWorld";


const Home = () => {
    return (
        <div className="">
        <WelCome/>
        <LearnProgrammingForFree/>
        <Course/>
        <WhyMozahidWorld/>
        </div>
    );
};

export default Home;