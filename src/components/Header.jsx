import { Flowbite, Navbar } from "flowbite-react";
import { headerLogoData, headerNavData } from "./Data";
import { customTheme } from "../flowbiteTheme";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <Navbar
          fluid
          rounded
          className="fixed w-full z-20 top-0 start-0 px-4 md:px-32 trans-nav"
        >
          <Navbar.Brand
            as={Link}
            href={headerLogoData[0].link2}
            className="text-xl font-bold md:text-2xl text-primary-logo"
          >
            {headerLogoData[0].logo}
            <span className="self-center whitespace-nowrap text-sm font-semibold dark:text-white">
              {headerLogoData[0].name}
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {headerNavData.map((d, index) => (
              <Navbar.Link
                key={index}
                href={d.link}
                className="text-white md:hover:text-primary-logo tracking-wider"
                target={d.target}
              >
                <p className="">
                  {d.nav} {d.icon}
                </p>
              </Navbar.Link>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </Flowbite>
    </>
  );
};

export default Header;
