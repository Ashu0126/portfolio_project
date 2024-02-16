import Footer from "@/src/components/molecules/Footer";
import AboutMe from "@/src/components/organisms/AboutMe";
import Experience from "@/src/components/organisms/Experience";
import HeroBanner from "@/src/components/organisms/HeroBanner";
import MyWork from "@/src/components/organisms/MyWork";

const Page = () => {
  return (
    <>
      <HeroBanner />
      <AboutMe />
      <Experience />
      <MyWork />
      <Footer />
    </>
  );
};

export default Page;
