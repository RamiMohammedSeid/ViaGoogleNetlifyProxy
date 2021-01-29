import fetch from "node-fetch";

import flatten from "lodash/flatten";

const getGoogle = ( query ) => {
  const endpoint = `http://www.google.com/search?q=${query}`;
  return fetch(endpoint, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate',
      'DNT': '1',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'lang': 'en-us'
    }
  }).then(response => { return { statusCode: 200, body: response.text() } });
};

exports.handler = async (event, context) => {

  return getGoogle(event.queryStringParameters.query)
};
