import type { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import type { ISocialMedia, TSocialMediaIcon } from '@utils/types/user.type';

interface IProfileSocialLinkProps {
  item: ISocialMedia;
  compact?: boolean;
  boxed?: boolean;
}

const socialIcons: Record<TSocialMediaIcon, IconType> = {
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
  phone: FaPhone,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  github: FaGithub,
  leetcode: SiLeetcode,
};

const ProfileSocialLink = ({
  item,
  compact = false,
  boxed = false,
}: IProfileSocialLinkProps) => {
  const SocialIcon = socialIcons[item.icon];
  const isExternalLink = item.url.startsWith('http');

  return (
    <a
      className={
        boxed
          ? 'grid h-11 w-11 place-items-center rounded-xl border border-semantic-line-rule bg-semantic-panel-bg-50 text-base text-semantic-text-body shadow-[0_8px_24px_var(--semantic-shadow-color)] hover:-translate-y-1 hover:border-semantic-accent-primary hover:text-semantic-accent-primary'
          : compact
          ? 'grid h-9 w-9 place-items-center rounded-full text-sm text-semantic-text-body hover:bg-semantic-panel-bg-03 hover:text-semantic-accent-primary'
          : 'text-semantic-text-strong hover:text-semantic-accent-primary'
      }
      href={item.url}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noreferrer' : undefined}
      aria-label={item.label}
      title={item.label}
    >
      <SocialIcon aria-hidden="true" />
    </a>
  );
};

export default ProfileSocialLink;
