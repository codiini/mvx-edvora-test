const iconList = [
  "text-italic",
  "text",
  "smallcaps",
  "text-bold",
  "link",
  "textalign-left",
  "textalign-center",
  "textalign-right",
  "textalign-justifyright",
];
export default function TextInput({ label, placeholder, type }) {
  return (
    <>
      <div className="flex h-full w-full flex-col items-start justify-between gap-x-4 rounded-[10px]">
        <span className="mb-1 flex gap-x-2">
          <label
            className="app-font-medium text-base tracking-wide text-edvora-white-60"
            htmlFor=""
          >
            {label}
          </label>
          <img className="cursor-pointer" src="icons/info-outline.svg" />
        </span>
        {type === "text" ? (
          <input
            className="placeholder:app-font-medium app-font-medium h-11 w-full rounded-md border border-[0.5px] border-edvora-white-20 px-4 text-base outline-none placeholder:text-sm placeholder:text-edvora-white-50"
            placeholder={placeholder}
            type="text"
          />
        ) : (
          <div className="h-[400px] w-full rounded-md border border-[0.5px] border-edvora-white-20 p-5">
            <div className="flex max-w-xs items-center justify-between pb-4">
              {iconList.map((icon) => {
                return (
                  <img
                    key={icon}
                    className="cursor-pointer"
                    src={`/icons/textarea/${icon}.svg`}
                  />
                );
              })}
            </div>
            <textarea
              placeholder={placeholder}
              className="placeholder:app-font-medium app-font-medium h-[95%] w-full resize-none text-base outline-none placeholder:max-w-xs placeholder:text-sm placeholder:text-edvora-white-50"
            ></textarea>
          </div>
        )}
      </div>
    </>
  );
}
