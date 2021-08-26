import React from 'react';
import { Layout } from '../components/Layout';

export default function Source() {
  return (
    <Layout>
      <div>
        <h1>Source</h1>
        <p style={{ paddingRight: '7rem', lineHeight: '1.2rem' }}>
          Data is taken from New York Times, who keeps an ongoing repo of
          coronavirus cases and deaths in states and counties across the United
          States. Dataset and more information can be found{' '}
          <a
            href="https://github.com/nytimes/covid-19-data"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          Stats are updated <b>daily!</b>
        </p>
      </div>
    </Layout>
  );
}
