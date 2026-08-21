import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import StatusStrip from "./components/StatusStrip.jsx";
import Problem from "./components/Problem.jsx";
import Approach from "./components/Approach.jsx";
import InteractiveDemo from "./components/InteractiveDemo.jsx";
import Pipeline from "./components/Pipeline.jsx";
import Augmentation from "./components/Augmentation.jsx";
import Technology from "./components/Technology.jsx";
import ReportPreview from "./components/ReportPreview.jsx";
import WhyApproach from "./components/WhyApproach.jsx";
import FutureVision from "./components/FutureVision.jsx";
import Disclaimer from "./components/Disclaimer.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StatusStrip />
        <Problem />
        <Approach />
        <InteractiveDemo />
        <Pipeline />
        <Augmentation />
        <Technology />
        <ReportPreview />
        <WhyApproach />
        <FutureVision />
        <Disclaimer />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
