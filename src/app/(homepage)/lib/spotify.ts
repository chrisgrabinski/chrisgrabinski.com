import querystring from "querystring";

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
