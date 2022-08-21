import Banner from "./Banner";
import About from "./About";
import Courses from "./Courses";
import Teachers from "./Teachers";
import ReviewStudent from "./ReviewStudent";
import Contact from "./Contact";
import { useDispatch } from "react-redux";
import { AppDispatch } from "configStore";
import { useEffect } from "react";
import {isMenuHome} from 'Slices/courseCatalog'

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(isMenuHome(true));
    return function cleanup(){
      dispatch(isMenuHome(false));
    }
  }, []);
 

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
