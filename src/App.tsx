import desktop from "./assets/desktop.png";

import Button from "./components/Button";

const App = () => {
  return (
    <div className="bg-midnightBlue text-white">
      <div className="w-[65vw] mx-auto">
        <Hero />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="grid grid-cols-2 items-center">
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
        <div className="flex flex-row gap-[10%]">
          <Button>buy NFTs</Button>
          <Button className="bg-transparent border-[3px] border-lavenderBlue">
            sell NFTs
          </Button>
        </div>
      </div>
      <div>
        <img
          src={desktop}
          alt="A desktop displaying the skeletion of an analytics page"
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default App;
