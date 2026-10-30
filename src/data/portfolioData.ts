/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillItem, AcademicRecord, ExperienceRecord, AchievementRecord } from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Shivakumar',
  role: 'Aspiring Software Developer',
  tagline: 'Building My Future Through Technology.',
  quote: '"Building My Future Through Technology."',
  collegeName: 'Faculty of Engineering & Technology',
  universityName: 'Visvesvaraya Technological University (VTU)',
  department: 'Department of Computer Science & Engineering',
  degree: 'Bachelor of Engineering in Computer Science & Engineering',
  currentYear: 'Final Year (7th Semester)',
  email: 'shivutengali61@gmail.com',
  github: 'https://github.com/shivutengali',
  linkedin: 'https://www.linkedin.com/in/shivutengali',
  twitter: 'https://twitter.com/shivutengali',
  location: 'Karnataka, India',
  focusAreas: ['Web Development', 'Software Development', 'AI-Powered Applications'],
  introSummary: 'Computer science student passionate about software development, modern web technologies, and solving real-world problems. Committed to writing clean, maintainable code and building high-performance digital solutions.',
  stats: [
    { label: 'Core Projects Built', value: '3+' },
    { label: 'Academic CGPA', value: '8.8/10' },
    { label: 'DSA Problems Solved', value: '250+' },
    { label: 'Key Tech Stacks', value: '6 Categories' }
  ],
  aboutDetails: {
    professionalIntroduction: 'Hello! I am Shivakumar, an aspiring software developer and final-year Computer Science & Engineering student. I have a genuine passion for engineering modern web applications, scalable software architectures, and intelligent systems. Over the course of my academic journey, I have developed a strong foundation in core computer science disciplines including data structures, object-oriented design, database management, and network protocols.',
    careerObjective: 'My primary objective is to launch my professional career as a Software Development Engineer (SDE) or Full-Stack Developer at an innovative technology organization where I can apply my problem-solving abilities, contribute to production codebases, and continuously learn modern distributed and AI-powered technologies.',
    technicalInterests: [
      'Modern Full-Stack Web Development (React, Node.js, Express, Tailwind CSS)',
      'Algorithmic Problem Solving & Efficient Data Structures',
      'Relational & NoSQL Database Design (MySQL, PostgreSQL, MongoDB)',
      'AI & Computer Vision Fundamentals (OpenCV, Python, Machine Learning basics)',
      'API Design, Version Control & Collaborative Software Engineering'
    ],
    developmentJourney: 'My technical journey started with understanding fundamental programming principles in C and C++, focusing on memory management and algorithms. As I progressed into object-oriented concepts with Java and Python, I discovered the creative power of web development. I quickly immersed myself in building responsive, component-driven user interfaces with React and engineering RESTful backend services with Node.js and Express. Today, I actively explore blending practical computer vision and AI models into intuitive web applications.',
    futureCareerGoals: 'In the coming years, I aim to grow into an impactful software engineer capable of architecting reliable, fault-tolerant distributed platforms. I aspire to contribute to mission-critical open-source software, mentor fellow student developers, and design software solutions that positively impact communities.'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'roadsafe-ai-dashboard',
    title: 'RoadSafe AI Dashboard',
    subtitle: 'Computer-Vision Incident Telemetry & Road Hazard Analytics Platform',
    overview: 'An intelligent road safety analytics platform that detects road hazards, anomalies, and potential accident risks in real time using computer vision and sensor telemetry.',
    problemSolved: 'Helps municipal traffic controllers and emergency services identify critical potholes, collision risks, and traffic disruptions early, drastically reducing response latency for on-road incidents.',
    technologies: ['Python', 'OpenCV', 'React', 'Node.js', 'Tailwind CSS', 'WebSockets', 'REST APIs'],
    githubUrl: 'https://github.com/shivutengali/roadsafe-ai-dashboard',
    liveDemoUrl: 'https://roadsafe-ai.preview.dev',
    previewType: 'roadsafe',
    metrics: '94.2% Hazard Detection Accuracy · Sub-150ms Telemetry Pipeline',
    keyFeatures: [
      'Real-time automated pothole and hazard detection using OpenCV image processing',
      'Interactive geospatial risk heat-mapping dashboard for traffic authorities',
      'WebSocket-driven live incident feed with priority triage classifications',
      'Automated alert dispatch simulation for nearby emergency response units'
    ],
    architecture: [
      'Vision Pipeline: Python OpenCV detection model processing simulated road video frames',
      'Telemetry Gateway: Node.js Express WebSocket server broadcasting live alerts',
      'Frontend Dashboard: React 19 + Tailwind CSS + Lucide Icons with responsive risk feeds',
      'Data Store: Structured JSON & SQL incident logs with geo-coordinates'
    ]
  },
  {
    id: 'bus-ticket-booking-system',
    title: 'Bus Ticket Booking System',
    subtitle: 'Full-Stack Online Reservation & Real-Time Seat Allocation Portal',
    overview: 'A complete, full-stack bus transit management and ticket booking application designed for passengers and route fleet operators.',
    problemSolved: 'Replaces inconvenient manual booking counters with instant digital seat layout maps, automated schedule filtering, dynamic fare computation, and instant verifiable e-ticket passes.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS', 'RESTful APIs', 'JWT Auth'],
    githubUrl: 'https://github.com/shivutengali/bus-ticket-booking-system',
    liveDemoUrl: 'https://busticket-booking.preview.dev',
    previewType: 'bus',
    metrics: 'Interactive Seat Grid · Multi-Route Schedule Management · Zero Double-Bookings',
    keyFeatures: [
      'Interactive visual seat matrix with live seat occupancy status (Available, Selected, Booked)',
      'Route, date, and bus type filtering (Sleeper, Semi-Sleeper, AC, Non-AC)',
      'Automated fare calculation engine with tax and discount voucher handling',
      'Instant digital ticket generation with printable PDF boarding pass format'
    ],
    architecture: [
      'Frontend UI: Modular React components with interactive seat reservation state',
      'Backend API: Express.js REST endpoints handling booking transactions and concurrency',
      'Database: Normalized MySQL relational schema guaranteeing zero seat collision',
      'Authentication: Secure token-based session verification for passenger accounts'
    ]
  },
  {
    id: 'personal-portfolio-website',
    title: 'Personal Portfolio Website',
    subtitle: 'Modern, Accessible Developer Portfolio with Section URL Routing',
    overview: 'A high-performance personal portfolio website built with modern React and Tailwind CSS, engineered specifically for software developer recruitment and academic presentation.',
    problemSolved: 'Provides tech recruiters and hiring teams with a direct, transparent showcase of academic background, verified skill categories, interactive project codebases, and direct contact avenues.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Motion', 'Vite'],
    githubUrl: 'https://github.com/shivutengali/portfolio-shivakumar',
    liveDemoUrl: 'https://shivakumar-portfolio.preview.dev',
    previewType: 'portfolio',
    metrics: '100% Responsive · Shareable Section URLs · Dual Light/Dark Theme',
    keyFeatures: [
      'URL Hash section routing (/#home, /#about, /#academics, /#skills, /#projects, /#experience, /#achievements, /#contact)',
      'One-click copy section link utility with visual toast confirmation',
      'Interactive in-app project sandbox simulators with live state testing',
      'Accessible form validation with error feedback and direct resume download'
    ],
    architecture: [
      'Component Architecture: Modular React 19 functional components with strict TypeScript types',
      'Styling System: Tailwind CSS v4 with dark/light mode custom-variant configuration',
      'Navigation Layer: Browser history pushState and window.location.hash synchronization',
      'Build System: Vite 8 providing instantaneous HMR and optimized production bundles'
    ]
  }
];

