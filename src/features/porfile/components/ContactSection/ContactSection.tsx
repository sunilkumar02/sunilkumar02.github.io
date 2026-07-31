import { useEffect, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import { FaDownload, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import type { userInfo } from '@utils/types/user.type';
import { ProfileSocialLink } from '../ProfileSocialLink';

interface IContactSectionProps {
  userData: userInfo;
}

interface IContactDetail {
  label: string;
  value: string;
  icon: IconType;
  href?: string;
}

const DETAIL_DELAYS = ['delay-100', 'delay-200', 'delay-300'];

const ContactSection = ({ userData }: IContactSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const socialMedia = Array.isArray(userData.social_media) ? userData.social_media : [];
  const phoneLink = socialMedia.find((item) => item.icon === 'phone');
  const resumeUrl = userData.resume_url?.trim();
  const fullName = `${userData.first_name} ${userData.last_name}`;
  const contactDetails: IContactDetail[] = [
    {
      label: 'Email',
      value: userData.email,
      icon: FaEnvelope,
      href: `mailto:${userData.email}`,
    },
    {
      label: 'Phone',
      value: phoneLink?.url.replace('tel:', '') ?? 'Available on request',
      icon: FaPhone,
      href: phoneLink?.url,
    },
    {
      label: 'Location',
      value: userData.base_location,
      icon: FaMapMarkerAlt,
    },
  ];

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
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-semantic-page-bg px-6 py-14 text-semantic-text-body md:px-12 md:py-18 lg:px-[clamp(4rem,7vw,8rem)]"
      aria-labelledby="contact-title"
    >
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-semantic-accent-primary-10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-4xl">
        <header
          className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <h2
            id="contact-title"
            className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[0.98] tracking-[-0.045em] text-semantic-text-strong"
          >
            Let&apos;s Connect &amp;{' '}
            <strong className="bg-theme-gradient bg-clip-text font-bold tracking-normal text-transparent">
              Collaborate
            </strong>
          </h2>
          <p className="mt-5 text-sm leading-7 text-semantic-text-body md:text-base">
            Whether it&apos;s a new project or collaboration, I&apos;d love to hear from you.
          </p>
        </header>

        <div className="mt-10 space-y-4 md:mt-12 md:space-y-5">
          {contactDetails.map((detail, index) => {
            const DetailIcon = detail.icon;
            const content = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-theme-gradient text-lg text-white shadow-[0_8px_24px_var(--semantic-shadow-color)] md:h-14 md:w-14 md:text-xl">
                  <DetailIcon aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium text-semantic-text-body">
                    {detail.label}
                  </span>
                  <span className="mt-1 block break-words text-sm font-semibold text-semantic-text-strong md:text-base">
                    {detail.value}
                  </span>
                </span>
              </>
            );
            const className = `flex min-h-20 items-center gap-4 rounded-2xl border border-semantic-line-rule bg-semantic-panel-bg-50 px-4 py-4 shadow-[0_12px_32px_var(--semantic-shadow-color)] backdrop-blur-md transition-all duration-700 hover:border-semantic-accent-primary motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none md:px-5 ${DETAIL_DELAYS[index] ?? ''} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`;

            return detail.href ? (
              <a className={className} href={detail.href} key={detail.label}>
                {content}
              </a>
            ) : (
              <div className={className} key={detail.label}>
                {content}
              </div>
            );
          })}
        </div>

        <div
          className={`mt-8 flex flex-col gap-6 transition-all delay-500 duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:flex-row sm:items-center sm:justify-between ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <div className="flex flex-wrap gap-3">
            {socialMedia.map((item) => (
              <ProfileSocialLink boxed item={item} key={item.label} />
            ))}
          </div>

          {resumeUrl ? (
            <a
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-xl border border-semantic-accent-primary px-5 text-sm font-semibold text-semantic-text-strong transition-all duration-300 hover:-translate-y-1 hover:bg-semantic-panel-bg-50"
              href={resumeUrl}
              download={`${fullName.replace(/\s+/g, '-')}-Resume`}
            >
              <FaDownload aria-hidden="true" />
              Download resume
            </a>
          ) : (
            <button
              type="button"
              className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-3 rounded-xl border border-semantic-line-rule bg-semantic-panel-bg-50 px-5 text-sm font-semibold text-semantic-text-body opacity-65"
              disabled
              title="Resume URL will be added soon"
            >
              <FaDownload aria-hidden="true" />
              Download resume
              <span className="text-[0.6rem] uppercase tracking-[0.12em]">Soon</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
