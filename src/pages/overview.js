import React from 'react'
import Link from 'gatsby-link'

import Markdowns from '../components/markdowns'

export default ({ data }) =>
  <Markdowns data={data} />

export const query = graphql`
  query OverviewQuery {
    ...MarkdownsFragment
  }
`;