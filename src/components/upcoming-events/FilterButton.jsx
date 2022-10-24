const FilterButton = ({ name, color, bg, setFilter, icon, id, isActive }) => {
  return (
    <button
      type="button"
      className={`${color} ${bg} ${
        isActive ? "bg-opacity-60" : ""
      } app-font-medium flex h-[47px] w-full items-center justify-center gap-x-3 rounded-lg py-2 text-sm font-bold`}
      onClick={() => setFilter(id)}
    >
      {icon?.length ? (
        <img src={`./src/assets/icons/${icon}.svg`} alt="" />
      ) : null}
      <span>{name}</span>
    </button>
  );
};

export default FilterButton;
