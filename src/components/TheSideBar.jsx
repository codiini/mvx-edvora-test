import { useState } from "react";
const TheSideBar = ({ isNavOpen }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "dashboard" },
    { title: "Calendar", src: "calendar", count: 13 },
    { title: "Live class", src: "live-class" },
    { title: "Courses ", src: "courses" },
    { title: "Messages", src: "messages", count: 23 },
    { title: "Groups", src: "groups" },
    { title: "Grades ", src: "grades" },
    { title: "Settings ", src: "settings" },
    { title: "Log out ", src: "logout" },
  ];

  return (
    <div className="">
      <div
        className={`${
          open ? "w-[313px]" : "w-20 "
        } fixed h-screen overflow-y-scroll bg-edvora-purple pt-14 pb-10 duration-300`}
      >
        <img
          src="./src/assets/icons/arrow-left.svg"
          className={`absolute -right-3 top-28 w-8 cursor-pointer
            	 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          {...isNavOpen(!open)}
        />
        <div className="mx-auto w-12 pb-6">
          <img
            src="./src/assets/icons/logo.svg"
            className={`w-full cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-6">
          {Menus.slice(0, 7).map((menu, index) => (
            <li
              key={index}
              className={`${open && "pl-16"} ${
                !open && "justify-center"
              } app-font-medium relative flex h-16 cursor-pointer items-center gap-x-9 border-y-[0.4px] border-y-[#8F67FF] px-2 text-base text-white hover:bg-edvora-purple-10 hover:bg-opacity-20 
              ${menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-edvora-purple-10 bg-opacity-20"
              } `}
            >
              {index === 0 && (
                <span
                  className={`${
                    !open && "hidden"
                  } absolute left-0 block h-full w-2 bg-edvora-yellow`}
                ></span>
              )}
              <img src={`./src/assets/icons/${menu.src}.svg`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
              {menu.count && (
                <span
                  className={`${
                    !open && "hidden"
                  } flex h-6 w-6 items-center justify-center rounded-[5px]  bg-edvora-yellow text-xs text-edvora-purple`}
                >
                  {menu.count}
                </span>
              )}
            </li>
          ))}
        </ul>
        <div
          className={`${
            open ? "mt-14" : "mt-10"
          } h-76 flex flex-col items-center justify-center`}
        >
          {open && (
            <button className="app-font-bold rounded-[100px] bg-white px-12 py-5 text-lg text-edvora-purple hover:bg-edvora-purple-10 hover:bg-opacity-90">
              Upgrade
            </button>
          )}
          <ul className={`w-full space-y-8 ${open ? "py-16" : ""}`}>
            {Menus.slice(7).map((menu, index) => (
              <li
                key={index}
                className={`${open && "pl-16"} ${
                  !open && "justify-center"
                } app-font-medium relative flex cursor-pointer items-center gap-x-9 px-2 text-base text-white ${
                  menu.gap ? "mt-9" : "mt-2"
                }`}
              >
                <img src={`./src/assets/icons/${menu.src}.svg`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TheSideBar;
