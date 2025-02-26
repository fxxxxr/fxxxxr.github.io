// gitprofile.config.ts

const CONFIG = {

  
  github: {
    username: 'fxxxxr', // Updated GitHub username
  },
  base: '/', // Assuming deployment to https://fxxxxr.github.io/
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',// Using manual mode to showcase specific projects
     automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      
      manual: {
        projects: ['fxxxxr/cross-chain-arbitrage', 'fxxxxr/real-estate-nft-dapp', 'fxxxxr/dappazon'],
      },
    },
     external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Dappazon',
          description:
            'Built a decentralized e-commerce platform on Ethereum, enabling users to securely buy and sell products using
 cryptocurrency.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/fxxxxr/dappazon',
        },
        {
          title: 'Real Estate NFT DApp',
          description:
            ' Developed a decentralized real estate marketplace using Solidity and React.js, enhancing transaction security and
 transparency.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/fxxxxr/REAL_ESTATE-SMART-CONTRACT-BLOCKCHAIN',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Deepanshu Singh Gautam',
    description: 'Blockchain Developer | Smart Contracts | Full Stack Developer',
    imageURL: '',
  },
  social: {
    linkedin: 'deepanshu-singh-gautam-422318258',
    github: 'fxxxxr',
    email: 'gautamds376@iiitmanipur.ac.in',
    website: '',
  },
  resume: {
    fileUrl: 'https://drive.google.com/uc?export=download&id=1ocgjcSk8XqYKYIYjlHpuqNZmUrJo1eT1
', // Replace with actual hosted resume URL
  },
  skills: [
    'Solidity', 'Ethereum', 'Javascript', 'Hardhat', 'Web3.js', 'Ether.js',
    'React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS',
    'Cryptography'
  ],
  experiences: [
    {
      company: 'C-DAC',
      position: 'Intern (Ethical Hacking & Penetration Testing)',
      from: 'Nov 2024',
      to: 'Dec 2024',
      companyLink: 'https://www.linkedin.com/company/cdac-noida/',
    },
    {
      company: 'OFFSIDE',
      position: 'Frontend Developer Intern',
      from: 'Nov 2023',
      to: 'Jan 2024',
      companyLink: 'https://www.linkedin.com/company/offsideclub/posts/?feedView=all',
    },
    {
      company: 'CAREWELL INDIA TRUST',
      position: 'Business Development Associate',
      from: 'Aug 2023',
      to: 'Sep 2023',
      companyLink: 'https://www.linkedin.com/company/care-well-india-trust/posts/?feedView=all',
    },
  ],
  educations: [
    {
      institution: 'Indian Institute of Information Technology Manipur',
      degree: 'Bachelor in Computer Science and Engineering',
      from: '2022',
      to: '2026',
    },
    ],
  achievements: [
    'Smart India Hackathon (SIH) Finalist',
    'Top 5 in CSE Branch',
    'Learned Japanese Language'
  ],
  themeConfig: {
    defaultTheme: 'nord',
    disableSwitch: false,
    displayAvatarRing: true,
    themes: ['light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',],

     // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
