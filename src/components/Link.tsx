import { twMerge as tw } from "tailwind-merge";

const Link: React.FC<{
  href?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ href, children, className }) => (
  <a
    href={href ?? "#"}
    rel="noreferrer"
    target="_blank"
    className={tw(
      "inline-block  after:block after:h-[3px] after:w-0 after:bg-white after:transition-[width] hover:after:w-full",
      className,
    )}
  >
    {children}
  </a>
);

export default Link;
