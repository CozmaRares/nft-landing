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
import SubHeading from "./components/SubHeading";
import Heading from "./components/Heading";
import Link from "./components/Link";

const GRADIENT = "bg-gradient-to-br from-[#8080D7] to-[#AAD9D9]";

const Home = () => {
  return (
    <main className="bg-midnightBlue text-white">
      <div className="mx-auto  w-[95vw] max-w-[1000px] space-y-24 py-4">
        <NavBar />
        <Hero />
        <Logos />
        <Analytics />
        <App />
        <Support />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
      <div className={`h-2 ${GRADIENT}`}></div>
    </main>
  );
};

const NavBar = () => (
  <aside className="grid grid-cols-2 font-outfit text-xl font-bold">
    <div className="uppercase">krypto</div>
    <ul className="flex flex-row justify-between">
      <li>
        <Link>about</Link>
      </li>
      <li>
        <Link>pricing</Link>
      </li>
      <li>
        <Link>contact</Link>
      </li>
      <li>
        <Link className="rounded-full bg-lavenderBlue px-6 py-2 after:content-none">
          buy nfts
        </Link>
      </li>
    </ul>
  </aside>
);

const Hero = () => (
  <Section
    img={{
      src: desktop,
      alt: "A desktop displaying the skeleton of an analytics page",
    }}
    subHeading={null}
    heading={
      <h1 className="font-outfit text-6xl font-bold capitalize leading-[110%] lg:text-7xl">
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
    <div className="rounded-xl bg-darkIndigo p-5">
      <img
        src={picture}
        alt={`${name}'s profile picture`}
        className="mx-auto aspect-square rounded-full"
      />
      <p className="mb-4 mt-2 font-outfit text-xl font-semibold uppercase text-paleAqua">
        {name}
      </p>
      <p>{text}</p>
    </div>
  );

  return (
    <section className="mx-auto w-3/5 text-center lg:w-full">
      <SubHeading
        text="testimonials"
        className="text-white"
      />
      <Heading
        text="read what others to say"
        className="mb-8"
      />
      <div className="grid gap-8 lg:grid-cols-3">
        <Card
          picture={pfp1}
          name="Olivia Cole"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minima dolor quasi asperiores nulla totam soluta voluptates excepturi, neque obcaecati dolores dicta eum doloribus sed vel? Eveniet possimus ducimus earum!"
        />
        <Card
          picture={pfp2}
          name="Evan White"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis exercitationem distinctio voluptate at illum."
        />
        <Card
          picture={pfp3}
          name="Jessica Page"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas explicabo voluptates saepe, culpa quasi optio. Rem id deserunt assumenda!"
        />
      </div>
    </section>
  );
};

const CallToAction = () => (
  <section className={`rounded-3xl p-16 text-center ${GRADIENT}`}>
    <div className="mx-auto w-3/5">
      <SubHeading
        text="are you ready?"
        className="text-black"
      />
      <Heading
        text="be a part of the next big thing"
        className="capitalize"
      />
      <Button className="mt-8 w-full bg-black">get started</Button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="grid grid-cols-6 items-center gap-y-4 text-base">
    <span className="font-outfit text-xl font-semibold uppercase">krypto</span>
    <span className="font-outfit text-xl font-semibold">links</span>
    <span className="font-outfit text-xl font-semibold">market</span>
    <span className="font-outfit text-xl font-semibold">contact</span>
    <span className="col-span-2 font-outfit text-xl font-semibold">
      join our newsletter
    </span>
    <ul>
      <li>
        <Link>Privacy Policy</Link>
      </li>
      <li>
        <Link>Terms of Service</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Pricing</Link>
      </li>
      <li>
        <Link>App</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link>Browse NFTs</Link>
      </li>
      <li>
        <Link>Buy NFTs</Link>
      </li>
      <li>
        <Link>Sell NFTs</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link>Email</Link>
      </li>
      <li>
        <Link>LinkedIn</Link>
      </li>
      <li>
        <Link>Instagram</Link>
      </li>
      <li>
        <Link>Twitter</Link>
      </li>
    </ul>
    <div className="col-span-2 flex flex-row items-center justify-between rounded-full bg-darkIndigo p-2 pl-6">
      <div className="relative">
        <input
          type="email"
          name="email"
          id="email"
          className="peer w-full bg-transparent text-white"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute left-0 top-0 opacity-0 peer-placeholder-shown:opacity-80"
        >
          Email Address
        </label>
      </div>
      <button className="w-1/3 min-w-fit rounded-full bg-lavenderBlue p-2 font-bold uppercase">
        submit
      </button>
    </div>
  </footer>
);

export default Home;
