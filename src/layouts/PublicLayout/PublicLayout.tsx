import { Outlet } from 'react-router';
import { SideNav } from '@components/common/SideNav';
import { ThemeToggle } from '@components/common/ThemeToggle';
import { profileMockData, ProfileSocialLink } from '../../features/portfolio';

const PublicLayout = () => {
  const socialMedia = Array.isArray(profileMockData.social_media)
    ? profileMockData.social_media
    : [];

  return (
    <div className="relative min-h-svh w-full">
      <div className="absolute right-4 top-4 z-30 md:right-6 md:top-6">
        <ThemeToggle />
      </div>

      <main className="min-h-svh w-full">
        <Outlet />
      </main>

      <SideNav label="Quick contact links">
        {socialMedia.map((item) => (
          <ProfileSocialLink compact item={item} key={item.label} />
        ))}
      </SideNav>
    </div>
  );
};

export default PublicLayout;
