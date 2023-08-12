import { ReactNode, isValidElement } from "react";
import { twMerge as tw } from "tailwind-merge";
import InferProps from "../utils/InferProps";
import Button, { ButtonProps } from "./Button";

const Section: React.FC<
    {
        img: {
            src: string;
            alt: string;
        };
        reverse?: boolean;
    } & InferProps<[typeof SectionInner]>
> = (props) => (
    <section className="grid grid-cols-2 items-center">
        <SectionInner {...props} className={props.reverse ? "order-last" : ""} />
        <div>
            <img
                src={props.img.src}
                alt={props.img.alt}
                className="mx-auto max-h-[450px]"
            />
        </div>
    </section>
);

const SectionInner: React.FC<{
    className?: string;
    heading: string | ReactNode;
    subHeading: string | ReactNode;
    description: string | ReactNode;
    button: ButtonProps | ReactNode;
}> = ({ className, heading, subHeading, description, button }) => {
    console.log();
    return (
        <div className={tw("space-y-6", className)}>
            {typeof subHeading != "string" ? subHeading : <h3>{subHeading}</h3>}
            {typeof heading != "string" ? heading : <h2>{heading}</h2>}
            {typeof description != "string" ? (
                description
            ) : (
                <p className="w-2/3 font-roboto text-xl"> {description} </p>
            )}
            {isValidElement(button) ? (
                button
            ) : (
                <Button {...(button as ButtonProps)} />
            )}
        </div>
    );
};
export default Section;
