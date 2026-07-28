export interface userInfo {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_url: string;
  role: string;
  description: string;
  base_location: string;
  skills: string[];
  expertise?: string[];
  core_strength: CoreStrength[];
  social_media?: ISocialMedia[];
}

export interface CoreStrength {
  title: string;
  description: string;
  logo: string;
}

export interface ISocialMedia {
  label: string;
  icon: TSocialMediaIcon;
  url: string;
  category: TSocialMediaCategory;
}

export type TSocialMediaIcon =
  | 'linkedin'
  | 'email'
  | 'phone'
  | 'whatsapp'
  | 'instagram'
  | 'github'
  | 'leetcode';

export type TSocialMediaCategory = 'connect' | 'work';
