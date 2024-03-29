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
  buspack,
  etres,
  iplan,
  bootcoop,
  grissia,
  papeleriawilde,
  yoga,
  moveme,
  nutrisuple,
  inmobilapp,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    title: "SSr React.js Developer",
    company_name: "Buspack",
    icon: buspack,
    iconBg: "#FFFFFF",
    date: "Nov 2022 - July 2023",
    points: [
      "Serving as a Senior React.js Developer at Buspack, I'm entrusted with elevating the user interface to new heights of excellence.",
      "Building and optimizing responsive web applications with a focus on user engagement and satisfaction.",
      "Demonstrating expertise in React.js and staying abreast of industry trends and emerging technologies.",
      "Collaborating with cross-functional teams to deliver high-impact solutions and meet project objectives.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Etres",
    icon: etres,
    iconBg: "#FFFFFF",
    date: "Ago 2022 - Dec 2022",
    points: [
      "Playing a pivotal role in the front-end development team at Etres, crafting visually appealing and responsive user interfaces with JavaScript, CSS.",
      "Collaborating seamlessly with design and back-end teams using PHP to ensure a harmonious user experience.",
      "Striving for pixel-perfect precision and implementing best practices for code quality and maintainability.",
      "Contributing to the development of cutting-edge web applications that resonate with users.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "IPLAN",
    icon: iplan,
    iconBg: "#FFFFFF",
    date: "Sept 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js, React Native and JavaScript.",
      "Backend in Node.JS and .NET, with SQL and Firebase as Database.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Founder & Full Stack Developer",
    company_name: "Boot Coop",
    icon: bootcoop,
    iconBg: "#FFFFFF",
    date: "July 2022 - Present",
    points: [
      "As the founder and full-stack developer at Boot Coop, I pioneered the conceptualization, development, and growth of our digital ventures.",
      "Proficiently employing a blend of technologies such as React.js, React Native, Node.js, .NET, SQL, PHP and Firebase to create dynamic web applications.",
      "Nurturing user-centric design principles to deliver captivating and intuitive user interfaces.",
      "Leading a team of skilled developers and fostering innovation in the digital landscape.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a web as beautiful as our product, but Cristian proved me wrong.",
    name: "Josefina Stanglino",
    designation: "CEO",
    company: "Grissia",
    image:
      "https://media.licdn.com/dms/image/D4D03AQF_vNvXebq2EA/profile-displayphoto-shrink_800_800/0/1696600390435?e=1705536000&v=beta&t=DfvwlX4gR5EfJfKETH-qXVX10i-_RbGBO59GEwalJZs",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Cristian does.",
    name: "Lautaro Riveiro",
    designation: "Sr Developer",
    company: "Boot Coop",
    image:
      "https://media.licdn.com/dms/image/C4D03AQEbZObEjzAZTw/profile-displayphoto-shrink_800_800/0/1661276289537?e=1705536000&v=beta&t=D8VMIHbra26V5PaNrvA4jMjI2LCglK1mTsjh1MykK3A",
  },
  {
    testimonial:
      "After Cristian optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Romina Dangelo",
    designation: "CTO",
    company: "IPLAN",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSek8tfQ7IZLE9Se6MGJzLSzA9F8Lm7kZcBaw&usqp=CAU",
  },
];

const projects = [
  {
    name: "Grissia",
    description:
      "A web site designed for community managers, simplifying social media management, content scheduling, and engagement, ensuring efficient and effective online community oversight.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: grissia,
    source_code_link: "https://somosgrissia.com/",
  },
  {
    name: "Inmobilapp",
    description:
      "A web platform, tailored for a real estate agency, facilitating seamless rentals of apartments. Simplifying property searches and bookings, it enhances the rental experience for tenants and property owners.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: inmobilapp,
    source_code_link: "https://inmobilapp-alpha.vercel.app/",
  },
  {
    name: "Yoga",
    description:
      "A web platform tailored for yoga enthusiasts, streamlining practice scheduling, guided meditation, and community engagement to foster a tranquil and balanced online yoga community.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: yoga,
    source_code_link: "https://landing-yoga.vercel.app/",
  },
  {
    name: "La papelería de Wilde",
    description:
      "A Tiendanube-powered online stationery hub, streamlining the stationery shopping experience. Browse, select, and purchase paper goods and office supplies with ease, all in one place.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: papeleriawilde,
    source_code_link: "https://lapapeleriawilde.mitiendanube.com/",
  },
  {
    name: "Nutrisuple",
    description:
      "An efficient ecommerce site offering a diverse range of medical supplies, including pills and healthcare essentials. User-friendly design ensures easy browsing and shopping for health needs.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: nutrisuple,
    source_code_link: "https://www.nutrisuple.com/",
  },
  {
    name: "Moveme",
    description:
      "A web platform crafted for personal trainers, streamlining appointment scheduling, fitness tracking, and client communication to optimize training experiences and foster healthy lifestyles.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: moveme,
    source_code_link: "https://moveme.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
