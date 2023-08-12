import { twMerge as tw } from "tailwind-merge";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = props => (
  <button
    {...props}
    className={tw(
      "block rounded-full bg-lavenderBlue p-4 font-outfit text-xl font-semibold uppercase",
      props.className,
    )}
  />
);

export default Button;
