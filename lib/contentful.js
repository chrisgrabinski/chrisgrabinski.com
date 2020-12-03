import { fetchGraphQl } from "./graphql";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN } = process.env;

const DEFAULT_KEY = "slug";

async function fetchQuery(query, variables) {
  const url = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;
  const data = await fetchGraphQl(url, query, variables, {
    Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`,
  });

  return data;
}

export async function getEntries(contentModel, fields) {
  const query = `{
    ${contentModel}Collection {
      items {
        sys {
          id
        }
        ${fields}
      }
    }
  }`;

  const result = await fetchQuery(query);

  const collectionName = Object.keys(result)[0];

  return result[collectionName].items;
}

export async function getEntry(contentModel, id, key = DEFAULT_KEY, fields) {
  const query = `{
    ${contentModel}Collection(where: { ${key}: "${id}" }) {
      items {
        sys {
          id
        }
        ${fields}
      }
    }
  }`;

  const result = await fetchQuery(query);

  const collectionName = Object.keys(result)[0];

  return result[collectionName].items[0];
}

export async function getPaths(contentModel, key = DEFAULT_KEY) {
  const entries = await getEntries(contentModel, key);
  const paths = entries.map((entry) => ({
    params: {
      [key]: entry[key],
    },
  }));

  return paths;
}
