import classes from './ProjectItem.module.scss';

export const ProjectAction = ({ href, label, variant, disabled }) => {
  const className = [
    classes.btn,
    variant === 'primary' ? classes.btnPrimary : classes.btnSecondary,
    disabled ? classes.btnDisabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (disabled) {
    return (
      <span className={className} aria-disabled="true">
        {label}
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
      {label}
    </a>
  );
};
