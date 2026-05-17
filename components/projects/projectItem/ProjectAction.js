import classes from './ProjectItem.module.scss';

export const ProjectAction = ({ href, label, variant, disabled }) => {
  const className = [
    classes.link,
    variant === 'primary' ? classes.linkPrimary : classes.linkSecondary,
    disabled ? classes.linkDisabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = <span className={classes.linkLabel}>{label} →</span>;

  if (disabled) {
    return (
      <span className={className} aria-disabled="true">
        {content}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
};
