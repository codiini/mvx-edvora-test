import React from "react";
import TextInput from "./TextInput";

const tabList = [
  {
    name: "Events",
    active: true,
  },
  {
    name: "Class",
    active: false,
  },
  {
    name: "Task",
    active: false,
  },
];

const selectionTabs = [
  {
    name: "Event Details",
    icon: "clock",
  },
  {
    name: "Add Classmate",
    icon: "profile",
  },
];

export default function ModalForm() {
  return (
    <div className="h-full w-full gap-x-8 overflow-y-scroll rounded-[10px] bg-white p-8 pt-10 drop-shadow-lg">
      <div className="grid w-full max-w-sm grid-cols-3 gap-x-4">
        {tabList.map((tab) => {
          return (
            <button
              key={tab.name}
              type="button"
              className={`${
                tab.active
                  ? "bg-edvora-purple-10 text-edvora-purple"
                  : "bg-[#F4F4F4] text-edvora-white-20"
              } app-font-medium flex flex h-[45px] w-full items-center justify-center rounded-[5px] py-2 px-6 text-sm font-bold `}
            >
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>
      <form className="mt-10 flex w-full items-start justify-between gap-x-8">
        <div className="w-full space-y-[27px]">
          <TextInput
            type={"text"}
            placeholder={"Name of Event"}
            label={"Title"}
          ></TextInput>
          <TextInput
            type={"text"}
            placeholder={"Add a Location"}
            label={"Location"}
          ></TextInput>
          <div>
            <nav>
              <ul className="relative flex items-start gap-x-4">
                {selectionTabs.map((tab, index) => {
                  return (
                    <li
                      key={index}
                      className={`${
                        index === 0
                          ? "text-edvora-purple"
                          : "text-edvora-white-20"
                      } app-font-medium relative text-sm`}
                    >
                      <a href="#">{tab.name}</a>
                      {index === 0 && (
                        <span
                          className={`absolute -bottom-2 left-0 inline-block h-[2px] w-full rounded-t-lg bg-edvora-purple`}
                        ></span>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-2 flex h-[0.5px] w-full items-center justify-center rounded-[10px] bg-edvora-white-20"></div>
            </nav>
          </div>
          <div className="w-full max-w-xs">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <img src="./src/assets/icons/clock.svg" alt="Clock" />
                <p className="app-font-medium text-sm text-edvora-white-20">
                  Select time
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="./src/assets/icons/profile.svg" alt="Clock" />
                <p className="app-font-medium text-sm text-edvora-white-20">
                  Add classmate
                </p>
              </div>
            </div>
            <div className="flex items-center justify-evenly gap-x-3">
              <div className="app-font-medium inline-block flex w-full cursor-pointer items-center justify-center gap-x-2 rounded bg-[#F9F8FF] px-6 py-2 text-edvora-white-20">
                <p>Notification</p>
                <img src="./src/assets/icons/arrow-down.svg" alt="Clock" />
              </div>
              <div className="app-font-medium inline-block flex w-full cursor-pointer items-center justify-center gap-x-2 rounded bg-[#F9F8FF] p-2 text-edvora-white-20">
                30
              </div>
              <div className="app-font-medium inline-block flex w-full cursor-pointer items-center justify-center gap-x-2 rounded bg-[#F9F8FF] px-6 py-2 text-edvora-white-20">
                Minutes
              </div>
            </div>
          </div>
          <TextInput
            type={"text"}
            placeholder={"Copy and paste external event link here"}
            label={"Event link"}
          ></TextInput>
        </div>
        <div className="w-full">
          <div className="relative w-full pb-6">
            <TextInput
              type={"textarea"}
              placeholder={
                "Write a summary and any details your should know about the event "
              }
              label={"Description/instructions"}
            ></TextInput>
          </div>
          <div className="app-font-medium mt-6 flex items-center justify-end gap-x-3">
            <button className="h-12 w-[120px] rounded-md bg-[#F4F4F4] py-2 px-4 text-sm text-edvora-white-60 duration-200 hover:bg-opacity-40">
              Cancel
            </button>
            <button className="h-12 w-[120px] rounded-md bg-edvora-purple py-2 px-4 text-sm text-white duration-200 hover:bg-opacity-80">
              Save More
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
