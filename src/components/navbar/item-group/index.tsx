interface NavbarItemGroupProps {
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
  variant?: "default" | "icon";
}

const NavbarItemGroup = (props: NavbarItemGroupProps) => {
  const direction =
    props.align == "right"
      ? "justify-end"
      : props.align == "center"
        ? "justify-center"
        : "justify-start";

  const space = props.variant == "icon" ? "space-x-2" : "space-x-5";

  return (
    <div
      className={
        "ml-8 flex w-full items-center rounded-md text-xl" +
        " " +
        direction +
        " " +
        space
      }
    >
      {props.children}
    </div>
  );
};

export default NavbarItemGroup;
