import type { SiteConfig, SiteContent } from "../types";
import GitHub from "@components/icons/Github.astro";
import LinkedIn from "@components/icons/Linkedin.astro";

export const SITE_CONFIG: SiteConfig = {
  title: "Tobias Kohn",
  author: "Tobias Kohn",
  description:
    "Explore the personal site of Tobias Kohn, CS student and developer. Learn about my projects, download my resume, and connect.",
  lang: "en",
  siteLogo: "/self.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/tobias2004", icon: GitHub },
    { text: "LinkedIn", href: "https://linkedin.com/in/tobiaskohn", icon: LinkedIn },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "tobikohn.com",
  email: "me@tobikohn.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Tobias Kohn",
    specialty: "Undergraduate Student",
    summary:
      "I am Computer Science at Oregon State University in Corvallis, OR. I'm in love with Data Science, Machine Learning, and Artificial Intelligence.",
  },
  experience: [
    {
      company: "Vanderbilt University Medical Center",
      position: "Incoming Health Informatics Intern",
      startDate: "May 2025",
      endDate: "Aug 2025",
      summary: [
        "Participant of the Vanderbilt Biomedical Informatics Summer Program.",
      ],
    },
    {
      company: "SHARE Lab - Oregon State University",
      position: "Data Science Research Assistant",
      startDate: "Jan 2025",
      endDate: "Jun 2025",
      summary: [
        "Processed data from 50 in-home sensors across 100+ homes with Pandas and NumPy to support research on detecting cognitive decline in older adults",
        "Engineered features from raw time-series data, analyzing inactivity and movement patterns within the home.",
        "Applied machine learning approaches with scikit-learn to predict the presence of amyloid plaques in subjects' brains.",
      ],
    },
    {
      company: "Oregon State University",
      position: "Undergraduate Teaching Assistant",
      startDate: "Sep 2024",
      endDate: "Jun 2025",
      summary: [
        "Managed and directed 2 labs with 25 students each week.",
        "Instructed a total of 100 students on Python and C++ programming fundamentals, breaking down complex concepts into simple ideas to enhance comprehension.",
        "Provided guidance on coding assignments, strategies, and problem-solving techniques to reinforce students' understanding.",
      ],
  },
  ],
  about: {
    description: `
      Hi, I’m Tobias Kohn, a computer science student, data science researcher, and machine learning enthusiast studying at Oregon State University.\n

      I am passionate about developing robust, user and developer-friendly appications by integrating technical expertise with my soft-skills of leadership, public speaking, and relationship-building.\n

      Currently, I'm working to enhance my shell personal project by combining my background in machine learning with my interest in computational mathematics. I'm developing a custom Linear Algebra library in C.\n

      When I'm not coding or researching, I enjoy playing soccer, hiking the outdoors, trying out new cooking recepies, and spending quality time with my friends and family.
    `,
    image: "/self.jpg",
  },
};

// #5755ff
