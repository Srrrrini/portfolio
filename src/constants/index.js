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
  python,
  java,
  nextjs,
  ml,nhjk,animation,ihs, lanedetection, Flipkart,imageclass,
  apex1,
  mbclogo,
  CMU,
  nimble,
  cerlab
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id:"research",
    title:"Research"
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id:"projects",
    title:"Projects"
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI and Machine Learning",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
  {
    title: "Data Analyst",
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
    name: "Python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
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
    name: "machineLearning",
    icon: ml,
  },
];

const experiences = [
    {
    title: "Robotics Software Engineer - Intern",
    company_name: "Nimble Robotics",
    icon: nimble,
    location:"San Francisco, CA, U.S.A",
    iconBg: "#212121",
    date: "May 2025 - August 2025",
    points: [
    "Migrated a perception model to NVIDIA Triton Inference Server (ONNX), reducing item-picking decision time by 36%.",
    "Engineered a low-latency Rust pipeline for Triton, deployed to production, saving ~1 hour/day for robots.",
    "Built an MLOps pipeline for a new pick ranking model using AWS, Label Studio, and LakeFS.",
    "Developed a pick ranking ML model with 85% top-1 accuracy and ~1ms inference."
  ],
  },
  {
    title: "Product Manager",
    company_name: "ATP STEM Education and Training Services",
    icon: tesla,
    location:"Dubai, U.A.E",
    iconBg: "#383E56",
    date: "July 2024 - October 2024",
    points: [
      "Spearheaded the end-to-end development of an innovative web application enabling automatic question paper generation, reducing manual effort by 80% through advanced algorithms and seamless integration of React, Node.js, and SQL.",
      "Designed and optimized a custom algorithm that dynamically generates multiple question papers simultaneously, tailored to specific requirements such as subject, topic, and difficulty, boosting efficiency and scalability for educational institutions.",
      "Developed an intelligent extraction system that parsed individual questions and metadata from Word documents, converting them to LaTeX and storing them in a structured database, automating and streamlining the entire question upload process.",
    ],
  },
  {
    title: "Research - Data Science Intern",
    company_name: "MBC Group",
    icon: mbclogo,
    location:"Dubai, U.A.E",
    iconBg: "#ffffff",
    date: "June 2024 - July 2023",
    points: [
      "Successfully handled and analyzed over 2 million data points, including minute-by-minute, daily, and monthly TRP, Share, and Reach metrics for various demographics and channels.",
      "Developed robust models for forecasting time series data using ARIMA, Exponential Smoothing, and Long Short-Term Memory (LSTM) networks, and conducted seasonality tests, including the Augmented Dickey-Fuller (ADF) test, Kwiatkowski-Phillips-Schmidt-Shin (KPSS) test and Seasonal Mann-Kendall test to ensure reliability and accuracy.",
    ],
  },
  {
    title: "Software Engineer - Intern",
    company_name: "Wells Fargo",
    icon: starbucks,
    location:"Hyderabad, India",
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Collaborated with technology leaders and utilized the agile framework to engineer an in-house intelligent search application, enabling swift loan processing in equipment finance for both the USA and Canada regions.",
      "Achieved a significant 20x speedup using an optimized Python-Django algorithm, reducing search times from 20 seconds to under 1 second for 15.8 Million documents from a NoSQL database.",
      "Delivered a deployment-ready application with 60% more accuracy, eliminating the firm’s reliance on third-party tools while ensuring runtime customizability through a user-friendly React frontend.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "ATP STEM Education and Training Services",
    icon: tesla,
    location:"Dubai, U.A.E",
    iconBg: "#383E56",
    date: "Jan 2022 - June 2022",
    points: [
      "Worked closely with the top management to automate their business process by building an accounting application using low code tools, delivering it in half the time and at 10% of the cost compared to full code development.",
      "Implemented an automated invoicing system with intelligent reminders, reducing time spent on administrative tasks by 85%. Introduced role-based access restrictions to mitigate the risk of sensitive data leakage.",
      "Provided comprehensive training to onboard employees onto the new application while actively incorporating their feedback.",
    ],
  },

];

