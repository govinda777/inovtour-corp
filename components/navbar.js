"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Logo from "./logo";

export default function Navbar(props) {
  const menuItems = [
    { label: "Onboarding", href: "/workflow" },
    { label: "Inicio", href: "/" },
    { label: "Soluções", href: "/solutions" },
    { label: "Quem Somos", href: "/about" },
    { label: "Contato", href: "/contact" },
    { label: "Blog", href: "/blog" }
  ];

  const mobileMenu = [...menuItems];

  const navStyles = {
    fixedContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '0 20px'
    },
    link: "px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400",
    button: "px-4 py-2 border rounded text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white",
    buttonSpecialist: "px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
  };

  return (
    <Container>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md dark:bg-gray-900">
        <Disclosure>
          {({ open }) => (
            <>
              <div style={navStyles.fixedContainer}>
                <Logo logo={props.logo} logoalt={props.logoalt} open={open} />
                <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-center">
                  {menuItems.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      <Link
                        href={item.href}
                        key={`${item.label}${index}`}
                        className={navStyles.link}
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noopener" : ""}>
                        {item.label}
                      </Link>
                    </Fragment>
                  ))}
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <Link href="/login" className={navStyles.button}>
                    Login
                  </Link>
                  <Link href="/contact-specialist" className={navStyles.buttonSpecialist}>
                    Fale com especialista
                  </Link>
                </div>
              </div>
              <Disclosure.Panel>
                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                  {mobileMenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      <Link
                        href={item.href}
                        key={`${item.label}${index}`}
                        className={navStyles.link}
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noopener" : ""}>
                        {item.label}
                      </Link>
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}