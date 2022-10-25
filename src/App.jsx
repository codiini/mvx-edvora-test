import { useState } from "react";
import TheSideBar from "./components/TheSideBar";
import UpcomingEventsList from "./components/upcoming-events/UpcomingEventsList";
import DatePickerComponent from "./components/DatePicker";
import TheTopBar from "./components/TheTopBar";
import "./App.css";
import TopTabs from "./components/TopTabs";
import CalendarTimeline from "./components/CalendarTimeline";

function App() {
  const [navState, setNavState] = useState(false);
  return (
    <div className="flex items-start justify-start">
      <TheSideBar isNavOpen={(e) => setNavState(e)}></TheSideBar>
      <div className="h-full min-h-screen w-full bg-[#F9F8FF] pt-8">
        <div
          className={`${
            !navState ? "pl-[335px]" : "pl-28"
          } flex h-full w-full items-start justify-between gap-x-7 pr-6 pb-20 duration-300`}
        >
          <div className="min-h-screen w-full w-3/5">
            <h1 className="app-font-bold text-2xl text-edvora-purple">
              Dashboard
            </h1>
            <div className="mt-10 space-y-10">
              <div>
                <DatePickerComponent></DatePickerComponent>
              </div>
              <div>
                <UpcomingEventsList></UpcomingEventsList>
              </div>
            </div>
          </div>
          <div className="min-h-screen w-full space-y-7">
            <TheTopBar></TheTopBar>
            <TopTabs></TopTabs>
            <CalendarTimeline></CalendarTimeline>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