export const SKILLS: SkillItem[] = [
  // 1. Programming Languages
  {
    name: 'Python',
    level: 90,
    experience: 'Academic & Projects',
    category: 'Programming Languages',
    description: 'Core syntax, OOP concepts, file I/O, algorithmic scripting, and scientific libraries.',
    tools: ['Python 3.x', 'NumPy', 'Pandas', 'OOP', 'Data Structures']
  },
  {
    name: 'Java',
    level: 86,
    experience: 'Academic & DSA',
    category: 'Programming Languages',
    description: 'Object-oriented programming, collections framework, exception handling, and multithreading basics.',
    tools: ['Java 17', 'Collections', 'OOP Principles', 'Generics', 'JVM']
  },
  {
    name: 'C & C++',
    level: 85,
    experience: 'Core Foundation',
    category: 'Programming Languages',
    description: 'Pointers, dynamic memory allocation, foundational algorithms, and systems logic.',
    tools: ['C', 'C++ 14/17', 'Pointers', 'STL', 'Memory Management']
  },
  {
    name: 'JavaScript & TypeScript',
    level: 88,
    experience: 'Web Applications',
    category: 'Programming Languages',
    description: 'ES6+ features, asynchronous promises, DOM manipulation, and static type safety.',
    tools: ['ES6+', 'TypeScript', 'Async/Await', 'JSON', 'Fetch API']
  },

  // 2. Frontend Development
  {
    name: 'React.js',
    level: 92,
    experience: 'Modern Web Apps',
    category: 'Frontend Development',
    description: 'Functional components, hooks (useState, useEffect, useMemo), props drilling avoidance, and SPA routing.',
    tools: ['React 19', 'Hooks', 'Context API', 'Vite', 'React Router']
  },
  {
    name: 'HTML5 & Modern CSS3',
    level: 94,
    experience: 'Web Foundation',
    category: 'Frontend Development',
    description: 'Semantic HTML markup, CSS Flexbox, CSS Grid, animations, and accessibility standards.',
    tools: ['HTML5 Semantic', 'CSS3', 'Flexbox', 'CSS Grid', 'Media Queries']
  },
  {
    name: 'Tailwind CSS',
    level: 92,
    experience: 'UI Styling',
    category: 'Frontend Development',
    description: 'Utility-first styling, responsive breakpoints, dark mode variants, and clean layout design.',
    tools: ['Tailwind CSS v4', 'PostCSS', 'Design Tokens', 'Utility Classes']
  },
  {
    name: 'Responsive & Accessible Design',
    level: 88,
    experience: 'UX Engineering',
    category: 'Frontend Development',
    description: 'Mobile-first design principles, cross-browser compatibility, and WCAG AA contrast standards.',
    tools: ['Mobile-First', 'Accessibility (a11y)', 'Touch Targets', 'Lighthouse']
  },

  // 3. Backend Development
  {
    name: 'Node.js & Express.js',
    level: 86,
    experience: 'Backend Services',
    category: 'Backend Development',
    description: 'Building RESTful APIs, middleware architecture, routing, and asynchronous request handling.',
    tools: ['Node.js', 'Express.js', 'REST APIs', 'Middleware', 'npm']
  },
  {
    name: 'RESTful API Engineering',
    level: 88,
    experience: 'API Design',
    category: 'Backend Development',
    description: 'Designing clean HTTP endpoints, status codes, request validation, and JSON payload contracts.',
    tools: ['HTTP Methods', 'JSON', 'CRUD Operations', 'CORS', 'Error Handling']
  },
  {
    name: 'Python Flask / FastAPI Basics',
    level: 80,
    experience: 'Microservices',
    category: 'Backend Development',
    description: 'Lightweight API endpoints for ML model inference and data processing pipelines.',
    tools: ['Flask', 'FastAPI', 'Pydantic', 'Uvicorn', 'Routing']
  },

  // 4. Database Management
  {
    name: 'MySQL',
    level: 87,
    experience: 'Relational DB',
    category: 'Database Management',
    description: 'Relational schema design, normalization (1NF-3NF), complex JOINs, foreign keys, and indexing.',
    tools: ['MySQL Workbench', 'SQL Queries', 'JOINs', 'Transactions', 'Normalization']
  },
  {
    name: 'PostgreSQL',
    level: 82,
    experience: 'Relational DB',
    category: 'Database Management',
    description: 'Relational tables, constraint enforcement, aggregation queries, and ORM integration.',
    tools: ['PostgreSQL', 'pgAdmin', 'Constraints', 'Aggregations', 'Indexes']
  },
  {
    name: 'MongoDB Basics',
    level: 78,
    experience: 'NoSQL DB',
    category: 'Database Management',
    description: 'Document-oriented database structures, JSON/BSON schemas, and CRUD operations.',
    tools: ['MongoDB Compass', 'Mongoose', 'Collections', 'Documents', 'NoSQL']
  },

  // 5. Developer Tools
  {
    name: 'Git & GitHub',
    level: 90,
    experience: 'Version Control',
    category: 'Developer Tools',
    description: 'Branching, merging, pull requests, resolving merge conflicts, and repository management.',
    tools: ['Git CLI', 'GitHub', 'Commit Conventions', 'Branches', 'PR Reviews']
  },
  {
    name: 'VS Code & Development Environment',
    level: 94,
    experience: 'Daily Driver',
    category: 'Developer Tools',
    description: 'Extensions ecosystem, integrated terminal, debugger configuration, and workspace tuning.',
    tools: ['VS Code', 'Snippets', 'Linters', 'Prettier', 'Live Server']
  },
  {
    name: 'Postman',
    level: 86,
    experience: 'API Testing',
    category: 'Developer Tools',
    description: 'Testing and debugging REST endpoints, inspecting headers, payloads, and mock environments.',
    tools: ['Postman Collections', 'Environment Variables', 'API Testing', 'Auth Headers']
  },
  {
    name: 'Linux Basics & Shell Commands',
    level: 80,
    experience: 'Environment',
    category: 'Developer Tools',
    description: 'Basic bash commands, file permissions, directory navigation, package management, and SSH.',
    tools: ['Bash', 'Ubuntu / Linux', 'File Permissions', 'CLI Tools', 'SSH']
  },

  // 6. AI and Machine Learning Fundamentals
  {
    name: 'OpenCV & Computer Vision Basics',
    level: 82,
    experience: 'Projects',
    category: 'AI and Machine Learning Fundamentals',
    description: 'Image processing, edge detection, video stream frame capture, and contour detection for hazards.',
    tools: ['OpenCV Python', 'Image Filtering', 'Edge Detection', 'Video Telemetry']
  },
  {
    name: 'Python NumPy & Pandas',
    level: 84,
    experience: 'Data Analysis',
    category: 'AI and Machine Learning Fundamentals',
    description: 'Matrix manipulations, data cleansing, dataset transformations, and statistical summaries.',
    tools: ['NumPy Arrays', 'Pandas DataFrames', 'Data Cleaning', 'Matplotlib']
  },
  {
    name: 'Machine Learning Concepts & Scikit-Learn',
    level: 78,
    experience: 'Academic Course',
    category: 'AI and Machine Learning Fundamentals',
    description: 'Supervised learning, classification, linear regression, decision trees, and model evaluation.',
    tools: ['Scikit-learn', 'Model Evaluation', 'Classification', 'Train-Test Split']
  },
  {
    name: 'Prompt Engineering & Modern AI Tools',
    level: 85,
    experience: 'Practical Application',
    category: 'AI and Machine Learning Fundamentals',
    description: 'Structured prompt architecture, context optimization, zero/few-shot prompting, and developer workflow acceleration.',
    tools: ['Structured Prompts', 'Context Optimization', 'System Prompts', 'API Integration']
  }
];

