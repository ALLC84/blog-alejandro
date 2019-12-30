// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>Acabas de llegar a una ruta que no existe.</p>
        <Link to={'/'}>Volver a zona segura</Link>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
