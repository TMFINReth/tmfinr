import { cva } from "class-variance-authority";
import classNames from "classnames";

const buttonStyles = cva(
  "group h-11 rounded px-8 flex items-center justify-center box-border gap-2 cursor-pointer z-20 transition duration-300 active:duration-100 relative",
  {
    variants: {
      type: {
        normal: "py-1 px-1",
        primary: "bg-primary hover:-translate-y-2 hover:bg-primary-dark",
        border: "border border-white hover:bg-gray-100/10 hover:-translate-y-2",
      },
      disable: {
        true: " opacity-50",
      },
      reverse: {
        true: "!flex-row-reverse",
      },
      noPadding: {
        true: "!px-0 !py-0 !h-auto",
      },
    },
  }
);

const Button = ({
  title,
  titleClassName,
  className = "",
  href,
  type = "normal",
  reverse = false,
  disable = false,
  noPadding = false,
  onClick = () => false,
}) => {
  const Container = href ? "a" : "button";

  const renderContent = () => (
    <>
      {title && (
        <span className={classNames("text-white text-base", titleClassName)}>
          {title}
        </span>
      )}
    </>
  );

  return (
    <Container
      className={buttonStyles({
        className,
        type,
        disable,
        reverse,
        noPadding,
      })}
      disabled={disable}
      type="submit"
      href={href || ""}
      onClick={onClick}
    >
      {renderContent()}
    </Container>
  );
};

export { Button };
