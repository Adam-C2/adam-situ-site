// Edit this file when you want to change site content.
// Keeping content in one place makes updates easier.

export type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export const siteContent = {
  name: "Adam Situ",
  heroTagline:
    "I am a student who likes building things, coding, fixing things, and learning new skills.",
  about:
    "I like to understand how things work so I can be creative and innovate new things. Most days, I am either building small projects, debugging something that broke, or learning a new skill that helps me improve step by step.",
  thingsILike: [
    "Watching practical videos",
    "Taking things apart",
    "Learning new skills",
    "Hanging out with friends",
    "Fencing",
    "Cooking",
    "Biking",
  ],
  now: "Currently learning about networking, web development, soldering, and woodworking.",
  contact: {
    email: "adamsitu8@gmail.com",
    github: "https://github.com/Adam-C2",
  },
  // Add, edit, or remove cards here.
  projects: [
    {
      title: "Project One",
      description:
        "A clean starter project. Replace this text with a short explanation of what you built and why it matters.",
      image: "/images/projects/project-1.svg",
    },
    {
      title: "Project Two",
      description:
        "Another project card with room for a quick summary. Keep it simple and personal.",
      image: "/images/projects/project-2.svg",
    },
    {
      title: "Project Three",
      description:
        "Use this to highlight your favorite build, experiment, or idea.",
      image: "/images/projects/project-3.svg",
    },
  ] as Project[],
};
