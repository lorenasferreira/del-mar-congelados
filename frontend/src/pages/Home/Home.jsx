import Hero from "../../components/sections/Hero/Hero";
import Categories from "../../components/sections/Categories/Categories";
import Benefits from "../../components/sections/Benefits/Benefits";
import FeaturedProducts from "../../components/sections/FeaturedProducts/FeaturedProducts";
import BrandStory from "../../components/sections/BrandStory/BrandStory";
import OurStory from "../../components/sections/OurStory/OurStory";
import InstagramFeed from "../../components/sections/InstagramFeed/InstagramFeed";

function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Benefits />
      <FeaturedProducts />
      <BrandStory />
      <OurStory />
      <InstagramFeed />
    </main>
  );
}

export default Home;
