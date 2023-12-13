import Banner from "./components/Banner/Banner";
import Guides from "./components/Guides/Guides";
import StorySection from "./components/StorySection/StorySection";
import TourType from "./components/TourType/TourType";
import ViewPackages from "./components/ViewPackages/ViewPackages";

const Home = () => {
  return (
    <>
      <Banner />
      <ViewPackages />
      <Guides />
      <TourType />
      <StorySection />
    </>
  );
};

export default Home;
