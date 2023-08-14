import { twMerge as tw } from "tailwind-merge";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = props => (
  <button
    {...props}
    className={tw(
      "block rounded-full border-[3px] border-violetBlue bg-violetBlue  p-4 font-outfit text-xl font-semibold uppercase transition-colors hover:bg-transparent",
      props.className,
    )}
  />
);

export default Button;
