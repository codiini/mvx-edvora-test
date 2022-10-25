import LocationIcon from "./LocationIcon";

const UpcomingEventCard = ({ event }) => {
  return (
    <div className="flex w-full cursor-pointer flex-col rounded-2xl bg-white p-6">
      <div className="app-font-medium mb-3 text-sm text-edvora-white-60">
        <span>{event.date}</span> <span>|</span> <span>{event.time}</span>
      </div>
      <div>
        <div className="app-font-bold text-lg text-edvora-black">
          {event.title}
        </div>
        <span className="app-font-medium text-sm text-edvora-white-60">
          Class Facilitator: {event.facilitator}
        </span>
      </div>
      <div className="flex items-center justify-between pt-6">
        <div
          className={`
          ${event.color}
           app-font-medium flex items-center gap-x-2`}
        >
          <LocationIcon color={event.color} />
          <span className="text-xs">{event.location}</span>
        </div>
        <div>
          {event.type === "classes" ? (
            <img src="/icons/timer.svg" alt="Timer icon" />
          ) : (
            <img src="/icons/flag.svg" alt="Flag icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
