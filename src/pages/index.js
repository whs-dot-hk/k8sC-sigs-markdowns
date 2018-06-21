import React from 'react'
import Link from 'gatsby-link'

const _filterMarkdowns = (data, re) => {
  var rObj = data;

  const edges = data.allMarkdownRemark.edges.filter((edge) => {
    return re.test(edge.node.id);
  });
  
  rObj.allMarkdownRemark.edges = edges;

  return rObj;
}

const _getListItems = (data) => {
  const listItems = data.allMarkdownRemark.edges.map((edge) => {
    return (
      <li key={edge.node.id}>
        {edge.node.id}
      </li>
    );
  });
  
  return (
      <ul>{listItems}</ul>
  );
}

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    {_getListItems(_filterMarkdowns(data, /sig-apps/i))}
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
        }
      }
    }  
  }
`;
