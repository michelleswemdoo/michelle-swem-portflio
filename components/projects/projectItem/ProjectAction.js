import Link from 'next/link';
import classes from './ProjectItem.module.scss';

export const ProjectAction = ({ href, label, variant, disabled, internal }) => {
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

  if (internal) {
    return (
      <Link href={href}>
        <a className={className}>{label}</a>
      </Link>
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
