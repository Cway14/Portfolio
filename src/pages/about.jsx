import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import dogIllustration from '../images/dog-illustration.svg';
import ContactForm from '../components/contactForm';
import Collage from '../components/collage';

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="">
        <Collage />
      </section>
      <ContactForm />
    </Layout>
  );
}

export default AboutPage;
