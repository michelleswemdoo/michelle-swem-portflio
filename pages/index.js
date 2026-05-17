import { Fragment } from 'react';
import Head from 'next/head';
import { About } from '../components/home/about';
import { Contact } from '../components/home/contact';
// import { FeaturedPosts } from '../components/home/featuredposts';
import { FeaturedProjects } from '../components/home/featuredprojects';
import { getHomeProjects } from '../lib/projects-utils';

const Home = ({ projects = [] }) => {
  return (
    <Fragment>
      <Head>
        <title>Michelle Swem&apos;s Site</title>
        <meta
          name="description"
          content="I post about programming, web developement and general live stuffs"
        />
      </Head>
      <About />
      <FeaturedProjects projects={projects} />
      {/* <FeaturedPosts /> */}
      <Contact />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredroject = getHomeProjects();
  return {
    props: {
      projects: featuredroject,
    },
  };
};

export default Home;
