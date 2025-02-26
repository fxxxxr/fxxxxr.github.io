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
      mode: 'manual', // Using manual mode to showcase specific projects
      manual: {
        projects: ['fxxxxr/cross-chain-arbitrage', 'fxxxxr/real-estate-nft-dapp', 'fxxxxr/dappazon'],
      },
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
    fileUrl: 'https://example.com/my-resume.pdf', // Replace with actual hosted resume URL
  },
  skills: [
    'Solidity', 'Ethereum', 'Hardhat', 'Web3.js', 'Ether.js',
    'React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS',
    'Cryptography', 'Computer Networks', 'Decentralized Finance',
    'Database Management (SQL, NoSQL)'
  ],
  experiences: [
    {
      company: 'C-DAC',
      position: 'Intern (Ethical Hacking & Penetration Testing)',
      from: 'Nov 2024',
      to: 'Dec 2024',
      companyLink: '',
    },
    {
      company: 'OFFSIDE',
      position: 'Frontend Developer Intern',
      from: 'Nov 2023',
      to: 'Jan 2024',
      companyLink: '',
    },
    {
      company: 'CAREWELL INDIA TRUST',
      position: 'Business Development Associate',
      from: 'Aug 2023',
      to: 'Sep 2023',
      companyLink: '',
    },
  ],
  achievements: [
    'Smart India Hackathon (SIH) Finalist',
    'Top 5 in CSE Branch',
  ],
  themeConfig: {
    defaultTheme: 'nord',
    disableSwitch: false,
    displayAvatarRing: true,
    themes: ['light', 'dark', 'nord', 'cyberpunk', 'synthwave'],
  },
  enablePWA: true,
};

export default CONFIG;
