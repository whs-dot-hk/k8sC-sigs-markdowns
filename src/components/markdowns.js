import React from "react";

import sigList from '../utils/sigList'

var _filterEdges = (data, re) => {
  var edges = [];

  data.allMarkdownRemark.edges.forEach(edge => {
    if (re.test(edge.node.id)) {
      edges.push(edge);
    }
  });

  return edges;
}


var _getUl = (edges) => {
  var listItems = [];

  edges.forEach(edge => {
    listItems.push(
      <li key={edge.node.id}>
        {edge.node.id}
      </li>
    );
  });
  
  return (
      <ul>{listItems}</ul>
  );
}

var html = (data) => {
  const partials = [];

  sigList.forEach(sig => {
    var re = new RegExp(sig);
    
    partials.push(
      <div>
        <h2>{sig}</h2>
        {_getUl(_filterEdges(data, re))}
      </div>
    );
  });
  
  return (
      <div>{partials}</div>
  );
}

export default ({ data }) =>
  <div> 
    {html(data)}
  </div>

export const query = graphql`
  fragment MarkdownsFragment on RootQueryType {
    allMarkdownRemark {
      edges {
        node {
          id
        }
      }
    }  
  }
`;
