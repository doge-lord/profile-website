import { FC, MouseEventHandler, PropsWithChildren, useCallback } from "react";
import ListItemButton from "@mui/material/ListItemButton";

import { useScrollSpy } from "@components/modules/landing/layout/ScrollSpy";

type Props = {
  href: string;
  onClick?(): void;
} & PropsWithChildren;

const NavLink: FC<Props> = ({ children, href, onClick }) => {
  const { activeRoute, scrollTo } = useScrollSpy();

  const handleClick: MouseEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      scrollTo(href, {
        update: true,
        behavior: activeRoute === href ? "smooth" : "auto",
      });
      if (onClick) {
        onClick();
      }
    },
    [onClick, scrollTo, href, activeRoute]
  );

  return (
    <ListItemButton
      href={href}
      selected={activeRoute === href}
      sx={{ m: 1 }}
      onClick={handleClick}
    >
      {children}
    </ListItemButton>
  );
};

export default NavLink;
