import { Intro } from '@assets/index';
import type { userInfo } from '@utils/types/user.type';

export const profileMockData = {
  user_id: "profile-preview",

  first_name: "Sunil",
  last_name: "Kumar H T",

  email: "sunilthimmegowda@gmail.com",

  profile_url: Intro,

  role: "AI Full-Stack Engineer & Senior Frontend developer",

  description:
    "Creating AI-powered solutions. Building modern web experiences. Solving real-world problems with technology.",

  resume_url: "",

  about: [
    'I\'m a Senior Frontend Engineer and Full-Stack AI Engineer passionate about building intelligent, scalable software. With 7+ years of experience, I specialize in React, TypeScript, Python, LLM integrations, RAG, AI agents, and modern cloud-native architectures.',
     'I build end-to-end AI applications that seamlessly connect powerful backend intelligence with intuitive, high-performance user experiences. I enjoy solving complex engineering problems, designing scalable systems, and leveraging artificial intelligence to create impactful products that users love.'
  ],

  base_location: "Bengaluru, India",

  social_media: [
    {
      label: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/sunilkumarht/",
      category: "connect",
    },
    {
      label: "Email",
      icon: "email",
      url: "mailto:sunilthimmegowda@gmail.com",
      category: "connect",
    },
    {
      label: "Call",
      icon: "phone",
      url: "tel:+918867572990",
      category: "connect",
    },
    {
      label: "WhatsApp",
      icon: "whatsapp",
      url: "https://wa.me/918867572990",
      category: "connect",
    },
    {
      label: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/",
      category: "connect",
    },
    {
      label: "GitHub",
      icon: "github",
      url: "https://github.com/sunilkumar02",
      category: "work",
    },
    {
      label: "LeetCode",
      icon: "leetcode",
      url: "https://leetcode.com/",
      category: "work",
    },
  ],

  expertise: [
    "Senior Frontend Engineer",
    "AI Enthusiast",
    "AI Full-Stack Engineer",
    "React Developer",
    "Gen AI Developer",
  ],

  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "Angular",
    "Next.js",
    "Redux",
    "Zustand",
    "Tailwind CSS",
    "SCSS",
    "Web Components",
    "WebSockets",
    "REST APIs",
    "RAG",
    "Prompt Engineering",
    "Git",
    "GitHub Copilot",
  ],

  core_strength: [
    {
      title: "AI-Powered Frontend",
      description:
        "Building conversational AI, streaming interfaces, and seamless LLM experiences.",
      logo: "faRobot",
    },
    {
      title: "Frontend Architecture",
      description:
        "Designing scalable component systems and maintainable React applications.",
      logo: "faLaptopCode",
    },
    {
      title: "Performance & Delivery",
      description:
        "Delivering fast, reliable products with modern tooling and AI-assisted workflows.",
      logo: "faRocket",
    },
  ],
} satisfies userInfo;
