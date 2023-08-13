import { twMerge as tw } from "tailwind-merge";

const Link: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
}> = ({ href, children, className }) => (
  <a
    href={href}
    rel="noreferrer"
    target="_blank"
    className={tw("after:block after:w-0 after:h-[3px] after:bg-white hover:after:w-full after:transition-[width]", className)}
  >
    {children}
  </a>
);

export default Link;
