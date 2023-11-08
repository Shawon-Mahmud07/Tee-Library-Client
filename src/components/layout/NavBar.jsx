import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { HiMoon, HiSun } from "react-icons/hi";
import { Link, NavLink, Navigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign-out successful.");
        Navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Dark Mood
  const [mood, setMood] = useState("light");

  const toggleTheme = () => {
    const html = document.documentElement;
    if (mood === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMood("dark");
      localStorage.setItem("mood", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMood("light");
      localStorage.setItem("mood", "light");
    }
  };

  useEffect(() => {
    const currentMood = localStorage.getItem("mood") || "light";
    document.documentElement.classList.add(currentMood);
    setMood(currentMood);
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:justify-center">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-black font-bold underline text-lg dark:text-[#FF7F56]"
              : "flex items-center text-[#00000080] dark:text-white text-lg"
          }
        >
          Home
        </NavLink>
      </Typography>

      <NavLink
        to="/add-books"
        className={({ isActive }) =>
          isActive
            ? "flex items-center text-black dark:text-[#FF7F56] font-bold underline text-lg"
            : "flex items-center text-[#00000080] dark:text-white text-lg"
        }
      >
        Add Books
      </NavLink>
      <NavLink
        to="/all-books"
        className={({ isActive }) =>
          isActive
            ? "flex items-center text-black dark:text-[#FF7F56] font-bold underline text-lg"
            : "flex items-center text-[#00000080] dark:text-white text-lg"
        }
      >
        All Books
      </NavLink>

      <NavLink
        to="/borrowed-books"
        className={({ isActive }) =>
          isActive
            ? "flex items-center text-black dark:text-[#FF7F56] font-bold underline text-lg"
            : "flex items-center text-[#00000080] dark:text-white text-lg"
        }
      >
        Borrowed Books
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? "flex items-center text-black dark:text-[#FF7F56] font-bold underline text-lg"
            : "flex items-center text-[#00000080] dark:text-white text-lg"
        }
      >
        Register
      </NavLink>

      <Typography
        onClick={() => toggleTheme()}
        as="li"
        className=" text-3xl text-[#29276B] hover:text-[#4d4aa4] md:-ml-4 font-normal dark:text-white"
      >
        {mood === "light" ? <HiMoon></HiMoon> : <HiSun></HiSun>}
      </Typography>
    </ul>
  );
  return (
    <Navbar className=" bg-transparent  rounded-none w-full max-w-[1440px] mx-auto shadow-none border-none py-4  dark:bg-[#0F172A]  ">
      <div className=" flex items-center justify-between ">
        <div className="-ml-6 mr-4 md:mr-0 md:-ml-0 ">
          <Link to="/">
            <img
              className="w-40 h-11 md:w-10/12 md:h-16 rounded-md"
              src={logo}
              alt="nav-logo"
            />
          </Link>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex  items-center gap-2">
          {" "}
          {user ? (
            <Button
              onClick={handleLogOut}
              className="hidden md:block bg-[#FF7F56]  rounded-md  font-semibold text-base text-[#fff]"
              size="sm"
            >
              <span>Log Out</span>
            </Button>
          ) : (
            <Link to="/login">
              <Button
                className="hidden md:block bg-[#FF7F56]  rounded-md  font-semibold text-base text-[#fff]"
                size="sm"
              >
                <span>Login</span>
              </Button>
            </Link>
          )}
          {user && (
            <div className="flex  md:flex-col justify-center items-center">
              <img
                src={user.photoURL}
                alt="Profile"
                className="h-8 dark:border md:h-10 w-8 md:w-10 rounded-full mr-2"
              />
              <Typography className="text-xs md:text-sm font-medium text-[#29276B] dark:text-white">
                {user ? user.displayName : ""}
              </Typography>
            </div>
          )}
        </div>

        <IconButton
          variant="text"
          className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-[#FF7F56] dark:text-white"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          {user ? (
            <Button
              onClick={handleLogOut}
              size="sm"
              fullWidth
              className="mb-2 bg-[#FF7F56]"
            >
              <span>Log out</span>
            </Button>
          ) : (
            <Link to="/login">
              <Button size="sm" fullWidth className="mb-2 bg-[#FF7F56]">
                <span>Login</span>
              </Button>
            </Link>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
