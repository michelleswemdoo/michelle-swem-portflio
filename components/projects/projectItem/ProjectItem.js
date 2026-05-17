import { ProjectAction } from './ProjectAction';
import classes from './ProjectItem.module.scss';

const toList = (value) => {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return [value];
};

export const ProjectItem = ({
  index = 0,
  title,
  label,
  summary,
  excerpt,
  bullets = [],
  techStack = [],
  image = '/placeholder.svg',
  liveUrl,
  githubUrl,
  link,
}) => {
  const impact = summary || excerpt;
  const results = toList(bullets);
  const stack = toList(techStack);
  const points = impact ? [impact, ...results] : results;

  const demoUrl = liveUrl || (link && !link.includes('github.com') ? link : '');
  const repoUrl =
    githubUrl || (link && link.includes('github.com') ? link : '');

  return (
    <li
      className={classes.card}
      style={{ '--card-delay': `${index * 0.1}s` }}
    >
      <article className={classes.cardInner}>
        <div className={classes.media}>
          <img
            src={image}
            alt={`${title} preview`}
            className={classes.mediaImg}
            loading="lazy"
          />
        </div>

        <div className={classes.body}>
          <header className={classes.identity}>
            {label && <span className={classes.label}>{label}</span>}
            <h3 className={classes.title}>{title}</h3>
          </header>

          {points.length > 0 && (
            <ul className={classes.results}>
              {points.map((point) => (
                <li
                  key={point}
                  className={point === impact ? classes.results__lead : undefined}
                >
                  {point}
                </li>
              ))}
            </ul>
          )}

          {stack.length > 0 && <p className={classes.tech}>{stack.join(' • ')}</p>}

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
      </article>
    </li>
  );
};
