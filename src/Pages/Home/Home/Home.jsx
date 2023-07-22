import Colleges from "../Colleges/Colleges";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <Colleges></Colleges>
      <Gallery></Gallery>
      <Research></Research>
    </div>
  );
};

export default Home;
