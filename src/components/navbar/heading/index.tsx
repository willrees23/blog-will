interface NavbarHeadingProps {
  children?: React.ReactNode;
  className?: string;
}

const NavbarHeading = ({
  children,
  className,
  ...props
}: NavbarHeadingProps) => (
  <div
    className={
      "flex min-w-fit items-center rounded-md sm:text-2xl" + " " + className
    }
    {...props}
  >
    {children}
  </div>
);

export default NavbarHeading;
