import Banner from "../components/layout/Banner";
import Categories from "../components/layout/Categories";
import Features from "../components/layout/Features";
import MeetupFeature from "../components/layout/MeetupFeature";

const Home = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Banner></Banner>
      <Categories></Categories>
      <Features></Features>
      <MeetupFeature></MeetupFeature>
    </div>
  );
};

export default Home;
