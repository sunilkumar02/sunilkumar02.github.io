import { useEffect, useRef, useState } from 'react';
import type { userInfo } from '@utils/types/user.type';

interface IAboutSectionProps {
  userData: userInfo;
}

const AboutSection = ({ userData }: IAboutSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const fullName = `${userData.first_name} ${userData.last_name}`;
  const aboutParagraphs = userData.about?.length ? userData.about : [userData.description];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-semantic-page-bg px-6 py-12 text-semantic-text-body md:px-12 md:py-14 lg:px-[clamp(4rem,7vw,8rem)] lg:py-16"
      aria-labelledby="about-title"
    >
      <div
        className="pointer-events-none absolute right-[8%] top-[18%] -z-10 h-80 w-80 rounded-full bg-semantic-accent-primary-10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-12 lg:grid-cols-[minmax(20rem,0.9fr)_minmax(26rem,1.1fr)] lg:gap-[clamp(4rem,8vw,9rem)]">
        <figure
          className={`relative min-h-[32rem] overflow-hidden rounded-[2rem] border border-semantic-line-rule bg-semantic-panel-bg shadow-[0_30px_80px_var(--semantic-shadow-color)] transition-all duration-1000 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none md:min-h-[40rem] lg:h-[72vh] lg:max-h-[52rem] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-14 opacity-0'}`}
        >
          <img
            className="absolute inset-0 h-full w-full object-cover object-top saturate-[0.8] contrast-[1.04]"
            src={userData.profile_url}
            alt={`${fullName} portrait`}
            loading="lazy"
            decoding="async"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,var(--semantic-panel-bg)_0%,transparent_40%,var(--semantic-accent-primary-10)_100%)]"
            aria-hidden="true"
          />
          <figcaption className="absolute bottom-6 left-6 rounded-full border border-semantic-line-rule bg-semantic-panel-bg-50 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-semantic-text-body backdrop-blur-md">
            Engineer · Builder · Learner
          </figcaption>
        </figure>

        <div
          className={`transition-all delay-150 duration-1000 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-14 opacity-0'}`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-semantic-line-rule bg-semantic-panel-bg-50 p-6 shadow-[0_24px_70px_var(--semantic-shadow-color)] backdrop-blur-md md:p-9">
            <div
              className="absolute left-0 top-0 h-full w-1 bg-theme-gradient"
              aria-hidden="true"
            />
            <h2
              id="about-title"
              className="font-display text-[clamp(2rem,3vw,4rem)] font-light leading-[0.95] tracking-[-0.045em] text-semantic-text-strong"
            >
              <span className={`about-title-typewriter ${isVisible ? 'about-title-typewriter--active' : ''}`}>
                <span>Who&nbsp;</span>
                <strong className="bg-theme-gradient bg-clip-text font-bold uppercase tracking-normal text-transparent">
                  Am I?
                </strong>
              </span>
            </h2>

            <div className="mt-4 space-y-5">
              {aboutParagraphs.map((paragraph) => (
                <p className="text-sm leading-7 text-semantic-text-body md:text-base md:leading-8" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
