import Banner from "./Banner";
import About from "./About";
import Courses from "./Courses";
import Teachers from "./Teachers";
import ReviewStudent from "./ReviewStudent";
import Contact from "./Contact";
import {useParams} from 'react-router-dom'

type Props = {};

const HomePage = (props: Props) => {
  const {patch} = useParams();
  console.log(patch)
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
