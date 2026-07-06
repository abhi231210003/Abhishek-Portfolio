export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  skills: string[];
  features: string[];
  githubLink: string;
  liveLink?: string;
}

export const projectsData: Project[] = [
  // {
  //   id: 1,
  //   image: '/images/p1.jpg',
  //   title: 'GenAI Resume Analyzer & Interview Prep',
  //   description: 'A comprehensive AI-powered platform that analyzes resumes, generates ATS scores, provides actionable feedback, and prepares candidates with AI-driven mock interviews.',
  //   skills: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
  //   features: ['ATS Score Generator', 'Resume Feedback', 'AI Interview Preparation', 'JWT Authentication'],
  //   githubLink: 'https://github.com/khushi-singh',
  //   liveLink: 'https://genai-resume-analyzer.com',
  // },
  // {
  //   id: 2,
  //   image: '/images/p2.jpg',
  //   title: 'E-commerce Platform with Payment Integration',
  //   description: 'Full-stack e-commerce solution with advanced features including product filtering, cart management, secure payment processing, and order tracking.',
  //   skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Stripe'],
  //   features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Tracking'],
  //   githubLink: 'https://github.com/khushi-singh',
  //   liveLink: 'https://ecommerce-platform.com',
  // },
  // {
  //   id: 3,
  //   image: '/images/p3.jpg',
  //   title: 'AI-Powered Task Management Application',
  //   description: 'Intelligent task management system with AI-driven priority suggestions, automated scheduling, and team collaboration features.',
  //   skills: ['React.js', 'Firebase', 'Tailwind CSS', 'OpenAI API'],
  //   features: ['Task Automation', 'AI Prioritization', 'Team Collaboration', 'Real-time Updates'],
  //   githubLink: 'https://github.com/khushi-singh',
  //   liveLink: 'https://ai-task-manager.com',
  // },
  {
    id: 1,
    image: '/images/p1.jpg',
    title: 'CareerMate: AI Career Coach',
    description: 'An AI-powered career coaching platform featuring interview preparation, an ATS-optimized resume builder with PDF export, AI-generated cover letters, and personalized dashboards with salary trends and market analytics.',
    skills: ['Next.js', 'Prisma', 'PostgreSQL', 'LLM API', 'Clerk Auth', 'Inngest', 'Recharts'],
    features: ['ATS-Optimized Resume Builder', 'AI-Generated Cover Letters', 'Interview Preparation (1000+ Questions)', 'Personalized Salary & Market Analytics Dashboard'],
    githubLink: 'https://github.com/abhi231210003/CareerMate',
    liveLink: '',
  },
  {
    id: 2,
    image: '/images/p2.jpg',
    title: 'ChatterBox: Online Chatting Site',
    description: 'A real-time messaging app with a React and Tailwind CSS frontend, and an Express.js and MongoDB backend, featuring secure authentication and instant messaging via Socket.io.',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS'],
    features: ['Real-Time Messaging (Socket.io)', 'JWT Authentication', 'Bcrypt.js Password Hashing', '60% Reduction in Client-Server Requests'],
    githubLink: 'https://github.com/abhi231210003/ChatterBox',
    liveLink: '',
  },
  {
    id: 3,
    image: '/images/p3.jpg',
    title: 'Fake News and Spam Email Detection Web App',
    description: 'An end-to-end Flask-based full-stack ML web application integrating two machine learning models for Fake News Detection and Spam Email Classification with dynamic model selection and real-time text classification.',
    skills: ['Flask', 'Scikit-learn', 'Python', 'SVM', 'TF-IDF'],
    features: ['Dynamic Model Selection', 'Real-Time Text Classification', '98.3% Fake News Detection Accuracy', '98.4% Spam Classification Accuracy'],
    githubLink: 'https://github.com/abhi231210003/FakeBusters',
    liveLink: '',
  },
  
  {
    id: 4,
    image: '/images/p7.jpg',
    title: 'Hotel Management System',
    description: 'A desktop Hotel Management System built with Python\'s Tkinter for the GUI and MySQL for backend data storage and management.',
    skills: ['Python', 'Tkinter', 'MySQL'],
    features: ['GUI-Based Booking System', 'MySQL Database Integration', 'Room & Guest Management'],
    githubLink: 'https://github.com/abhi231210003/Hotel_Management_System',
    liveLink: '',
  },
  {
    id: 5,
    image: '/images/p4.jpg',
    title: 'Metro Route Optimizer',
    description: 'A Java-based metro route optimizer that models the metro system as a graph, providing shortest distance, minimum travel time, and interchange identification using DFS and Dijkstra\'s algorithm.',
    skills: ['Java', 'Data Structures', 'Graph Algorithms', 'Dijkstra\'s Algorithm'],
    features: ['Shortest Distance Calculation', 'Minimum Travel Time', 'Interchange Detection', 'DFS & Dijkstra Implementation'],
    githubLink: 'https://github.com/abhi231210003/Metro_Rote_optimizer',
    liveLink: '',
  },
  {
    id: 6,
    image: '/images/p5.jpg',
    title: 'Customer Behavior Analysis',
    description: 'An end-to-end, industry-standard data analysis project examining customer shopping trends from retail data using SQL, Python, and Power BI.',
    skills: ['Python', 'SQL', 'Power BI', 'Data Analysis'],
    features: ['SQL Data Querying', 'Python-Based Analysis', 'Power BI Dashboards', 'Retail Trend Insights'],
    githubLink: 'https://github.com/abhi231210003/Customer_Behavior_analysis',
    liveLink: '',
  },
  {
    id: 7,
    image: '/images/p6.jpg',
    title: 'Melodify: Music Player',
    description: 'A web-based Spotify-like music player that allows users to browse albums, select songs, and control playback with album artwork, song info, and volume management.',
    skills: ['JavaScript', 'HTML', 'CSS'],
    features: ['Album Browsing', 'Playback Controls', 'Volume Management', 'Responsive Design'],
    githubLink: 'https://github.com/abhi231210003/Melodify',
    liveLink: '',
  },
];
