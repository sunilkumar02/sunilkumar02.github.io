import { useState } from 'react';
import { faCode, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SkillPill } from '@components/atoms/pills';
import { CardSmall } from '@components/atoms/card';
import type { userInfo } from '@utils/types/user.type';
import { ProfileSocialLink } from '../ProfileSocialLink';

interface IProfileDetail {
  label: string;
  value: string;
  icon: IconProp;
}

interface IProfileHeroProps {
  userData: userInfo;
}

const ProfileHero = ({ userData }: IProfileHeroProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const fullName = `${userData.first_name} ${userData.last_name}`;
  const featuredSkills = Array.isArray(userData.expertise)
    ? userData.expertise
    : Array.isArray(userData.skills)
      ? userData.skills
      : [];
  const socialMedia = Array.isArray(userData.social_media) ? userData.social_media : [];
  const connectLinks = socialMedia.filter((item) => item.category === 'connect');
  const workLinks = socialMedia.filter((item) => item.category === 'work');
  const profileDetails: IProfileDetail[] = [
    {
      label: 'Location',
      value: userData.base_location,
      icon: faLocationDot,
    },
    {
      label: 'Expertise',
      value: Array.isArray(userData.skills) ? userData.skills.slice(0, 2).join(', ') : '',
      icon: faCode,
    },
    {
      label: 'Contact',
      value: userData.email,
      icon: faEnvelope,
    },
  ];

  return (
    <section
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-semantic-panel-bg text-semantic-text-body lg:block"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-semantic-accent-primary opacity-10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 order-2 -mt-[250px] flex min-h-0 w-full flex-col px-6 pb-12 pt-16 md:order-1 md:mt-0 md:min-h-svh md:px-12 md:pb-16 md:pt-20 lg:w-[54%] lg:px-[clamp(4rem,8vw,9rem)] lg:pb-20 lg:pt-[clamp(5rem,9vh,8rem)]">
        <div className="max-w-[42rem]">
          <h1
            id="hero-title"
            className={`flex flex-col font-display text-[clamp(2.25rem,4.0vw,5.5rem)] font-light leading-[0.95] tracking-[-0.045em] text-semantic-text-strong ${isImageLoaded ? 'opacity-0 [animation:heroContentReveal_700ms_ease-out_850ms_forwards] motion-reduce:opacity-100 motion-reduce:[animation:none]' : 'opacity-0'}`}
          >
            <span className="mb-1 text-[0.58em] font-light tracking-[-0.025em]">Hi! I&apos;m</span>
            <strong className="w-fit bg-theme-gradient bg-clip-text font-bold uppercase tracking-normal text-transparent">
              {fullName}
            </strong>
          </h1>

          <p className="mt-4 max-w-full text-[clamp(0.65rem,2.4vw,1.15rem)] font-semibold text-semantic-accent-primary">
            <span
              className={`hero-role-typewriter ${isImageLoaded ? 'hero-role-typewriter--active' : ''}`}
            >
              {userData.role}
            </span>
          </p>

          <p className={`mt-8 max-w-[38rem] text-sm leading-7 text-semantic-text-body md:text-base md:leading-8 ${isImageLoaded ? 'opacity-0 [animation:heroContentReveal_650ms_ease-out_1200ms_forwards] motion-reduce:opacity-100 motion-reduce:[animation:none]' : 'opacity-0'}`}>
            {userData.description}
          </p>

          <ul
            className={`mt-8 flex max-w-[40rem] list-none flex-wrap gap-3 p-0 ${isImageLoaded ? 'opacity-0 [animation:heroContentReveal_650ms_ease-out_1350ms_forwards] motion-reduce:opacity-100 motion-reduce:[animation:none]' : 'opacity-0'}`}
            aria-label="Featured skills"
          >
            {featuredSkills.map((expertise) => (
              <li key={expertise}>
                <SkillPill label={expertise} />
              </li>
            ))}
          </ul>

          <dl className={`mt-8 grid max-w-[42rem] grid-cols-1 gap-4 sm:grid-cols-3 ${isImageLoaded ? 'opacity-0 [animation:heroContentReveal_650ms_ease-out_1500ms_forwards] motion-reduce:opacity-100 motion-reduce:[animation:none]' : 'opacity-0'}`}>
            {profileDetails.map((detail) => (
              <CardSmall {...detail} key={detail.label} />
            ))}
          </dl>
        </div>

        <div className={`mt-16 flex flex-wrap items-start gap-14 sm:gap-24 lg:mt-auto lg:pt-16 ${isImageLoaded ? 'opacity-0 [animation:heroContentReveal_650ms_ease-out_1650ms_forwards] motion-reduce:opacity-100 motion-reduce:[animation:none]' : 'opacity-0'}`}>
          <div>
            <p className="text-[0.7rem] font-semibold text-semantic-text-body">Connect with me</p>
            <div className="mt-4 flex gap-5 text-2xl text-semantic-text-strong">
              {connectLinks.map((item) => (
                <ProfileSocialLink item={item} key={item.label} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold text-semantic-text-body">See what I&apos;m doing</p>
            <div className="mt-4 flex gap-5 text-2xl text-semantic-text-strong">
              {workLinks.map((item) => (
                <ProfileSocialLink item={item} key={item.label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`relative order-1 h-[34rem] w-full md:order-2 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[56%] ${isImageLoaded ? 'opacity-0 [animation:heroImageReveal_850ms_ease-out_forwards] motion-reduce:opacity-100 motion-reduce:[animation:none]' : 'opacity-0'}`}>
        <img
          className="h-full w-full object-cover object-top grayscale contrast-[1.08] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_100%)]"
          src={userData.profile_url}
          alt={`Portrait of ${fullName}`}
          decoding="async"
          fetchPriority="high"
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setIsImageLoaded(true)}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,var(--semantic-panel-bg)_0%,transparent_25%,transparent_85%,var(--semantic-panel-bg-40)_100%)]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default ProfileHero;
