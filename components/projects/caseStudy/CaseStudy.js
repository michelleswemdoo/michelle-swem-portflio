import Link from 'next/link';
import { ProjectAction } from '../projectItem/ProjectAction';
import classes from './CaseStudy.module.scss';

const toList = (value) => {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return [value];
};

export const CaseStudy = ({ project }) => {
  const {
    title,
    label,
    summary,
    excerpt,
    bullets = [],
    techStack = [],
    image,
    liveUrl,
    githubUrl,
    content,
  } = project;

  const impact = summary || excerpt;
  const results = toList(bullets);
  const stack = toList(techStack);
  const demoUrl = liveUrl || '';
  const repoUrl = githubUrl || '';

  return (
    <section className={classes.caseStudy}>
      <div className="row">
        <Link href="/#projects">
          <a className={classes.back}>← Back to projects</a>
        </Link>

        <header className={classes.header}>
          {label && <span className={classes.label}>{label}</span>}
          <h1 className={classes.title}>{title}</h1>
        </header>

        <div className={classes.hero}>
          <img src={image} alt={`${title} preview`} className={classes.heroImg} />
        </div>

        {impact && <p className={classes.lead}>{impact}</p>}

        {results.length > 0 && (
          <ul className={classes.results}>
            {results.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        {stack.length > 0 && <p className={classes.tech}>{stack.join(' • ')}</p>}

        {content && (
          <div
            className={classes.body}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        <footer className={classes.actions}>
          <ProjectAction
            label="View Live Site"
            variant="primary"
            href={demoUrl}
            disabled={!demoUrl}
          />
          <ProjectAction
            label="View Code"
            variant="secondary"
            href={repoUrl}
            disabled={!repoUrl}
          />
        </footer>
      </div>
    </section>
  );
};
