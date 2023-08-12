import desktop from "./assets/images/desktop.png";
import inbox from "./assets/images/inbox.png";
import phone from "./assets/images/phone.png";
import servers from "./assets/images/servers.png";
import pfp1 from "./assets/profile/pfp1.png";
import pfp2 from "./assets/profile/pfp2.png";
import pfp3 from "./assets/profile/pfp3.png";

import techCrunch from "./assets/logos/TechCrunch.png";
import fastCompany from "./assets/logos/Fast Company.png";
import mit from "./assets/logos/MIT.png";
import forbes from "./assets/logos/Forbes.png";

import Button from "./components/Button";
import Section from "./components/Section";

const Home = () => {
  return (
    <div className="bg-midnightBlue text-white">
      <div className="mx-auto w-[65vw] space-y-24">
        <Hero />
        <Logos />
        <Analytics />
        <App />
        <Support />
        <Testimonials />
      </div>
    </div>
  );
};

const Hero = () => (
  <Section
    img={{
      src: desktop,
      alt: "A desktop displaying the skeleton of an analytics page",
    }}
    subHeading={null}
    heading={
      <h1 className="font-outfit text-7xl font-bold capitalize leading-[110%]">
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
        <Button className="border-[3px] border-lavenderBlue bg-transparent">
          sell NFTs
        </Button>
      </div>
    }
  />
);

const Logos = () => (
  <section>
    <p className="pb-2 uppercase">featured on</p>
    <ul className="flex flex-row justify-between rounded-lg bg-lavenderBlue/20 p-8">
      <li>
        <img
          src={techCrunch}
          alt="TechCrunch logo"
        />
      </li>
      <li>
        <img
          src={fastCompany}
          alt="Fast Company logo"
        />
      </li>
      <li>
        <img
          src={mit}
          alt="MIT logo"
        />
      </li>
      <li>
        <img
          src={forbes}
          alt="Forbes logo"
        />
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

const App = () => (
  <Section
    img={{
      src: phone,
      alt: "",
    }}
    heading={"browse nfts from your smartphone "}
    subHeading={"get our app"}
    description={
      "Our Krypto app is the easiest way to keep track of your assets when you're on the go."
    }
    button={{ children: "download app", className: "w-2/3" }}
  />
);

const Support = () => (
  <Section
    img={{
      src: servers,
      alt: "",
    }}
    reverse
    heading={"sell your NFTs from Anywhere at any time"}
    subHeading={"24/7 access"}
    description={
      "With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time."
    }
    button={{ children: "get started", className: "w-2/3" }}
  />
);

const Testimonials = () => {
  const Card: React.FC<{ picture: string; name: string; text: string }> = ({
    picture,
    name,
    text,
  }) => (
    <div className="bg-darkIndigo p-5 rounded-xl">
      <img
        src={picture}
        alt={`${name}'s profile picture`}
        className="mx-auto aspect-square rounded-full"
      />
      <h4 className="mt-2 mb-4 font-outfit text-xl font-semibold uppercase text-paleAqua">
        {name}
      </h4>
      <p>{text}</p>
    </div>
  );

  return (
    <section className="text-center">
      <h3 className="font-outfit text-xl font-semibold uppercase">
        testimonials
      </h3>
      <h2 className="mb-8 font-outfit text-6xl font-bold capitalize">
        read what others to say
      </h2>
      <div className="grid grid-cols-3 gap-8">
        <Card
          picture={pfp1}
          name={"Olivia Cole"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minima dolor quasi asperiores nulla totam soluta voluptates excepturi, neque obcaecati dolores dicta eum doloribus sed vel? Eveniet possimus ducimus earum!"
          }
        />
        <Card
          picture={pfp2}
          name={"Evan White"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis exercitationem distinctio voluptate at illum."
          }
        />
        <Card
          picture={pfp3}
          name={"Jessica Page"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas explicabo voluptates saepe, culpa quasi optio. Rem id deserunt assumenda!"
          }
        />
      </div>
    </section>
  );
};

export default Home;
