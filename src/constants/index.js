import {
  alecarrara,
  backend,
  bootcoop,
  bootcoopweb,
  buspack,
  camarcocalc,
  creator,
  css,
  derecho,
  docker,
  dynamo,
  etres,
  figma,
  git,
  html,
  inmobilapp,
  iplan,
  javascript,
  miguelmaidana,
  mobile,
  mongodb,
  moveme,
  nodejs,
  ntccom,
  reactjs,
  redpas,
  redux,
  rogerthat,
  tailwind,
  tsoft,
  typescript,
  web,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Sr Developer',
    company_name: 'Tsoft',
    icon: tsoft,
    iconBg: '#FFFFFF',
    date: 'Aug 2024 - Present',
    points: [
      'Promoted to Senior Developer, currently working on three projects simultaneously.',
      'At PAE, developing an application in React with .NET.',
      'At YPF, working on an application in Next.js with microfrontends and .NET in the backend (focused on the front-end).',
      'Continuing the project at Natura using Angular.',
      'Collaborate using various AI tools and participate in a continuous improvement team with AI.',
      'Provide continuous support and mentorship to my colleagues and implement best practices following SOLID principles.',
    ],
  },
  {
    title: 'SSr Developer',
    company_name: 'Tsoft',
    icon: tsoft,
    iconBg: '#FFFFFF',
    date: 'Sept 2023 - Aug 2024',
    points: [
      'Started at PAE developing the Axion application using React Native and .NET.',
      'Joined the Natura project, developing in Angular 3 with Java 1.7.',
      'Collaborated with cross-functional teams to deliver high-quality software solutions.',
      'Gained experience in mobile and web application development using various technologies.',
    ],
  },
  // {
  //   title: 'Founder & Full Stack Developer',
  //   company_name: 'Boot Coop',
  //   icon: bootcoop,
  //   iconBg: '#FFFFFF',
  //   date: 'July 2022 - Present',
  //   points: [
  //     'As the founder and full-stack developer at Boot Coop, I pioneered the conceptualization, development, and growth of our digital ventures.',
  //     'Proficiently employing a blend of technologies such as React.js, React Native, Node.js, .NET, SQL, PHP and Firebase to create dynamic web applications.',
  //     'Nurturing user-centric design principles to deliver captivating and intuitive user interfaces.',
  //     'Leading a team of skilled developers and fostering innovation in the digital landscape.',
  //   ],
  // },
  {
    title: 'SSr React.js Developer',
    company_name: 'Buspack',
    icon: buspack,
    iconBg: '#FFFFFF',
    date: 'Nov 2022 - July 2023',
    points: [
      "Serving as a Senior React.js Developer at Buspack, I'm entrusted with elevating the user interface to new heights of excellence.",
      'Building and optimizing responsive web applications with a focus on user engagement and satisfaction.',
      'Demonstrating expertise in React.js and staying abreast of industry trends and emerging technologies.',
      'Collaborating with cross-functional teams to deliver high-impact solutions and meet project objectives.',
    ],
  },
  {
    title: 'Front End Developer',
    company_name: 'Etres',
    icon: etres,
    iconBg: '#FFFFFF',
    date: 'Ago 2022 - Dec 2022',
    points: [
      'Playing a pivotal role in the front-end development team at Etres, crafting visually appealing and responsive user interfaces with JavaScript, CSS.',
      'Collaborating seamlessly with design and back-end teams using PHP to ensure a harmonious user experience.',
      'Striving for pixel-perfect precision and implementing best practices for code quality and maintainability.',
      'Contributing to the development of cutting-edge web applications that resonate with users.',
    ],
  },
  {
    title: 'Full stack Developer & Telecommunication Engineering',
    company_name: 'IPLAN',
    icon: iplan,
    iconBg: '#FFFFFF',
    date: 'Sept 2020 - Nov 2023',
    points: [
      'Developing and maintaining web applications using React.js, React Native and JavaScript.',
      'Backend in Node.JS and .NET, with SQL and Firebase as Database.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a web as beautiful as our product, but Cristian proved me wrong.',
    name: 'Alejandro Carrara',
    designation: 'CEO',
    company: 'Ntccom',
    image: alecarrara,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Cristian does.",
    name: 'Miguel Maidana',
    designation: 'Sr Developer',
    company: 'Boot Coop',
    image: miguelmaidana,
  },
  {
    testimonial:
      "After Cristian optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Romina Dangelo',
    designation: 'CTO',
    company: 'IPLAN',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSek8tfQ7IZLE9Se6MGJzLSzA9F8Lm7kZcBaw&usqp=CAU',
  },
]

