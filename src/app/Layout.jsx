import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Site from './Site';
import Header from './Header';
import Content from './Content';

const Layout = ({ children }) => (
  <Site>
    <Helmet
      title="Courseware"
      meta={[
        { name: 'description', content: 'Courseware web application' },
        { name: 'keywords', content: 'courses, teachers, cpd' },
      ]}
      script={[
        { 'src': 'https://use.fontawesome.com/releases/v5.1.0/js/all.js'},
      ]}
      link={[
        {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
      ]}
    />
    <Header />
    <Content>
      content
    </Content>
  </Site>
);

Layout.PropTypes = {
  children: PropTypes.func
};

export default Layout;