import { useState } from "react";
import Timeline from "react-timelines";
import { buildTimebar, buildTrack } from "../utils/builders";
import { fill } from "../utils/fns";
import { START_YEAR, NUM_OF_YEARS, NUM_OF_TRACKS } from "../utils/constants";
import "react-timelines/lib/css/style.css";

const MIN_ZOOM = 2;
const MAX_ZOOM = 20;

export default function CalendarTimeline() {
  const tracksById = fill(NUM_OF_TRACKS).reduce((acc, i) => {
    const track = buildTrack(i + 8);
    acc[track.id] = track;
    return acc;
  }, {});

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    open: false,
    zoom: 2,
    tracksById,
    tracks: Object.values(tracksById),
  });

  const now = new Date();
  const start = new Date("2022-11-29T03:24:00");
  const end = new Date("2022-11-30T03:24:00");
  const zoom = 10;

  const timebar = buildTimebar();

  const clickElement = (element) =>
    alert(`Clicked element\n${JSON.stringify(element, null, 2)}`);

  const handleZoomIn = () => {
    setData(({ zoom }) => ({ zoom: Math.min(zoom + 1, MAX_ZOOM) }));
  };

  const handleZoomOut = () => {
    setData(({ zoom }) => ({ zoom: Math.max(zoom - 1, MIN_ZOOM) }));
  };

  return (
    <>
      <Timeline
        scale={{
          start,
          end,
          zoom,
          zoomMin: MIN_ZOOM,
          zoomMax: MAX_ZOOM,
        }}
        // isOpen={open}
        // toggleOpen={() => setOpen(!open)}
        zoomIn={handleZoomIn}
        zoomOut={handleZoomOut}
        clickElement={clickElement}
        clickTrackButton={(track) => {
          alert(JSON.stringify(track));
        }}
        timebar={timebar}
        tracks={data.tracks}
        now={now}
        enableSticky
        scrollToNow
      />
    </>
  );
}
