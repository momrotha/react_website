

// import Link from "next/link";
import { Navbar } from "flowbite-react";

export function NavbarComponent() {
  return (
    <Navbar fluid rounded className="bg-pink-200 fixed top-0 left-0 w-full z-50">
      <Navbar.Brand  href="/">
        <img src="logo.png" className="rounded-full h-16 w-16 border-2 border-blue-500 bg-white p-1" alt="Flowbite React Logo" />
        <img src="namelogo.png" className=" h-16 w-32" alt="Flowbite React Logoname" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/home" active>
          Home
        </Navbar.Link>
        <Navbar.Link  href="/about">
          About
        </Navbar.Link>
        <Navbar.Link href="/shop">Shop</Navbar.Link>
        <Navbar.Link href="/service">Services</Navbar.Link>
        <Navbar.Link href="/contect">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

  );
}
