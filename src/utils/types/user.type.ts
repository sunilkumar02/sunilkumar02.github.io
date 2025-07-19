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
  core_strength: CoreStrength[];
}

export interface CoreStrength {
  title: string;
  description: string;
  logo: string;
}