import { ReactNode, isValidElement } from "react";
import { twMerge as tw } from "tailwind-merge";
import InferProps from "../utils/InferProps";
import Button, { ButtonProps } from "./Button";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const Section: React.FC<{
  img: {
    src: string;
    alt: string;
  };
  content: InferProps<[typeof InnerSection]>;
  children?: ReactNode;
  reverse?: boolean;
  className?: string;
}> = props => (
  <section
    className={tw(
      "grid grid-cols-1 items-center gap-8 lg:grid-cols-2",
      props.className,
    )}
  >
    <InnerSection
      {...props.content}
      className={tw(
        props.content.className,
        props.reverse ? "lg:order-last" : "",
      )}
    />
    <div>
      <img
        src={props.img.src}
        alt={props.img.alt}
        className="mx-auto max-h-[450px] w-3/5 md:w-auto lg:w-4/5"
      />
    </div>
    {props.children}
  </section>
);

const InnerSection: React.FC<{
  className?: string;
  heading: string | ReactNode;
  subHeading: string | ReactNode;
  description: string | ReactNode;
  button: ButtonProps | ReactNode;
}> = ({ className, heading, subHeading, description, button }) => (
  <div
    className={tw(
      "space-y-6 text-center md:w-2/3 md:text-left lg:w-full",
      className,
    )}
  >
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
      <p className="mx-auto w-5/6 text-xl md:mx-0">{description}</p>
    )}
    {isValidElement(button) ? (
      button
    ) : (
      <Button
        {...(button as ButtonProps)}
        className={tw("mx-auto md:mx-0", (button as ButtonProps).className)}
      />
    )}
  </div>
);

export default Section;