const projects = [
  {
    name: 'Derecho UBA',
    description:
      'I implement new features, integrate payment gateways, and collaborate with multiple departments to ensure smooth functionality. Currently migrating the site to a secure server environment for enhanced security and performance.',
    tags: [
      {
        name: 'PHP',
        color: 'blue-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'purple-text-gradient',
      },
      {
        name: 'Web Security',
        color: 'red-text-gradient',
      },
    ],
    image: derecho,
    source_code_link: 'http://www.derecho.uba.ar/',
  },

  {
    name: 'Boot Coop',
    description:
      "A landing page for a cooperative IT company I co-founded, offering tailored software development and UX/UI design solutions. Built using HTML, JavaScript, and Tailwind CSS, the site showcases the cooperative's expertise in delivering custom IT services.",
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'orange-text-gradient',
      },
    ],
    image: bootcoopweb,
    source_code_link: 'https://bootcoop.com.ar/',
  },
  {
    name: 'Roger That',
    description:
      'Working on both the mobile app and admin panel, a platform focused on delivering online courses. The mobile app enables users to take courses. Responsible for implementing new features, managing AWS infrastructure, and working on the front-end.',
    tags: [
      {
        name: 'PHP',
        color: 'blue-text-gradient',
      },
      {
        name: 'ProcessWire',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: rogerthat,
    source_code_link: 'https://cloud.rogerthat.la/',
  },
  {
    name: 'Ntccom',
    description:
      'Developed a modern website for Ntccom, a telecommunications company, using Astro, one of the latest technologies in the market. The site focuses on delivering an optimized user experience, combining Tailwind CSS for styling and TypeScript for robust functionality.',
    tags: [
      {
        name: 'Astro',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
    ],
    image: ntccom,
    source_code_link: 'https://ntccom.net/',
  },
  {
    name: 'Camarco Calculator',
    description:
      'Developed a construction index calculator for CAMARCO, a regular client. The tool helps users calculate construction-related adjustments based on specific indexes. Built with Next.js for seamless performance and Tailwind CSS for modern, responsive design.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: camarcocalc,
    source_code_link: 'https://camarcocalc.vercel.app/',
  },
  {
    name: 'Redpas',
    description:
      'Developed an insurance quote calculator for Redpas, allowing users to easily compare insurance plans. Built with Next.js and Tailwind CSS for the front-end, and powered by a Python backend that integrates a API to fetch real-time insurance quotes.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Python',
        color: 'pink-text-gradient',
      },
    ],
    image: redpas,
    source_code_link: 'https://cotizador-autos-swart.vercel.app/',
  },
  {
    name: 'Moveme',
    description:
      'I Built a web platform for a personal trainer to track fitness progress, and display service pricing. Developed using React, Bootstrap, and CSS for a responsive design, the platform also incorporates Testing Library for front-end testing to ensure reliability and usability.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Testing Library',
        color: 'orange-text-gradient',
      },
    ],
    image: moveme,
    source_code_link: 'https://moveme.vercel.app/',
  },
  {
    name: 'Dynamo IoT',
    description:
      'I implement new features in a backoffice platform for a logistics company, enabling real-time tracking of fleets. The system includes calculations and alarm features to monitor operations. Built with PHP using the Kohana framework, with JavaScript and CSS.',
    tags: [
      {
        name: 'PHP',
        color: 'blue-text-gradient',
      },
      {
        name: 'Kohana',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: dynamo,
    source_code_link: 'https://dynamoiot.com/',
  },
  {
    name: 'Inmobilapp',
    description:
      'Developed a platform for a client in Dubai, designed as a clone of Airbnb. The platform enables users to search, book, and manage apartment rentals. Built using Next.js, MongoDB, and Node.js, with Tailwind CSS for styling and Cloudinary for image storage.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
      {
        name: 'Supabase',
        color: 'red-text-gradient',
      },
    ],
    image: inmobilapp,
    source_code_link: 'https://inmobilapp-alpha.vercel.app/',
  },
]

export { experiences, projects, services, technologies, testimonials }
