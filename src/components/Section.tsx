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
  } & InferProps<[typeof InnerSection]>
> = props => (
  <section className="grid grid-cols-2 items-center">
    <InnerSection
      {...props}
      className={tw(props.className, props.reverse ? "order-last" : "")}
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
  <div className={tw("space-y-6", className)}>
    <div className="flex flex-col-reverse">
      {typeof heading != "string" ? (
        heading
      ) : (
        <h2 className="font-outfit text-6xl font-bold capitalize leading-[110%]">
          {heading}
        </h2>
      )}
      {typeof subHeading != "string" ? (
        subHeading
      ) : (
        <h3 className="font-outfit text-xl font-semibold uppercase tracking-widest text-paleAqua">
          {subHeading}
        </h3>
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
