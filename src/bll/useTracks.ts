import { getTracks, type TrackListItemOutput } from "../dal/api";
import { useEffect, useState } from "react";
export function useTracks() {
  const [tracks, setTracks] = useState<null | Array<TrackListItemOutput>>(null);
  useEffect(() => {
    console.log("effect");
    //запрос на сервер

    getTracks().then((json) => setTracks(json.data));
  }, []);
  return { tracks };
}
