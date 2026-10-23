import BackToTop from "../../components/ui/BackToTop/BackToTop";
import TopBar from "../../components/layout/TopBar/TopBar";
import Header from "../../components/layout/Header/Header";

import Hero from "../../components/sections/Hero/Hero";
import Categories from "../../components/sections/Categories/Categories";
import Benefits from "../../components/sections/Benefits/Benefits";
import FeaturedProducts from "../../components/sections/FeaturedProducts/FeaturedProducts";
import BrandStory from "../../components/sections/BrandStory/BrandStory";
import OurStory from "../../components/sections/OurStory/OurStory";
import InstagramFeed from "../../components/sections/InstagramFeed/InstagramFeed";
import Footer from "../../components/layout/Footer/Footer";

function Home() {
  return (
    <div id="inicio">
      <TopBar />
      <Header />

      <main>
        <Hero />
        <Categories />
        <Benefits />
        <FeaturedProducts />
        <BrandStory />
        <OurStory />
        <InstagramFeed />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Home;
