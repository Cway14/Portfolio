import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function ContactPage() {
  const sendContactTest = () => {
    const body = {
      firstName: 'Cameron',
      lastName: 'Way',
      email: 'cway@sfu.ca',
      phone: '123-456-789',
      message: 'test',
    };

    fetch('https://api.camway.ca', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const sendGetTest = async () => {
    await fetch('https://api.camway.ca')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button type="button" onClick={() => sendContactTest()}>
          Test Post
        </button>
        <button type="button" onClick={() => sendGetTest()}>
          Test Get
        </button>
      </div>
    </Layout>
  );
}

export default ContactPage;
