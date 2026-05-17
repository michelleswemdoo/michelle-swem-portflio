import { ProjectItem } from '../projectItem/ProjectItem';
import classes from './ProjectsGrid.module.scss';

export const ProjectsGrid = ({ projects }) => {
  return (
    <ul className={classes.list}>
      {projects.map((project, index) => (
        <ProjectItem
          key={project.slug}
          index={index}
          slug={project.slug}
          title={project.title}
          label={project.label}
          summary={project.summary}
          excerpt={project.excerpt}
          bullets={project.bullets}
          techStack={project.techStack}
          image={project.image}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          link={project.link}
        />
      ))}
    </ul>
  );
};