export const ACADEMICS: AcademicRecord = {
  id: 'acad-be-cse',
  institution: 'Faculty of Engineering & Technology',
  degree: 'Bachelor of Engineering (B.E.)',
  department: 'Department of Computer Science & Engineering',
  university: 'Visvesvaraya Technological University (VTU)',
  currentStatus: '7th Semester / Final Year (Graduating 2025)',
  cgpaOrPercentage: '8.8 CGPA (First Class with Distinction)',
  location: 'Karnataka, India',
  period: '2021 — 2025',
  keyCourses: [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming with Java',
    'Computer Organization & Architecture',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering & Project Management',
    'Artificial Intelligence & Machine Learning'
  ],
  academicAchievements: [
    'Ranked in Top 5% of the Computer Science & Engineering department cohort',
    'Delivered Technical Seminar presentation on "Real-Time Telemetry and Edge AI for Smart Transportation"',
    'Active member and coordinator in college Coding Club & Annual Technical Symposium',
    'Completed academic mini-projects with highest grade "Outstanding" (O Grade)'
  ],
  previousEducation: [
    {
      level: 'Pre-University Course (12th Standard / PUC - Science)',
      institution: 'Government / Composite Pre-University College',
      boardOrUniversity: 'Department of Pre-University Education, Karnataka',
      score: '92.4% (Distinction)',
      year: '2019 — 2021'
    },
    {
      level: 'Secondary School Leaving Certificate (10th Standard / SSLC)',
      institution: 'High School',
      boardOrUniversity: 'Karnataka Secondary Education Examination Board (KSEEB)',
      score: '91.8% (Distinction)',
      year: '2018 — 2019'
    }
  ]
};

