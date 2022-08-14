import Banner from "./Banner";
import About from "./About";
import Courses from "./Courses";
import Teachers from "./Teachers";
import ReviewStudent from "./ReviewStudent";
import Contact from "./Contact";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      
      <Banner />
      <About />
      <Courses />
      <Teachers />
      <ReviewStudent />
      <Contact />
    </div>
  );
};

export default HomePage;
