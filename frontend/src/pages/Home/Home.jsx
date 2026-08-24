import TopBar from "../../components/layout/TopBar/TopBar";
import Header from "../../components/layout/Header/Header";

import Hero from "../../components/sections/Hero/Hero";
import Categories from "../../components/sections/Categories/Categories";
import Benefits from "../../components/sections/Benefits/Benefits";
import FeaturedProducts from "../../components/sections/FeaturedProducts/FeaturedProducts";
import BrandStory from "../../components/sections/BrandStory/BrandStory";

function Home() {
  return (
    <>
      <TopBar />
      <Header />

      <main>
        <Hero />
        <Categories />
        <Benefits />
        <FeaturedProducts />
        <BrandStory />
      </main>
    </>
  );
}

export default Home;