export const EXPERIENCES: ExperienceRecord[] = [
  {
    id: 'exp-intern',
    role: 'Web Development Intern / Practical Trainee',
    organization: 'TechCorp Solutions',
    period: 'Aug 2024 — Oct 2024',
    location: 'Hybrid / Karnataka, India',
    status: 'Completed',
    type: 'Internship',
    summary: 'Completed intensive 8-week software development internship focusing on building responsive user interfaces, RESTful API consumption, and database query optimization.',
    contributions: [
      'Developed 5+ responsive React dashboard screens with Tailwind CSS, ensuring 100% mobile and desktop adaptability.',
      'Constructed backend Express.js route handlers and connected SQL queries for user authentication and transaction records.',
      'Collaborated with senior software engineers using Git and GitHub pull request reviews to maintain clean code standards.',
      'Resolved 15+ frontend styling and data-loading bugs reported in testing cycles.'
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'Node.js', 'Express', 'MySQL', 'Git', 'Tailwind CSS']
  },
  {
    id: 'exp-capstone',
    role: 'Academic Capstone Project Lead',
    organization: 'Department of Computer Science & Engineering',
    period: 'Feb 2024 — Present',
    location: 'College Campus',
    status: 'Ongoing',
    type: 'Academic Leadership',
    summary: 'Serving as the lead developer for a 4-student engineering capstone team designing the RoadSafe AI incident analytics platform.',
    contributions: [
      'Authored the Software Requirements Specification (SRS), system architecture diagrams, and milestone schedules.',
      'Engineered the core OpenCV video frame processing script to detect potholes and road surface anomalies.',
      'Integrated real-time WebSocket communications between the Python detection service and the React analytics dashboard.',
      'Conducting weekly sprint reviews, code reviews, and project documentation for departmental faculty evaluation.'
    ],
    technologies: ['Python', 'OpenCV', 'React', 'Node.js', 'WebSockets', 'Tailwind CSS', 'System Design']
  },
  {
    id: 'exp-dsa',
    role: 'Algorithmic Problem Solving & Data Structures',
    organization: 'LeetCode & HackerRank Platforms',
    period: '2023 — Present',
    location: 'Self-Directed',
    status: 'Ongoing',
    type: 'Ongoing Learning',
    summary: 'Continuous self-directed technical practice focused on mastering fundamental and advanced data structures and algorithms.',
    contributions: [
      'Solved 250+ algorithmic problems spanning Arrays, Strings, Hash Maps, Linked Lists, Trees, and Dynamic Programming.',
      'Earned 5-Star badges in Python and Problem Solving on HackerRank.',
      'Consistently analyzing space and time complexity (Big-O notation) for optimal computational efficiency.',
      'Participating regularly in online weekend coding contests to sharpen algorithmic speed.'
    ],
    technologies: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms', 'Big-O Analysis']
  },
  {
    id: 'exp-fullstack-learning',
    role: 'Full-Stack Modern Web & Cloud Exploration',
    organization: 'Independent Engineering Studies',
    period: '2024 — Present',
    location: 'Self-Directed',
    status: 'Ongoing',
    type: 'Ongoing Learning',
    summary: 'Active exploration of production-grade developer tooling, containerization basics, and TypeScript design patterns.',
    contributions: [
      'Deepening practical knowledge of TypeScript strict typing across full-stack applications.',
      'Experimenting with containerizing Node.js and Python microservices using Docker for reproducible deployment environments.',
      'Studying database indexing strategies and API authentication practices (JWT and OAuth basics).'
    ],
    technologies: ['TypeScript', 'Docker Basics', 'PostgreSQL', 'REST APIs', 'Cloud Concepts']
  }
];

