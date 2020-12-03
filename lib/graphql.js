export async function fetchGraphQl(
  url,
  query = "",
  variables = {},
  headers = {}
) {
  const graphql = JSON.stringify({
    query: query,
    variables: variables,
  });

  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: graphql,
  }).then((response) => response.json());

  const data = result.data;

  return data;
}
