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
    "Modding gaming consoles",
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
      title: "Robotic arm",
      description:
        "My robotic arm is controlled with a computer mouse and powered by an Arduino Uno.",
      image: "/images/projects/roboarm.jpeg",
    },
    {
      title: "Diy Heelys",
      description:
        "Cut into an old pair of shoes and placed in a 3d printed chasis for the wheel.",
      image: "/images/projects/heelys.jpeg",
    },
    {
      title: "pwnagotchi",
      description:
        "Pwnagotchi is a tool that utilizes bettercap and operates on a Raspberry Pi to monitor its surrounding Wi-Fi environment, aiming to capture crackable WPA key material.",
      image: "/images/projects/pwnpi.jpeg",
    },
    {
      title: "Gokart",
      description:
        "I am currently repairing this gokart from Facebook Marketplace.",
      image: "/images/projects/gokart.jpeg",
    },
    
  ] as Project[],
};
