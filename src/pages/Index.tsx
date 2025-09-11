import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Requirements from "@/components/Requirements";
import SuccessStories from "@/components/SuccessStories";
import Events from "@/components/Events";
import SubmitIdea from "@/components/SubmitIdea";
import Investors from "@/components/Investors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="inicio">
          <Hero />
        </div>
        <Requirements />
        <SuccessStories />
        <Events />
        <SubmitIdea />
        <Investors />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
