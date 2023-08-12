import { twMerge as tw } from "tailwind-merge";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => (
    <button
        {...props}
        className={tw(
            "block bg-lavenderBlue font-outfit font-semibold text-xl uppercase p-4 rounded-full",
            props.className
        )}
    />
);

export default Button;
