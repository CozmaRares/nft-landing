import { ReactNode, isValidElement } from "react";
import { twMerge as tw } from "tailwind-merge";
import InferProps from "../utils/InferProps";
import Button, { ButtonProps } from "./Button";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const Section: React.FC<
  {
    img: {
      src: string;
      alt: string;
    };
    reverse?: boolean;
  } & InferProps<[typeof InnerSection]>
> = props => (
  <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
    <InnerSection
      {...props}
      className={tw(props.className, props.reverse ? "lg:order-last" : "")}
    />
    <div>
      <img
        src={props.img.src}
        alt={props.img.alt}
        className="mx-auto max-h-[450px]"
      />
    </div>
  </section>
);

const InnerSection: React.FC<{
  className?: string;
  heading: string | ReactNode;
  subHeading: string | ReactNode;
  description: string | ReactNode;
  button: ButtonProps | ReactNode;
}> = ({ className, heading, subHeading, description, button }) => (
  <div className={tw("w-2/3 space-y-6 lg:w-full", className)}>
    <div className="flex flex-col-reverse">
      {typeof heading != "string" ? heading : <Heading text={heading} />}
      {typeof subHeading != "string" ? (
        subHeading
      ) : (
        <SubHeading text={subHeading} />
      )}
    </div>
    {typeof description != "string" ? (
      description
    ) : (
      <p className="w-5/6 font-roboto text-xl">{description}</p>
    )}
    {isValidElement(button) ? button : <Button {...(button as ButtonProps)} />}
  </div>
);

export default Section;