export const ACHIEVEMENTS: AchievementRecord[] = [
  {
    id: 'ach-sih',
    title: 'Smart India Hackathon (SIH) — College Winner & Regional Participant',
    organization: 'Ministry of Education & AICTE',
    year: '2023 — 2024',
    category: 'Hackathon',
    credentialId: 'SIH-CAMPUS-2023',
    summary: 'Led student development squad proposing an automated public transport optimization prototype and was selected as the 1st prize winning team at the college-level qualifiers.',
    impact: 'Qualified to represent the college at regional evaluation hackathon rounds.'
  },
  {
    id: 'ach-gcp-foundations',
    title: 'Google Cloud Computing Foundations Course Completion',
    organization: 'Google Cloud / Qwiklabs',
    year: '2024',
    category: 'Certification',
    credentialId: 'GCCF-2024-SK',
    verificationUrl: 'https://cloud.google.com/training',
    summary: 'Completed comprehensive cloud foundations training covering cloud infrastructure, Google Compute Engine, Cloud Storage, IAM policies, and cloud networking basics.',
    impact: 'Applied cloud principles to architect scalable student web project deployments.'
  },
  {
    id: 'ach-hackerrank-prob',
    title: 'HackerRank Problem Solving & Python Verified Credentials',
    organization: 'HackerRank',
    year: '2023',
    category: 'Coding Milestone',
    credentialId: 'HR-PS-SK-9281',
    verificationUrl: 'https://www.hackerrank.com',
    summary: 'Achieved 5-star skill badge in Python and successfully verified intermediate problem-solving capabilities covering data structures and algorithms.',
    impact: 'Maintained disciplined daily coding streak solving complex algorithmic challenges.'
  },
  {
    id: 'ach-meta-frontend',
    title: 'Meta Frontend Developer Specialization Coursework',
    organization: 'Meta / Coursera',
    year: '2023 — 2024',
    category: 'Certification',
    credentialId: 'META-FE-SK-4821',
    summary: 'Completed professional coursework covering React component design, modern JavaScript (ES6+), responsive design, and version control workflows.',
    impact: 'Directly applied industry-standard component patterns across all portfolio projects.'
  },
  {
    id: 'ach-academic-merit',
    title: 'Department Academic Merit Recognition',
    organization: 'Department of Computer Science & Engineering',
    year: '2022 — 2024',
    category: 'Academic Honor',
    summary: 'Recognized by department faculty for sustained academic excellence, securing an 8.8 CGPA and active contributions to technical club activities.',
    impact: 'Maintained consistent high academic standing throughout all 6 evaluated semesters.'
  }
];
