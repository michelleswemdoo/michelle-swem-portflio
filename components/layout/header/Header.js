import { useState, useEffect, useRef } from 'react';
import { Logo } from '../../UI/Logo';
import classes from './Header.module.scss';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 1);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${classes.header} ${isScrolled ? classes.scrolled : ''}`}
      ref={headerRef}
    >
      <Logo />
      <nav className={classes.nav}>
        <ul className={classes.nav__list}>
          {/* <li className={classes.nav__item}>
            <Link href="/">
              <a className={currentRoute === '/' ? classes.active : ''}>Home</a>
            </Link>
          </li> */}

          {/* <li className={classes.nav__item}>
            <Link href="/projects">
              <a className={currentRoute === '/projects' ? classes.active : ''}>
                Projects
              </a>
            </Link>
          </li> */}
          {/* <li className={classes.nav__item}>
            <Link href="/blog">
              <a className={currentRoute === '/blog' ? classes.active : ''}>
                Blog
              </a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
