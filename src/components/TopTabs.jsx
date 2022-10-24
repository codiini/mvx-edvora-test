const tabList = [
  {
    key: 0,
    name: "Notes",
  },
  {
    key: 1,
    name: "Timeline",
  },
  {
    key: 2,
    name: "Planner",
  },
  {
    key: 3,
    name: "Goals",
  },
];

export default function TopTabs() {
  return (
    <div className="flex w-full items-center justify-between gap-x-6">
      <nav className="flex h-[63px] w-7/12 w-full rounded-lg bg-white p-3">
        <ul className="flex w-full items-center justify-between gap-x-6 bg-white px-2">
          {tabList.map((tab) => {
            return (
              <li
                key={tab.key}
                className={`${
                  tab.key === 1 ? "text-edvora-purple" : "text-edvora-white-20"
                } app-font-medium relative text-sm`}
              >
                <a href="#">{tab.name}</a>
                {tab.key === 1 && (
                  <span
                    className={`absolute -bottom-[21px] block h-[2px] w-full rounded-lg bg-edvora-purple`}
                  ></span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex h-[63px] w-full w-5/12 items-center justify-evenly gap-x-2 rounded-lg bg-white p-3">
        <span className="app-font-medium text-sm text-edvora-white-20">
          Time tracking
        </span>
        <span className="app-font-medium inline-block rounded-md bg-[#F9F8FF] px-3 py-1 text-edvora-purple-70">
          00:03:22
        </span>
        <img
          className="cursor-pointer"
          src="./src/assets/icons/play-btn.svg"
          alt=""
        />
      </div>
    </div>
  );
}
