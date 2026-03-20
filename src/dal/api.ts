export type GetTrackDetailsOutputData = {
  id: string;
  attributes: { title: string; lyrics: string | null };
};
type GetTrackDetailOutput = { data: GetTrackDetailsOutputData };
export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    {
      headers: prepareHeaders(),
    },
  ).then((res) => res.json());

  return promise;
};
type GetTrackListOutput = { data: Array<TrackListItemOutput> };

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) return undefined;
  return { "api-key": apiKey };
};

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: prepareHeaders(),
    },
  ).then((res) => res.json());
  return promise;
};

export type TrackListItemOutput = {
  id: string;
  attributes: TrackItemOutputAttributes;
};
type TrackItemOutputAttributes = {
  title: string;
  attachments: Array<AttachmentDto>;
};
type AttachmentDto = { url: string };
