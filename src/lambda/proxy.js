import fetch from "node-fetch";

import flatten from "lodash/flatten";

const getGoogle = ( query ) => {
  const endpoint = `http://www.google.com/search?q=${query.replace(" ","+")}`;
  return fetch(endpoint, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4412.3 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate',
      'Connection': 'keep-alive',
      'DNS': '1',
      'Upgrade-Insecure-Requests': '1',
      'lang': 'en-us'
    }
  }).then(response => response.text()).then(response => { return { statusCode: 200, body: response  } });
};

exports.handler = async (event, context) => {

  return getGoogle(event.queryStringParameters.query || "")
};
