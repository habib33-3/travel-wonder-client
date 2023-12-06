import Banner from "./components/Banner/Banner";
import StorySection from "./components/StorySection/StorySection";
import TourType from "./components/TourType/TourType";
import TourismSection from "./components/TourismSection/TourismSection";

const Home = () => {
  return (
    <>
      <Banner />
      <TourismSection />
      <TourType />
      <StorySection />
    </>
  );
};

export default Home;
