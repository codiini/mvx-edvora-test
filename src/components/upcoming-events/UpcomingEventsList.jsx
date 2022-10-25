import { useState } from "react";
import UpcomingEventCard from "./UpcomingEventCard";
import FilterButton from "./FilterButton";
import ModalComponent from "../ModalComponent";

const eventList = [
  {
    id: 0,
    type: "classes",
    color: "text-edvora-orange",
    title: "Accounting/Personal Finance Class",
    facilitator: "Professor Adrian Furnham",
    location: "Campus 1 Wexham SL2 4QS, UK",
    date: "27  Jan 2022",
    time: "8:00 AM - 9:00 AM",
  },
  {
    id: 1,
    type: "classes",
    color: "text-edvora-orange",
    title: "Business/Business Management Class",
    facilitator: "Professor Brendan Neiland",
    location: "Campus 2 Wexham SL2 4QS, UK",
    date: "27  Jan 2022",
    time: "9:30 AM - 10:30 AM",
  },
  {
    id: 2,
    type: "events",
    color: "text-edvora-green",
    title: "Intramural Sports teams Tournament",
    facilitator: "Charles Spence",
    location: "Campus 3 Wexham SL2 4QS, UK",
    date: "27  Jan 2022",
    time: "11:00 AM - 12:00 PM",
  },
];

const FILTER_MAP = {
  All: () => true,
  Classes: (event) => event.type === "classes",
  Events: (event) => event.type === "events",
};

const filterCategory = [
  {
    name: "All Activites",
    color: "text-edvora-purple",
    bg: "bg-edvora-purple-20",
    id: "All",
  },
  {
    name: "Classes",
    color: "text-edvora-orange",
    bg: "bg-edvora-orange-50",
    icon: "timer",
    id: "Classes",
  },
  {
    name: "Events",
    color: "text-edvora-green",
    bg: "bg-edvora-green-50",
    icon: "flag",
    id: "Events",
  },
];

const UpcomingEventsList = () => {
  const [filter, setFilter] = useState("All");
  const [modalState, setModalState] = useState(false);

  const filteredList = eventList.filter(FILTER_MAP[filter]);

  return (
    <>
      <div className="flex items-start justify-between pb-10">
        <div>
          <h2 className="app-font-bold text-2xl">Upcoming Events</h2>
          <p className="app-font-medium text-base text-edvora-white-60">
            Don’t miss schedule events.{" "}
            <span className="cursor-pointer underline decoration-edvora-white-60">
              See all
            </span>
          </p>
        </div>
        <button
          onClick={() => setModalState(true)}
          className="app-font-medium flex items-center gap-x-2 rounded-[100px] bg-edvora-purple p-3 text-xs text-white hover:bg-edvora-purple-80"
        >
          <img src="/icons/add-square.svg" alt="add-button" />
          <span>Add new</span>
        </button>
      </div>
      <div className="mb-3 grid grid-cols-3 gap-x-4">
        {filterCategory.map(({ color, bg, name, icon, id }, index) => {
          return (
            <FilterButton
              key={index}
              color={color}
              bg={bg}
              name={name}
              icon={icon}
              id={id}
              setFilter={(value) => setFilter(value)}
              isActive={filter === id}
            ></FilterButton>
          );
        })}
      </div>
      <div className="space-y-[10px]">
        {filteredList.map((event) => {
          return (
            <UpcomingEventCard key={event.id} event={event}></UpcomingEventCard>
          );
        })}
      </div>
      <ModalComponent
        showModal={modalState}
        setShowModal={(val) => setModalState(val)}
      ></ModalComponent>
    </>
  );
};

export default UpcomingEventsList;
