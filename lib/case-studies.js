import { getProjectBySlug } from './projects-utils';

/** Case study URL slug → project content slug */
export const CASE_STUDY_SLUGS = {
  'case-study-form-builder': 'form-builder-application',
};

export const getCaseStudyPaths = () => Object.keys(CASE_STUDY_SLUGS);

export const getCaseStudyProject = (caseStudySlug) => {
  const projectSlug = CASE_STUDY_SLUGS[caseStudySlug];
  if (!projectSlug) return null;

  const project = getProjectBySlug(projectSlug);
  if (!project) return null;

  return {
    ...project,
    caseStudySlug,
    caseStudyUrl: `/projects/${caseStudySlug}`,
  };
};
