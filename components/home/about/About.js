import { socials } from '../../../data/social-links';
import Link from 'next/link';
import Image from 'next/image';
import classes from './About.module.scss';

const highlights = [
  '⚡ +35% Core Web Vitals improvement',
  '🛒 25+ Shopify sections and reusable UI components',
  '📈 Conversion-focused UX improvements',
  '🔧 Shopify Liquid, JavaScript, TypeScript, React',
];

const LINKEDIN_URL =
  'https://www.linkedin.com/in/michelle-swem-b7812b183/';
const GITHUB_URL = 'https://github.com/michelleswemdoo';
const EMAIL = 'swemmichelle990@gmail.com';

export const About = () => {
  return (
    <section className={classes.About} id="about">
      <div className="row">
        <div className={classes.container}>
          <div className={classes['col-1-of-lg']}>
            <ul className={classes.socials}>
              {socials.map((social) => (
                <li className={classes.socials__list} key={social.name}>
                  <Link href={social.url}>
                    <a className={classes.socials__link} title={social.name}>
                      {social.icon}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <h1 className={classes.heroTitle}>Michelle Swem</h1>
            <p className={classes.role}>Senior Shopify Frontend Engineer</p>

            <p className={classes.bio}>
              I build fast, conversion-focused e-commerce experiences with Shopify
              and modern frontend technologies.
            </p>

            <p className={classes.bio}>
              I&apos;m a Frontend Engineer with 5+ years of experience building
              scalable Shopify storefronts and web applications using Liquid,
              JavaScript, TypeScript, and React. I specialize in performance
              optimization, UX improvement, and conversion-focused storefront
              engineering.
            </p>

            <p className={classes.bio}>
              My focus is not just building interfaces, but improving how users
              move through a product, from landing to checkout.
            </p>

            <p className={classes.bio}>
              I work closely with design and marketing teams to translate business
              goals into fast, maintainable, and high-performing storefronts, with
              strong attention to performance, UX clarity, and measurable outcomes
              like load speed and conversion flow efficiency.
            </p>

            <p className={classes.bio}>
              Based in Berlin and open to on-site, hybrid, or remote opportunities
              across Germany.
            </p>

            <h2 className={classes.highlightsTitle}>Key Highlights</h2>
            <ul className={classes.highlights}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ul className={classes.meta}>
              <li>📍 Berlin, Germany</li>
              <li>🇩🇪 Open to onsite, hybrid, and remote roles</li>
              <li>
                📧{' '}
                <a href={`mailto:${EMAIL}`} className={classes.metaLink}>
                  {EMAIL}
                </a>
              </li>
              <li>
                🔗{' '}
                <a
                  href={LINKEDIN_URL}
                  className={classes.metaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                {' / '}
                <a
                  href={GITHUB_URL}
                  className={classes.metaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>

            <div className={classes.cta}>
              <Link href="#projects">
                <a className={`${classes.ctaBtn} ${classes.ctaPrimary}`}>
                  View Projects →
                </a>
              </Link>
              <a
                href="/Doowuese-Michelle-Swem-CV.pdf"
                className={`${classes.ctaBtn} ${classes.ctaSecondary}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV →
              </a>
              <Link href="#contact">
                <a className={classes.ctaLink}>Contact Me →</a>
              </Link>
            </div>
          </div>

          <div className={classes['col-1-of-2-sm']}>
            <figure className={classes.shape}>
              <Image
                width={449}
                height={555}
                src="/assets/michelle.png"
                className={classes.shape__photo}
                alt="Michelle Swem"
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
