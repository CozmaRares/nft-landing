import { twMerge as tw } from "tailwind-merge";

const Heading: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <h2
    className={tw(
      "font-outfit text-3xl font-bold capitalize leading-[110%] md:text-5xl lg:text-6xl",
      className,
    )}
  >
    {text}
  </h2>
);

export default Heading;
