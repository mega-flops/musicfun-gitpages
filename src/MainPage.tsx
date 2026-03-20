import { TrackDetail } from "./ui/Trackdetails.tsx";
import { TracksList } from "./ui/TracksList.tsx";
import { useTrackSelection } from "./bll/useTrackSelection.ts";

export function MainPage() {
  const { trackId, setTrackId } = useTrackSelection();
  const handleTrackSelect = (id: string | null) => {
    setTrackId(id);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <TracksList
          onTrackSelect={handleTrackSelect}
          selectedTrackId={trackId}
        />
        <TrackDetail trackId={trackId} />
      </div>
    </>
  );
}
