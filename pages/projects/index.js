import { Fragment } from 'react';
import { AllProjects } from '../../components/projects/allprojects/AllProjects';
import { getHomeProjects } from '../../lib/projects-utils';
import Head from 'next/head';

const ProjectPage = (props) => {
  const { projects } = props;

  return (
    <Fragment>
      <Head>
        <title>Michelle Swem&apos;s Site</title>
        <meta
          name="description"
          content="Frontend and Shopify-focused project work — performance, UX, and measurable outcomes."
        />
      </Head>
      <AllProjects projects={projects} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allProjects = getHomeProjects();

  return {
    props: {
      projects: allProjects,
    },
  };
};

export default ProjectPage;
