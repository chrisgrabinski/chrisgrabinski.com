import Image from "next/image";
import querystring from "querystring";
import { HoverCard } from "radix-ui";
import { SpotifyIcon } from "@/icons/spotify";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
    cache: "no-cache",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  return response.json();
};

const CURRENTLY_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getCurrentlyPlaying = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(CURRENTLY_PLAYING_ENDPOINT, {
    cache: "no-cache",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.body === null) {
    return null;
  }

  return response.json();
};

export const SpotifyStatus = async () => {
  const spotifyData = await getCurrentlyPlaying();

  const isPlayingTrack =
    spotifyData?.is_playing && spotifyData?.currently_playing_type === "track";

  if (!isPlayingTrack) {
    return null;
  }

  const name = spotifyData?.item?.name;
  //   const href = spotifyData?.item?.external_urls.spotify;
  const imageUrl = spotifyData?.item?.album?.images[0]?.url;
  const artists = spotifyData?.item?.artists
    .map((artist: { name: string }) => artist.name)
    .join(", ");

  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <SpotifyIcon />
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          align="start"
          className="flex min-w-0 max-w-xs cursor-default items-center overflow-hidden rounded-xl shadow-lg"
          side="top"
          sideOffset={3}
        >
          <Image
            alt=""
            className="h-14 w-14 shrink-0"
            height={56}
            src={imageUrl}
            width={56}
          />
          <div className="min-w-0 px-3 py-1.5">
            <span className="block truncate text-sm">{name}</span>
            <span className="line-clamp-1 block text-foreground-muted text-xs">
              {artists}
            </span>
          </div>
          <HoverCard.Arrow className="h-2 w-3 fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
