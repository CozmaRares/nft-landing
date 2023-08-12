const Section: React.FC<{
    children: React.ReactNode;
    img: {
        src: string;
        alt: string;
    };
    reverse?: boolean;
}> = ({ children, img, reverse }) => (
    <section className="grid grid-cols-2 items-center">
        <div className={reverse ? "order-last" : ""}>{children}</div>
        <div>
            <img src={img.src} alt={img.alt} className="mx-auto max-h-[450px]" />
        </div>
    </section>
);

export default Section;
