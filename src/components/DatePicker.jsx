import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme file
import { useState } from "react";

const DatePickerComponent = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div className="w-full">
      <DateRange
        rangeColors={["#6A35FF"]}
        // preview={{
        //   startDate: new Date(),
        //   endDate: null,
        //   color: "#000000",
        // }}
        showMonthAndYearPickers={false}
        showDateDisplay={false}
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
};

export default DatePickerComponent;
