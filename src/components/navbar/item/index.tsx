interface NavbarItemProps {
  children?: React.ReactNode;
}

const NavbarItem = ({ children }: NavbarItemProps) => {
  return (
    <div className="flex min-w-fit items-center justify-center text-xl">
      {children}
    </div>
  );
};

export default NavbarItem;
