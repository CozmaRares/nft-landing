import desktop from "./assets/images/desktop.png";
import techCrunch from "./assets/logos/TechCrunch.png";
import fastCompany from "./assets/logos/Fast Company.png";
import mit from "./assets/logos/MIT.png";
import forbes from "./assets/logos/Forbes.png";

import Button from "./components/Button";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="bg-midnightBlue text-white">
      <div className="w-[65vw] mx-auto space-y-24">
        <Hero />
        <Logos />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <Section
      img={{
        src: desktop,
        alt: "A desktop displaying the skeletion of an analytics page",
      }}
    >
      <div className="space-y-6">
        <h1 className="font-outfit font-bold text-7xl capitalize leading-[110%]">
          <p>discover</p>
          <p>and collect</p>
          <p>
            <span className="text-lavenderBlue">rare</span> NFTs
          </p>
        </h1>
        <p className="w-2/3 font-roboto text-xl">
          The most secure marketplace for buying and selling unique crypto
          assets.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <Button>buy NFTs</Button>
          <Button className="bg-transparent border-[3px] border-lavenderBlue">
            sell NFTs
          </Button>
        </div>
      </div>
    </Section>
  );
};

const Logos = () => {
  return (
    <section>
      <p className="uppercase pb-2">featured on</p>
      <ul className="flex flex-row justify-between bg-lavenderBlue/20 p-8 rounded-lg">
        <li>
          <img src={techCrunch} alt="TechCrunch logo" />
        </li>
        <li>
          <img src={fastCompany} alt="Fast Company logo" />
        </li>
        <li>
          <img src={mit} alt="MIT logo" />
        </li>
        <li>
          <img src={forbes} alt="Forbes logo" />
        </li>
      </ul>
    </section>
  );
};

export default App;
