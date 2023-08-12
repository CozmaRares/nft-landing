import desktop from "./assets/images/desktop.png";
import inbox from "./assets/images/inbox.png";

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
        <Analytics />
      </div>
    </div>
  );
};

const Hero = () => (
  <Section
    img={{
      src: desktop,
      alt: "A desktop displaying the skeletion of an analytics page",
    }}
    subHeading={null}
    heading={
      <h1 className="font-outfit font-bold text-7xl capitalize leading-[110%]">
        discover and collect <span className="text-lavenderBlue">rare</span>{" "}
        NFTs
      </h1>
    }
    description={
      "The most secure marketplace for buying and selling unique crypto assets."
    }
    button={
      <div className="grid grid-cols-2 gap-8">
        <Button>buy NFTs</Button>
        <Button className="bg-transparent border-[3px] border-lavenderBlue">
          sell NFTs
        </Button>
      </div>
    }
  />
);

const Logos = () => (
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

const Analytics = () => (
  <Section
    img={{
      src: inbox,
      alt: "",
    }}
    reverse
    heading={"built-in analytics to track your nfts"}
    subHeading={"analytics"}
    description={
      "Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time."
    }
    button={{ children: "view our pricing", className: "w-2/3" }}
  />
);

export default App;
