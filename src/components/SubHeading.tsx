import { twMerge as tw } from "tailwind-merge";

const SubHeading: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <p
    className={tw(
      "text-md font-outfit font-semibold uppercase tracking-widest text-paleAqua md:text-xl",
      className,
    )}
  >
    {text}
  </p>
);

export default SubHeading;
