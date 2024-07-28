"use client";

import { Menu, Button, MenuItem } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { logout } from "@/services/users/user.service";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function LoggedInMenu({ userName }: { userName: string }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      await signOut({ redirect: true, callbackUrl: "/" });
      setAnchorEl(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="text-black font-serif hover:bg-slate-50"
      >
        {userName}
        {anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            router.push("/profile");
            handleClose();
          }}
          className="text-primary font-serif"
        >
          My Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleLogout();
          }}
          className="text-primary font-serif"
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
