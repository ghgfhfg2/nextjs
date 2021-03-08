import Link from "next/link"

const Header = () => (
  <div>
    <Link href="/">
      <a style={{marginRight:"10px"}}>home</a>
    </Link>
    <Link href="/profile">
      <a>profile</a>
    </Link>
  </div>
);

export default Header;