const education = [
  {
    title: "Carnegie Mellon University",
    company_name: "Master of Science in Mechanical Engineering - Research",
    icon: CMU,
    location:"Pittsburgh, U.S.A",
    iconBg: "#ffffff",
    date: "August 2024 - Present",
    points: ["Researching task planning and mapping for heterogeneous robot teams to enable efficient multi-agent collaboration in Roboteam, under Prof Kenji Shimada at CERLAB."],
  },
  {
    title: "Indian Institute of Technology, Madras",
    company_name: "Bachelors of Technology in Mechanical Engineering with Honors",
    icon: shopify,
    location:"Chennai, India",
    iconBg: "#ffffff",
    date: "November 2020 - July 2024",
    points: [
      "Minor in AI and Machine learning",
      "IITM Pravartak Fellow"
    ],
  },

];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const ResearchExp = [
  {
    name: "Roboteam",
    organization : "CerLab - Carnegie Mellon University",
    role:"Graduate Research Assistant",
    guide:"Professor Kenji Shimada",
    description:
    "Industrial environments require coordinated multi-robot systems to enhance efficiency and safety in complex operations. This project aims to develop a semantic mapping system for heterogeneous robot teams (UGV and UAV) operating collaboratively in dynamic industrial environments, enabling real-time multi-agent coordination and distributed perception fusion. As a Graduate Research Assistant, I implemented a perception pipeline on the Boston Dynamics Spot using a sensor suite consisting of an Ouster OS-1-128 LiDAR and panoramic camera payload. This system integrates YOLOv7 for object detection and SAM2 for semantic segmentation. I validated the system in a mock construction environment, achieving 87.19% object map completeness with an average error of 3.11 cm and 99.19% background map completeness with an error of 2.27 cm. Additionally, I integrated a SlideSLAM system on Spot using RGBD and LiDAR data for real-time semantic segmentation. These results demonstrate the system's effectiveness in enabling precise multi-agent coordination for industrial applications.",
          tags: [
      {
        name: "ROS2",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
      
    ],
    image: cerlab,
    source_code_link: "https://github.com/",
    file_name:"IEEE RAL publication",
    link:'https://ieeexplore.ieee.org/abstract/document/11159179',

  },
  {
    name: "Cyber Physical System",
    organization : "Dynamics Lab - Indian Institute of Technology Madras",
    role:"Undergraduate Research Assistant",
    guide:"Professor Sivasrinivasu Devadula",
    description:
    "Thermal errors in CNC machines significantly impact manufacturing precision, leading to costly defects and reduced productivity. This project developed a Cyber-Physical System to mitigate thermal errors through real-time prediction and compensation. As an Undergraduate Research Assistant, I integrated a Deep Neural Network-based model that processes thermal data from CNC machine encoders. I built an online learning Long Short-Term Memory (LSTM) model optimized with a Genetic Algorithm using PyTorch. This approach achieved a performance of 2.20 microns RMSE and a 0.95 R² score. To validate the model's effectiveness, I experimented with alternative architectures including BiLSTM, AutoRegression, RNN, XGBoost, and SVR models for comparison. I created a thermal data analysis dashboard using React.js and Node.js, which integrated with AWS Cloud and CNC machine encoders. This system enables real-time data transmission, prediction, and automatic compensation of thermal deviations, demonstrating improved manufacturing accuracy and reliability.",
          tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
      
    ],
    image: animation,
    source_code_link: "https://github.com/",
  },
  {
    name: "High-Precision Linear Z-Axis Stage Development",
    organization : "Indian Institute of Technology Madras",
    role:"Bachelor's Thesis Project",
    guide:"Professor Sathyan Subbiah, Professor Sivasrinivasu Devadula",
    description:
      "High-precision manufacturing systems require linear stages that maintain exceptional accuracy under dynamic loading conditions. This thesis project aimed to develop a high-precision linear z-axis stage capable of supporting industrial spindle units while meeting stringent performance requirements. As the primary designer, I developed a stage with specifications of 50 mm/s velocity, 1-micron accuracy, and 10 m/s² acceleration, capable of supporting a 20 kg spindle unit. I created detailed GD&T drawings and 3D models using Fusion 360, which served as the foundation for manufacturing coordination. I coordinated with manufacturers and managed procurement for critical components including motors and linear scales, ensuring seamless project execution. To validate the design, I conducted kinematic tolerance analysis using 3DCS software. This analysis confirmed the design's accuracy and reliability, demonstrating that the stage meets the specified performance requirements for precision manufacturing applications.",
    tags: [
      {
        name: "Fusion 360",
        color: "blue-text-gradient",
      },
      {
        name: "GD&T Drawings",
        color: "pink-text-gradient",
      },
    ],
    file_name:"BTP report",
    link:'https://drive.google.com/file/d/1jvjlTslbF6n9-OsMecsAaL14arXMzhUP/view?usp=drive_link',
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "System on a Chip cooling",
    organization : "H.T.T.P Lab - Indian Institute of Technology Madras",
    role:"Undergraduate Research Assistant",
    guide:"T.T. Narendran Institute Chair Professor Chakravarthy Balaji",
    description:"Modern electronic systems face critical thermal management challenges that limit performance and reliability. This project aimed to develop an efficient cooling solution for System on Chip (SoC) devices using Phase Change Materials (PCM). As an Undergraduate Research Assistant, I developed a novel multiple PCM-based heat sink for efficient SoC thermal management. I conducted multi-objective optimization to achieve low average temperature and reduced thermal non-uniformity. The optimized design reduced steady-state time for a 65 W SoC by 1600 seconds and lowered transient temperature difference by 7% compared to traditional air-based heat sinks. These improvements enhance system longevity and reliability. I examined the efficacy of the multiple PCM heat sink under varying heat loads, demonstrating a 10% reduction in temperature difference during power surges. The multiple PCM heat sink achieved steady state 150 seconds faster than the air-only configuration, validating the design's effectiveness for dynamic thermal management applications.",
    tags: [
      {
        name: "Ansys",
        color: "blue-text-gradient",
      },
      {
        name: "Fluent",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    file_name:"UGRP report",
    link:'https://drive.google.com/file/d/17DqBenXEmgCC05WnZ_GSqlyjqL9idwy0/view?usp=drive_link',
  },
];
const projects = [
  {
    name: "Central Navigation System",
    image : Flipkart,
    organization:"GRID 3.0 FLIPKART Robotics Challenge",
    description:
      "Determine the bot’s current location by identifying aruco codes pasted on the bot using open cv and devised algorithm that sends instructions to the bot based on live location to quickly reach the endpoint.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
    ],
    video:'https://drive.google.com/file/d/1wst7QBrEZWIdMWRE5cdoXl3EdlNA5H-2/view?usp=sharing',
    report:'',
    source_code_link: 'https://github.com/Srrrrini/Central-Navigation-System-GRID-3.0-',
  },
  {
    name: "Autonomous Car washing bot",
    image : nhjk,
    organization:"IBOT Robotics competition(First Position)",
    description:
      "Devised a Stain detection algorithm using OpenCV",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
    ],
    video:'',
    report:'https://drive.google.com/file/d/1bNkg2uzUOloX8DuVFgsq14NKEkUv_Ogc/view?usp=sharing',
    source_code_link: 'https://github.com/Srrrrini/carwash-ibot',
  },
  {
    name: "Image Classification",
    image : imageclass,
    organization:"Computer Vision and Intelligence Club - IITM",
    description:
      "Designed and trained a custom Convolutional Neural Network (CNN) in Keras for image classification, achieving an 84% accuracy rate on a dataset of over 14,000 labeled images.  Leveraged transfer learning from MobileNetV3 to develop an image classification model, attaining a remarkable 91.23% accuracy. ",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
    ],
    video:'',
    report:'',
    source_code_link: 'https://github.com/Srrrrini/Self-Projects/blob/main/IMAGE_classification.ipynb',
  },
  {
    name: "Lane detection",
    image : lanedetection,
    organization:"Computer Vision and Intelligence Club - IITM",
    description:
      "Devised a Lane detection algorithm using OpenCV",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
    ],
    report:'',
    video:'',
    source_code_link: 'https://github.com/Srrrrini/Self-Projects/blob/main/LANE_detection.ipynb',
  },
];

