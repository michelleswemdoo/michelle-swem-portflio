import { Fragment } from 'react';
import Head from 'next/head';
import { ShopifyCaseStudy } from '../../components/caseStudies/shopify';
const ShopifyCaseStudyPage = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Shopify Storefront Optimization & UX Improvement | Michelle Swem
        </title>
        <meta
          name="description"
          content="Improved performance, product discovery, and mobile UX on a high-traffic Shopify storefront to increase conversion efficiency."
        />
      </Head>
      <ShopifyCaseStudy />
    </Fragment>
  );
};

export default ShopifyCaseStudyPage;
