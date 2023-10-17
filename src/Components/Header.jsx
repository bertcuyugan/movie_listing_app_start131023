import { useContext, useEffect, useState } from "react";
import logo from "../assets/Images/logo.png";
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme", theme);
  });
  return (
    <div className="flex items-center p-4">
      <img src={logo} alt="headerlogo" className="w-14 h-14S" />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiMoon
            onClick={() => {
              setTheme("dark");
              localStorage.saveItem("theme", "dark");
            }}
            className=" text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
          />
        ) : (
          <HiSun
            onClick={() => {
              setTheme("light");
              localStorage.saveItem("theme", "light");
            }}
            className=" text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
