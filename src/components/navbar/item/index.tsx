interface NavbarItemProps {
  children?: React.ReactNode;
  className?: string;
}

const NavbarItem = ({ children, className }: NavbarItemProps) => {
  return (
    <div
      className={
        "flex min-w-fit items-center justify-center sm:text-xl" +
        " " +
        className
      }
    >
      {children}
    </div>
  );
};

export default NavbarItem;
