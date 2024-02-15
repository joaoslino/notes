import Link from "next/link";

const Navbar = () => {
  return (
    <nav> {/* Wrap the content in a nav element for semantic structure */}
      <Link href="/">
        Home
      </Link>
      <Link href="/notes">
        Notes
      </Link>
    </nav>
  );
}

export default Navbar;
