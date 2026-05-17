import { Fragment } from 'react';
import Head from 'next/head';
import { CaseStudy } from '../../components/projects/caseStudy';
import { getCaseStudyPaths, getCaseStudyProject } from '../../lib/case-studies';

const CaseStudyPage = ({ project }) => {
  return (
    <Fragment>
      <Head>
        <title>{project.title} | Michelle Swem</title>
        <meta
          name="description"
          content={project.summary || project.excerpt || project.title}
        />
      </Head>
      <CaseStudy project={project} />
    </Fragment>
  );
};

export const getStaticPaths = () => {
  const paths = getCaseStudyPaths().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const project = getCaseStudyProject(params.slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
};

export default CaseStudyPage;
