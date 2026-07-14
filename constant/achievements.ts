export interface Achievement {
  id: number;
  image: string;
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
}

export const achievementsData: Achievement[] = [
  {
    id: 1,
    image: '/images/logos/image.png',
    title: 'Certificate of Merit - Naukri Campus Young Turks',
    description: 'Earned a Certificate of Merit with 97.78 percentile in Naukri Campus Young Turks 2025, followed by a global rank of 9974 in Round 2.',
    links: [
      {
        name: 'View Certificate Round 1',
        url: '/images/certificates/naukriytr1.pdf',
      },
      {
        name: 'View Result Round 2',
        url: '/images/certificates/naukriytr2.png',
      },
    ],
  },
  {
    id: 2,
    image: '/images/logos/daviselogo.png',
    title: 'Certificate of Appreciation - DAViSE Lab',
    description: 'Received a Certificate of Appreciation from DAViSE Lab, NIT Delhi, serving as Student Coordinator for the SmartCodeWeb 1.0 hackathon.',
    links: [
      {
        name: 'View Certificate',
        url: '/images/certificates/scw1.jpeg',
      },
    ],
  },
  {
    id: 3,
    image: '/images/logos/apnaclg.png',
    title: 'Certificate of Completion - Alpha (DSA with Java)',
    description: 'Successfully completed the Alpha (DSA with Java) course by Apna College, covering Data Structures and Algorithms in Java.',
    links: [
      {
        name: 'View Certificate',
        url: '/images/certificates/Java(DSA).pdf',
      },
    ],
  },
  {
    id: 4,
    image: '/images/logos/ic2sdt.png',
    title: 'Student Coordinator & Web Developer - IC2SDT 2025',
    description: 'Contributed to the Web Development Team and served as Student Coordinator for the 2nd IEEE International Conference on Computer Science & Digital Technologies (IC2SDT 2025) hosted at NIT Delhi.',
    links: [],
  },
  
  // {
  //   id: 2,
  //   image: '/images/naukri-logo.png',
  //   title: 'AIR 168 - Naukri Campus Engineers\' Ring of Honour',
  //   description: 'Secured All India Rank 168 in the Naukri Campus Engineers\' Ring of Honour 2025 challenge.',
  //   links: [
  //     {
  //       name: 'View Result Round 1',
  //       url: '#',
  //     },
  //     {
  //       name: 'View Result Round 2',
  //       url: '#',
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   image: '/images/hackerrank-logo.png',
  //   title: '5-Star HackerRank Rating',
  //   description: 'Achieved 5-star rating on HackerRank with consistent performance in competitive programming challenges across multiple domains including Problem Solving and Data Structures.',
  //   links: [],
  // },
  // {
  //   id: 5,
  //   image: '/images/nieit-logo.png',
  //   title: 'NIT Delhi Dean\'s List - Academic Excellence',
  //   description: 'Recognized for consistent academic excellence and outstanding performance in coursework. Maintained high GPA throughout the engineering program with focus on AI/ML specialization.',
  //   links: [],
  // },
  // {
  //   id: 6,
  //   image: '/images/innovation-logo.png',
  //   title: 'Innovation Award - Hackathon Winner',
  //   description: 'Won first place in the National Hackathon for developing an AI-powered resume analyzer with real-time feedback and mock interview capabilities.',
  //   links: [
  //     {
  //       name: 'View Project',
  //       url: '#',
  //     },
  //     {
  //       name: 'GitHub',
  //       url: '#',
  //     },
  //   ],
  // },
];
