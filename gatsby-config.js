fs   = require('fs');
yaml = require('js-yaml');

const sigsYaml = yaml.safeLoad(fs.readFileSync('../sigs.yaml', 'utf8'));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var reformattedArray = sigsYaml.sigs.map(obj => { 
  return obj.dir;
});

reformattedArray = reformattedArray.map(obj => { 
  var rObj = {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: obj,
      path: `../` + obj,
    },
  };
  return rObj;
});

module.exports = {
  pathPrefix: "/k8sC-sigs-markdowns",
  siteMetadata: {
    title: 'SIGs Overview',
  },
  plugins: [
    ... reformattedArray,
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
  ],
}
