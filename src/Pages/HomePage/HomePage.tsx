import Banner from "./Banner";
import About from "./About";
import Courses from "./Courses";
import Teachers from "./Teachers";
import ReviewStudent from "./ReviewStudent";
import Contact from "./Contact";

const HomePage = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  //   dispatch(isMenuHome(true));
  //   return function cleanup(){
  //     dispatch(isMenuHome(false));
  //   }
  // }, []);
  // const { activeNavbar } = useSelector(
  //   (state: RootState) => state.danhMucKhoaHoc
  // );

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