const life = [
  {
    title: "Carnegie Mellon University",
    company_name: "Master of Science in Mechanical Engineering - Research",
    icon: CMU,
    location:"Pittsburgh, U.S.A",
    iconBg: "#ffffff",
    date: "August 2024 - Present",
    points: ["Researching task planning and mapping for heterogeneous robot teams to enable efficient multi-agent collaboration in Roboteam, under Prof. Kenji Shimada at CERLAB."],
  },
  {
  title: "Robotics Software Engineer - Intern",
  company_name: "Nimble Robotics",
  icon: nimble,
  location:"San Francisco, CA, U.S.A",
  iconBg: "#ffffff",
  date: "May 2025 - August 2025",
  points: ["Worked on the vision team to reduce time and increase the accuracy of picking items."],
},
  {
    title: "Indian Institute of Technology, Madras",
    company_name: "Bachelors of Technology in Mechanical Engineering with Honors",
    icon: shopify,
    location:"Chennai, India",
    iconBg: "#ffffff",
    date: "November 2020 - July 2024",
    points: [
      "Minor in AI and Machine learning",
      "IITM Pravartak Fellow"
    ],
  },
    {
    title: "Product Manager",
    company_name: "ATP STEM Education and Training Services",
    icon: tesla,
    location:"Dubai, U.A.E",
    iconBg: "#ffffff",
    date: "July 2024 - September 2024",
    points: [],
    type:'work',
  },
  {
    title: "Research - Data Science Intern",
    company_name: "MBC Group",
    icon: mbclogo,
    location:"Dubai, U.A.E",
    iconBg: "#ffffff",
    date: "June 2024 - July 2024",
    points: [],
    type:'research',
  }, 
  {
    title: "Bachelor's Thesis Project",
    company_name: "Precise linear stage",
    icon: shopify,
    location:"Indian Institute of Technology Madras",
    iconBg: "#ffffff",
    date: "July 2023 - May 2024",
    points: [],
    type:'research',
  }, 
  {
    title: "Undergraduate Research Assistant",
    company_name: "Cyber Physical System",
    icon: shopify,
    location:"Dynamics Lab - Indian Institute of Technology Madras",
    iconBg: "#ffffff",
    date: "August 2023 - December 2023",
    points: [],
    type:'research',
  },  

  {
    title: "Software Engineer - Intern",
    company_name: "Wells Fargo",
    icon: starbucks,
    location:"Hyderabad, India",
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [],
    type:'work',
  },
  {
    title: "Undergraduate Research Assistant",
    company_name: "SoC cooling using multiple PCM based heat sink",
    icon: shopify,
    location:"H.T.T.P Lab - Indian Institute of Technology Madras",
    iconBg: "#ffffff",
    date: "January 2023 - October 2023",
    points: [],
    type:'research',
  },  
  {
    title: "Freelance Developer",
    company_name: "ATP STEM Education and Training Services",
    icon: tesla,
    location:"Dubai, U.A.E",
    iconBg: "#ffffff",
    date: "Jan 2022 - June 2022",
    points: [],
    type:'work',
  },
  {
    title: "Early Life",
    company_name: "Indian High School",
    location:"Dubai, U.A.E",
    iconBg: "#383E56",
    icon: ihs,
    date: "- May 2020",
    points: ["All india Rank 1356 in JEE Advanced 2020",
    "All india Rank 3945 in JEE Main 2020",
    "97% in 12th grade - CBSE"
  ],
  type:'',
  },
]
export { services, technologies, experiences, testimonials, projects, ResearchExp,life, education };
