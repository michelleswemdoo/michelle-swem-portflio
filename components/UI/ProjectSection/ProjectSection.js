import React from 'react';

import classes from './ProjectSection.module.scss';

export const ProjectSection = (props) => {
  const { children } = props;
  return (
    <section id="projects" className={classes.sectionPro}>
      <div className="text-center margin-bottom">
        <p className={classes.eyebrow}>Work</p>
        <h2 className="heading-secondary heading-secondary__white">
          Selected projects
        </h2>
        <p className={classes.subtitle}>
          Impact-focused frontend and commerce work — performance, clarity, and
          outcomes that matter to users and the business.
        </p>
      </div>
      {children}
    </section>
  );
};
