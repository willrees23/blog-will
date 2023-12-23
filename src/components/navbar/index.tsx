import { useTheme } from "next-themes";

interface NavbarProps {
  className?: string;
  children: React.ReactNode;
}

const Navbar = ({ className, children }: NavbarProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={
        "ml-8 mr-8 mt-5 max-h-20 min-h-20 items-center overflow-hidden rounded-lg border px-5 py-5" +
        " " +
        className
      }
    >
      <div className="flex">{children}</div>
    </div>
  );
};

export default Navbar;
