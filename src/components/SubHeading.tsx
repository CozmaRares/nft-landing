import { twMerge as tw } from "tailwind-merge";

const SubHeading: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <h3
    className={tw(
      "text-md font-outfit font-semibold uppercase tracking-widest text-paleAqua md:text-xl",
      className,
    )}
  >
    {text}
  </h3>
);

export default SubHeading;
