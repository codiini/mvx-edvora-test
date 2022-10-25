const TheTopBar = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="">
        <div className="flex w-[400px] items-center justify-between rounded-[10px] bg-edvora-purple-10 py-3 px-10">
          <input
            type="text"
            placeholder="Search"
            className="app-font-medium h-full w-full bg-transparent text-base text-edvora-purple-80 outline-none placeholder:text-edvora-purple-80"
          />
          <img src="/icons/search.svg" alt="Search icon" />
        </div>
      </div>

      <div className="flex items-center justify-evenly gap-x-10">
        <div className="flex items-center justify-evenly gap-x-2">
          <img className="cursor-pointer" src="/icons/notification.svg" alt="" />
          <img className="cursor-pointer" src="/icons/moon.svg" alt="" />
        </div>
        <img className="w-20 cursor-pointer" src="/icons/user-icon.png" alt="" />
      </div>
    </div>
  );
};

export default TheTopBar;
