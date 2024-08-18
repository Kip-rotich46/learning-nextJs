import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  freelance,
  ktda,
  liveapp,
  rick,
  travel,
  kaba,
  litein,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX Design",
    icon: web,
  },
  {
    title: "Full Stack Development",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "API Intergration & Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Industrial Attachment",
    company_name: "Kenya Tea Development Agency",
    icon: ktda,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Learned to debug code and optimize algorithms for efficiency.",
      "Gained practical knowledge in web development, contributing to projects and understanding the full stack of technologies involved.",
      "Improved ability to communicate technical concepts to non-technical stakeholders from other departments.",
      "Adapted to a professional work environment, learning time management and the importance of early communication.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelancer",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React Js and Express Js.",
      "Customizes Web Solutions",
      "Works closely with clients to understand their requirements, provide technical advice, and deliver projects on time.",
      "Balances various projects simultaneously, often handling tasks like coding, testing, debugging, and deployment independently."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: freelance,
    iconBg: "#383E56",
    date: "April 2024 - present",
    points: [
      "Developing and maintaining web applications using React Js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const education = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Kabarak University",
    icon: kaba,
    iconBg: "#E6DEDD",
    date: "September 2020 - April 2024",
    points: [
      "My campus experience in computer science has been a transformative journey",
      "I've bridged theoretical knowledge with practical application. Through rigorous coursework in algorithms, data structures, software development, and systems design",
      "I've built a solid foundation in the principles of computing. The hands-on labs, coding projects, and collaborative assignments have sharpened my problem-solving skills and taught me how to work effectively in teams.",
      "Beyond the classroom, I've actively participated in extracurricular activities such as hackathons, coding competitions, and tech clubs, which have allowed me to explore emerging technologies and further hone my technical skills.",
      "Internships and research projects have provided me with real-world experience, enabling me to apply what I've learned to solve complex problems. This journey has not only deepened my understanding of computer science but also prepared me for a dynamic career in the tech industry.",
    ]
  },
  {
    title: "High School / Secondary Education",
    institution: "Litein High School",
    icon: litein,
    iconBg: "#E6DEDD",
    date: "January 2016 - December 2019",
    points: [
      " During my high school years, my passion for technology and computers began to take shape.",
      " I immersed myself in subjects like mathematics and physics, which laid the groundwork for my understanding of logic and problem-solving.",
      " My curiosity led me to explore programming on my own, starting with basic coding languages, which sparked my interest in computer science.",
      "In addition to academics, I participated in tech clubs and competitions, where I collaborated with peers on projects that ranged from building simple applications to exploring robotics.",
      " These experiences not only enhanced my technical skills but also fostered a sense of teamwork and innovation. High school was where I discovered my love for technology, setting the stage for my future studies and career in computer science.",
    ]
  },
]
const testimonials = [
  {
    testimonial:
      "Gideon is so down to earth. He is very eager to learn and deliver high end software products",
    name: "Mathias Angule",
    designation: "Senior Software Engineer",
    company: "MS",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Felix Koros",
    designation: "Senior Aircraft Maintenance Engineer",
    company: "Bombardier",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Gideon optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Hosea Rono",
    designation: "CEO",
    company: "May Construction",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Live Chat App",
    description: "This project is a Live Chat App created using Vite and TypeScript, utilizing the @stream-io/video-react-sdk.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Video-Streaming",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: liveapp,
    source_code_link: "https://github.com/Kip-rotich46/live-chat-app",
  },
  {
    name: "Rick Morty & Wiki",
    description:
      "A React application that allows users to browse and filter characters, episodes, and locations from the Rick and Morty universe. This app utilizes the Rick and Morty API to fetch and display data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: rick,
    source_code_link: "https://github.com/Kip-rotich46/rick-morty_wiki",
  },
  {
    name: "Travel Advisor",
    description:
      "Geolocation, Google Maps API & Google Places API, fetching API data based on the location, data filtering are just some features that make this Travel Advisor App the best Maps Application",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Kip-rotich46/travel-advisor",
  },
];

export { services, technologies, experiences, education, testimonials, projects };