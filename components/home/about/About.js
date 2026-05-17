import { socials } from '../../../data/social-links';
import Link from 'next/link';
import Image from 'next/image';
import classes from './About.module.scss';

const highlights = [
  '⚡ Improved Core Web Vitals by 35%+',
  '🛒 Built 25+ Shopify theme sections and reusable UI components',
  '📈 Specialized in conversion optimization and technical SEO',
  '🇩🇪 Currently learning German (A1)',
];

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

            <h1 className={classes.heroTitle}>Swem Michelle</h1>

            <p className={classes.bio}>
              I build fast, conversion-focused e-commerce experiences with Shopify
              and modern frontend technologies.
            </p>

            <p className={classes.bio}>
              Frontend Engineer with 5+ years of experience developing scalable
              e-commerce experiences using Shopify Liquid, JavaScript, TypeScript, Vue.js
              and React. Based in Berlin and available for on-site, hybrid, and
              remote roles across Germany.
            </p>

            <ul className={classes.highlights}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
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
                alt="Swem Michelle"
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
