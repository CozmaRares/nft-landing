import { twMerge as tw } from "tailwind-merge";

const SubHeading: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <h3
    className={tw(
      "font-outfit text-xl font-semibold uppercase tracking-widest text-paleAqua",
      className,
    )}
  >
    {text}
  </h3>
);

export default SubHeading;
