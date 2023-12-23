interface NavbarHeadingProps {
  children?: React.ReactNode;
}

const NavbarHeading = ({ children, ...props }: NavbarHeadingProps) => (
  <div className="flex min-w-fit items-center rounded-md text-2xl" {...props}>
    {children}
  </div>
);

export default NavbarHeading;
