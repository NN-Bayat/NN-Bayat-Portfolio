const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Projects",
    link: "https://github.com/NN-Bayat?tab=repositories",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Education",
    link: "#education",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/heroWords/ideas.svg" },
  { text: "Concepts", imgPath: "/images/heroWords/concepts.svg" },
  { text: "Designs", imgPath: "/images/heroWords/designs.svg" },
  { text: "Code", imgPath: "/images/heroWords/code.svg" },
  { text: "Ideas", imgPath: "/images/heroWords/ideas.svg" },
  { text: "Concepts", imgPath: "/images/heroWords/concepts.svg" },
  { text: "Designs", imgPath: "/images/heroWords/designs.svg" },
  { text: "Code", imgPath: "/images/heroWords/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 56, suffix: "+", label: "Completed Projects" },
  { value: 40, suffix: "+", label: "LeetCode Challenges" },
  { value: 32, suffix: "%", label: "Collaborative Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/cssLogo.png",
  },
  {
    imgPath: "/images/logos/htmlLogo.png",
  },
  {
    imgPath: "/images/logos/reactLogo.png",
  },
  {
    imgPath: "/images/logos/jsLogo.png",
  },
  {
    imgPath: "/images/logos/tailwindLogo.png",
  },
  {
    imgPath: "/images/logos/gitLogo.png",
  },
  {
    imgPath: "/images/logos/bootstrapLogo.png",
  },
  {
    imgPath: "/images/logos/githubLogo.png",
  },
];

const abilities = [
  {
    imgPath: "/images/cards/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/cards/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/cards/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript Master",
    modelPath: "/models/javascript_1.glb",
    scale: 0.2,
    rotation: [5.5, -4.8, -4],
  },
  {
    name: "Backend Basic",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Designer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Noorullah is a self-taught developer who creates real-world projects to continuously enhance his skills. He is passionate about building websites that are both functional and visually appealing, and strives to improve with each project he undertakes.",
    // imgPath: "/images/experience/githubExp.png",
    logoPath: "/images/experience/github.png",
    title: "Frontend Developer",
    company: "Personal Projects",
    date: "November 2024 — Present",
    responsibilities: [
      "Developed real-world projects to strengthen coding skills, apply new technologies, and create responsive, user-friendly interfaces.",
      "Engaged in daily LeetCode practice to refine problem-solving abilities and enhance coding efficiency.",
      "Collaborated with UI/UX teams to design and implement responsive, user-friendly interfaces.",
    ],
  },
];

const socialImgs = [
  {
    name: "whatsapp",
    imgPath: "/images/social/whatsapp.png",
    url: "https://wa.me/93766712460?text=Hey%20I%20saw%20your%20Portfolio",
  },
  {
    name: "github",
    imgPath: "/images/social/github.png",
    url: "https://github.com/NN-Bayat",
  },
  {
    name: "linkedin",
    imgPath: "/images/social/linkedin.png",
    url: "https://www.linkedin.com/in/nn-bayat/",
  },
  {
    name: "instagram",
    imgPath: "/images/social/instagram.png",
    url: "https://www.instagram.com/smilerv4?igsh=cXMybmlqN2M4cW51",
  },
];

const eduCards = [
  {
    review:
      "I completed several hands-on certifications through freeCodeCamp, where I focused on building real-world projects that strengthened my front-end skills.",
    // imgPath: "/images/experience/githubExp.png",
    logoPath: "/images/experience/freeCodeCamp.png",
    company: "Free Code Camp",
    date: "July 2024 — Present",
    responsibilities: [
      "Completed certifications in Responsive Web Design, JavaScript Algorithms and Data Structures, and Front-End Development Libraries through hands-on projects.",
      "Built responsive and accessible web applications using HTML, CSS, JavaScript, and React.",
    ],
  },
  {
    review:
      "I earned my high school diploma in Afghanistan, where I established a strong academic foundation and honed the self-discipline that continues to drive my progress in the technology field.",
    // imgPath: "/images/experience/highschool.png",
    logoPath: "/images/experience/highschool.png",
    company: "High School — Afghanistan",
    date: "March 2021 — December 2023",
    responsibilities: [
      "I successfully completed high school while demonstrating strong self discipline and focus.",
    ],
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  socialImgs,
  eduCards,
  techStackIcons,
  navLinks,
};
