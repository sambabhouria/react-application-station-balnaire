const contentful = require("contentful");

// https://www.npmjs.com/package/contentful
export default contentful.createClient({
   space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
