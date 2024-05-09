import React from 'react';
import { NavLink } from '@mantine/core';

type menuItem = {
  title: string
  icon: React.ReactNode
  href: string
  disabled?: boolean
}

interface NavbarProps {
  menus: Array<menuItem>
  activeItem: string
}

const Navbar: React.FC<NavbarProps> = ({ menus, activeItem }) => {
  console.log({activeItem})
  return (
    <>
      {
        menus.map((menu, index) => (
          <NavLink
            key={index}
            href={menu.href}
            label={menu.title}
            leftSection={menu.icon}
            active={activeItem === menu.href.toLowerCase()}
            disabled={menu.disabled}
          />
        ))
      }
    </>
  );
}
      

export default Navbar;