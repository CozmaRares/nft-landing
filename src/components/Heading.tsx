import { twMerge as tw } from "tailwind-merge";

const Heading: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <h2
    className={tw(
      "font-outfit text-6xl font-bold capitalize leading-[110%]",
      className,
    )}
  >
    {text}
  </h2>
);

export default Heading;
