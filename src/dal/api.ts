export type GetTrackDetailsOutputData = {
  id: string;
  attributes: { title: string; lyrics: string | null };
};
type GetTrackDetailOutput = { data: GetTrackDetailsOutputData };
export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    {
      headers: {
        //"api-key": "28c7f075-ca0f-4710-ab7b-bb884ed3aaa0",
      },
    },
  ).then((res) => res.json());

  return promise;
};
type GetTrackListOutput = { data: Array<TrackListItemOutput> };
export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: {
        //"api-key": "28c7f075-ca0f-4710-ab7b-bb884ed3aaa0"
      },
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
