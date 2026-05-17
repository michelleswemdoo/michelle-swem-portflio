import path from 'path';
import { getEntryBySlug } from './getEntryByslug';
import { getFileDirectory } from './getFileDirectory';

const fields = [
  'title',
  'label',
  'date',
  'slug',
  'excerpt',
  'summary',
  'bullets',
  'techStack',
  'image',
  'liveUrl',
  'githubUrl',
  'isFeatured',
  'link',
];

const dir = 'content/projects';
const projectsDirectory = path.join(process.cwd(), dir);

const HOME_PROJECT_SLUGS = [
  'shopify-storefront',
  'the-wild-oasis',
  'form-builder-application',
];

export const getAllProjects = () => {
  const projectsFiles = getFileDirectory(projectsDirectory);
  const allProjects = projectsFiles.map((file) => {
    return getEntryBySlug(dir, file, fields);
  });
  const sortedProjects = allProjects.sort((projectA, projectB) =>
    projectA.date > projectB.date ? -1 : 1,
  );
  return sortedProjects;
};

export const getHomeProjects = () => {
  const allProjects = getAllProjects();
  return HOME_PROJECT_SLUGS.map((slug) =>
    allProjects.find((project) => project.slug === slug),
  ).filter(Boolean);
};

export const getFeaturedProjects = () => {
  return getHomeProjects();
};
