import { Fragment } from 'react';
import Head from 'next/head';
import { AgencyCaseStudy } from '../../components/caseStudies/agency';
import { wildOasisCaseStudy } from '../../data/case-studies/wild-oasis';

const WildOasisCaseStudyPage = () => {
  return (
    <Fragment>
      <Head>
        <title>The Wild Oasis Cabin Booking Platform | Michelle Swem</title>
        <meta
          name="description"
          content="Built a modern cabin reservation platform with AI-powered search and seamless booking experience using Next.js and Supabase."
        />
      </Head>
      <AgencyCaseStudy
        data={wildOasisCaseStudy}
        liveUrl={wildOasisCaseStudy.cta.href}
        showCta
      />
    </Fragment>
  );
};

export default WildOasisCaseStudyPage;
