import Link from 'next/link';
import classes from './AgencyCaseStudy.module.scss';

export const AgencyCaseStudy = ({ data, liveUrl = '', showCta = false }) => {
  const ctaHref = liveUrl || data.cta?.href;
  const ctaDisabled = !ctaHref;

  return (
    <main className={classes.main}>
      <section className={`${classes.section} ${classes.sectionWide}`}>
        <div className={classes.inner}>
          <Link href={data.backHref}>
            <a className={classes.back}>← Back to projects</a>
          </Link>

          <p className={classes.eyebrow}>{data.eyebrow}</p>
          <h1 className={classes.heroTitle}>{data.title}</h1>
          <p className={classes.heroSummary}>{data.heroSummary}</p>

          {data.impactStrip?.length > 0 && (
            <div className={classes.impactStrip}>
              {data.impactStrip.map((item) => (
                <div key={item.label} className={classes.impactItem}>
                  <span className={classes.impactIcon}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={`${classes.section} ${classes.sectionNarrow}`}>
        <div className={classes.inner}>
          <h2 className={classes.sectionTitle}>{data.overview.title}</h2>
          <p className={classes.bodyText}>{data.overview.body}</p>
        </div>
      </section>

      <section
        className={`${classes.section} ${classes.sectionNarrow} ${classes.sectionMuted}`}
      >
        <div className={classes.inner}>
          <h2 className={classes.sectionTitle}>{data.problem.title}</h2>
          {data.problem.intro && (
            <p className={classes.bodyText}>{data.problem.intro}</p>
          )}
          <ul className={classes.list}>
            {data.problem.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${classes.section} ${classes.sectionNarrow}`}>
        <div className={classes.inner}>
          <h2 className={classes.sectionTitle}>{data.solution.title}</h2>
          {data.solution.intro && (
            <p className={classes.bodyText}>{data.solution.intro}</p>
          )}
          <ul className={classes.list}>
            {data.solution.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {data.screenshots?.items?.length > 0 && (
        <section className={`${classes.section} ${classes.sectionWide}`}>
          <div className={classes.inner}>
            <h2 className={classes.sectionTitle}>{data.screenshots.title}</h2>
            <div className={classes.screenshotGrid}>
              {data.screenshots.items.map((shot) => (
                <figure
                  key={shot.label}
                  className={`${classes.screenshot} ${
                    shot.span === 2 ? classes.screenshotWide : ''
                  }`}
                >
                  {shot.image ? (
                    <img
                      src={shot.image}
                      alt={shot.label}
                      className={classes.screenshotImg}
                    />
                  ) : (
                    <div className={classes.screenshotPlaceholder}>
                      <span>{shot.label}</span>
                    </div>
                  )}
                  <figcaption className={classes.screenshotCaption}>
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`${classes.section} ${classes.sectionNarrow}`}>
        <div className={classes.inner}>
          <h2 className={classes.sectionTitle}>{data.results.title}</h2>
          <ul className={classes.list}>
            {data.results.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {showCta && data.cta && (
        <section className={`${classes.section} ${classes.sectionCta}`}>
          <div className={classes.innerCta}>
            {ctaDisabled ? (
              <span className={`${classes.ctaBtn} ${classes.ctaBtnDisabled}`}>
                {data.cta.label}
              </span>
            ) : (
              <a
                href={ctaHref}
                className={classes.ctaBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.cta.label}
              </a>
            )}
          </div>
        </section>
      )}
    </main>
  );
};
