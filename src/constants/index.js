import {
  mobile,
  backend,
  creator,
  web,
  shopify,
  carrent,
  jobit,
  nhjk,animation,ihs, lanedetection, Flipkart,imageclass,
  mbclogo,
  CMU,
  nimble,
  wellsfargo,
  roboteamFig1,
  roboteamStats,
  roboteamFig2,
  so101EvalChart,
  so101SuccessGrid,
  linkedin,
  gscholar
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id:"research",
    title:"Research"
  },
  {
    id:"projects",
    title:"Projects"
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

export const social = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/srinivas-c-ramineni/",
  },
  {
    name: "Google Scholar",
    icon: gscholar,
    link: "https://scholar.google.com/citations?user=dRa4Wd4AAAAJ&hl=en",
  },
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
    category: "Programming & Development",
    skills: ["Python", "Rust", "C++", "NumPy", "Pandas", "OpenCV", "PCL", "Git", "Linux", "Docker"],
  },
  {
    category: "Machine Learning & Cloud",
    skills: ["PyTorch", "Scikit-learn", "ONNX", "TensorRT", "NVIDIA Triton", "AWS (S3, EC2)", "LakeFS"],
  },
  {
    category: "Robotics & Systems",
    skills: ["ROS / ROS2", "SLAM", "Ouster LiDAR", "NVIDIA Isaac Sim", "CUDA", "MATLAB", "MoveIt"],
  },
];

const ResearchExp = [
  {
    slug: "roboteam",
    name: "Semantic Exploration & Dense Mapping for Heterogeneous Robot Teams",
    organization : "Roboteam, CERLAB - Carnegie Mellon University",
    role:"Graduate Researcher",
    badge: "Published — IEEE RA-L 2025",
    guide:"Professor Kenji Shimada",
    summary: "Semantic mapping system for heterogeneous robot teams on a Boston Dynamics Spot — 87.19% object map completeness, published in IEEE RA-L.",
    description:
    "Developed a semantic mapping system for heterogeneous robot teams (UGV, UAV) operating collaboratively in dynamic industrial environments. Implemented a perception pipeline on a Boston Dynamics Spot using a sensor suite (Ouster OS-1-128 LiDAR and panoramic camera payload) combined with YOLOv7 for object detection and SAM2 for segmentation, and integrated a SlideSLAM system on Spot using RGBD and LiDAR data for real-time semantic segmentation. Validated the system in a mock construction environment, achieving 87.19% object map completeness (3.11 cm avg. error) and 99.19% background map completeness (2.27 cm avg. error). Co-authored the resulting paper, published in IEEE Robotics and Automation Letters (RA-L), 2025.",
    sections: [
      {
        heading: "The system",
        body: "Perception pipeline on a Boston Dynamics Spot: Ouster OS-1-128 LiDAR + panoramic camera, YOLOv7 for detection, SAM2 for segmentation, SlideSLAM for real-time semantic mapping.",
      },
      {
        heading: "Results",
        body: "Validated in a mock construction environment.",
        image: roboteamStats,
      },
      {
        heading: "In the field",
        body: "Exploration path, detected objects, and reconstructed point clouds from the same run.",
        image: roboteamFig2,
      },
    ],
    tags: [
      {
        name: "ROS2",
        color: "blue-text-gradient",
      },
      {
        name: "SLAM",
        color: "green-text-gradient",
      },
      {
        name: "ComputerVision",
        color: "pink-text-gradient",
      },
    ],
    image: roboteamFig1,
    source_code_link: "",
    file_name:"View paper (IEEE RA-L)",
    link:"https://ieeexplore.ieee.org/abstract/document/11159179",
  },
  {
    slug: "cyber-physical-system",
    name: "Cyber Physical System",
    organization : "Dynamics Lab - Indian Institute of Technology Madras",
    role:"Undergraduate Research Assistant",
    guide:"Professor Sivasrinivasu Devadula",
    summary: "Online-learning LSTM model to predict and compensate CNC thermal errors in real time — 2.20 microns RMSE, 0.95 R² score.",
    description:
    "Built an online-learning LSTM model (optimized with a genetic algorithm, PyTorch) to predict and compensate thermal errors in CNC machines in real time, benchmarked against BiLSTM, AutoRegression, RNN, XGBoost, and SVR. Shipped a React/Node.js dashboard on AWS for real-time thermal data, prediction, and compensation.",
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
    slug: "z-axis-stage",
    name: "High-Precision Linear Z-Axis Stage Development",
    organization : "Indian Institute of Technology Madras",
    role:"Bachelor's Thesis Project",
    guide:"Professor Sathyan Subbiah, Professor Sivasrinivasu Devadula",
    summary: "Designed a high-precision linear z-axis stage — 50 mm/s velocity, 1-micron accuracy, supporting a 20 kg spindle unit.",
    description:
      "Designed a linear z-axis stage (50 mm/s velocity, 1-micron accuracy, 10 m/s² acceleration) supporting a 20 kg spindle unit, with full GD&T drawings and 3D models in Fusion 360. Coordinated manufacturing and procurement, and validated the design with kinematic tolerance analysis in 3DCS.",
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
    slug: "soc-cooling",
    name: "System on a Chip cooling",
    organization : "H.T.T.P Lab - Indian Institute of Technology Madras",
    role:"Undergraduate Research Assistant",
    guide:"T.T. Narendran Institute Chair Professor Chakravarthy Balaji",
    summary: "Multiple Phase Change Material heat sink for SoC thermal management — 1600s faster steady-state, 7% lower transient temperature difference.",
    description:"Developed a multiple phase-change-material heat sink for SoC thermal management, multi-objective-optimized for low average temperature and non-uniformity. Reduced steady-state time by 1600s and transient temperature difference by 7% vs. air-based heat sinks, with a 10% improvement under power-surge heat loads.",
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
    slug: "so101-lerobot",
    name: "Robot Learning on a Real Arm (SO-101 / LeRobot)",
    image : so101SuccessGrid,
    organization:"Personal project, built on Hugging Face's LeRobot",
    summary: "Imitation-learning policies on a real 6-DOF arm — 33.3% to 69.6% success rate, plus a memory-efficiency fix upstreamed to LeRobot.",
    description:
      "Trained and evaluated imitation-learning policies (ACT, Diffusion Policy, a fine-tuned Octo vision-language-conditioned generalist policy, SmolVLA — a vision-language-action model — and a novel VQ-BeT baseline) on a real 6-DOF robot arm doing pick-and-place. Built a rigorous evaluation protocol across 48-102 real-hardware rollouts per model; iterating on data and training strategy took the best model from a 33.3% to a 69.6% success rate (grid above: 6 real successful rollouts across left/middle/right regions, including a correctly-ignored distractor object). Found and GPU-verified a real memory-efficiency bug in LeRobot's training code, filed upstream — independently confirmed when another contributor found and merged the same fix first.",
    sections: [
      {
        heading: "What I built",
        body: "Five imitation-learning policies (ACT, Diffusion Policy, Octo, SmolVLA, VQ-BeT) on a real 6-DOF arm doing pick-and-place, evaluated across 48-102 real-hardware rollouts per model.",
      },
      {
        heading: "Results",
        body: "Iterating on data and training strategy took the best model from 33.3% to 69.6% success.",
        image: so101EvalChart,
      },
      {
        heading: "Open-source contribution",
        body: "Found and GPU-verified a memory-efficiency bug in LeRobot's training code, filed upstream — independently confirmed when another contributor merged the same fix first.",
        link: "https://github.com/huggingface/lerobot/pull/4339",
        linkLabel: "View the PR",
      },
    ],
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "RobotLearning",
        color: "green-text-gradient",
      },
      {
        name: "ImitationLearning",
        color: "pink-text-gradient",
      },
    ],
    video:'/media/so101_occlusion_fix.mp4',
    report:'',
    source_code_link: 'https://github.com/huggingface/lerobot',
  },
  {
    slug: "central-navigation-system",
    name: "Central Navigation System",
    image : Flipkart,
    organization:"GRID 3.0 FLIPKART Robotics Challenge",
    summary: "Aruco-code-based bot localization and pathing to reach an endpoint autonomously.",
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
    slug: "car-washing-bot",
    name: "Autonomous Car washing bot",
    image : nhjk,
    organization:"IBOT Robotics competition(First Position)",
    summary: "Stain detection algorithm for an autonomous car-washing robot — 1st place.",
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
    slug: "image-classification",
    name: "Image Classification",
    image : imageclass,
    organization:"Computer Vision and Intelligence Club - IITM",
    summary: "Custom CNN + MobileNetV3 transfer learning for image classification — 91.23% accuracy.",
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
    slug: "lane-detection",
    name: "Lane detection",
    image : lanedetection,
    organization:"Computer Vision and Intelligence Club - IITM",
    summary: "Lane detection algorithm for autonomous driving using OpenCV.",
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
  title: "Robotics Software Engineer",
  company_name: "Nimble Robotics",
  icon: nimble,
  location:"San Francisco, CA, U.S.A",
  iconBg: "#ffffff",
  date: "June 2026 - Present",
  points: [
    "Working on path planning and task allocation for the robot fleet.",
    "Building inference server infrastructure for computer vision pipelines.",
    "Parallelizing hardware movement across manipulators."
  ],
  type:'work',
},
  {
  title: "Robotics Software Engineer - Intern",
  company_name: "Nimble Robotics",
  icon: nimble,
  location:"San Francisco, CA, U.S.A",
  iconBg: "#ffffff",
  date: "May 2025 - August 2025",
  points: [
    "Migrated a critical perception model to NVIDIA Triton Inference Server (ONNX), cutting item-picking decision time by 36% (1.1s to 700ms) and other checks by 16-45%.",
    "Programmed a Rust-based low-latency pipeline integrating Triton inference into manipulator robot flows, deployed to warehouses, saving over 1 hour/day across 75 robots performing 10k picks daily.",
    "Built an end-to-end MLOps pipeline for a new item pick ranking model using AWS, Label Studio, and LakeFS, curating ~3,500 samples from annotators for reproducible model training.",
    "Engineered an ML model for item pick ranking, delivering 85% top-1 accuracy with ~1ms inference time, shortening item selection time from 0.55s to under 0.1s."
  ],
  type:'work',
},
  {
    title: "Carnegie Mellon University",
    company_name: "Master of Science in Mechanical Engineering - Research",
    icon: CMU,
    location:"Pittsburgh, U.S.A",
    iconBg: "#ffffff",
    date: "August 2024 - May 2026",
    points: [
      "GPA: 4.0/4.0",
      "Relevant coursework: Robot Localization and Mapping, Computer Vision, Modern Control for Robotics.",
      "Researched task planning and semantic mapping for heterogeneous robot teams in Roboteam, under Prof. Kenji Shimada at CERLAB — co-authored a resulting IEEE RA-L publication."
    ],
    link: "/research/roboteam",
    linkLabel: "View Roboteam research",
  },
  {
    title: "Indian Institute of Technology, Madras",
    company_name: "Bachelors of Technology in Mechanical Engineering with Honors",
    icon: shopify,
    location:"Chennai, India",
    iconBg: "#ffffff",
    date: "November 2020 - July 2024",
    points: [
      "GPA: 8.78/10.0",
      "Minor in AI and Machine learning",
      "IITM Pravartak Fellow",
      "Relevant coursework: Multi-Armed Bandits, Reinforcement Learning, Deep Learning."
    ],
    link: "/#research",
    linkLabel: "View research projects",
  },
  {
    title: "Machine Learning Intern - Research",
    company_name: "MBC Group",
    icon: mbclogo,
    location:"Dubai, U.A.E",
    iconBg: "#ffffff",
    date: "June 2024 - July 2024",
    points: ["Designed ML models (LSTM) for time series forecasting using 2 million TV metrics and built an end-to-end pipeline with TensorFlow, attaining 92% accuracy across 15 demographics and reducing feature engineering time by 40%."],
    type:'work',
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
    title: "Intern Analyst",
    company_name: "Wells Fargo",
    icon: wellsfargo,
    location:"Hyderabad, India",
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Spearheaded a team of six interns to develop an intelligent search algorithm for a 20x speedup, decreasing search times to under 1 second for 15.8 million documents.",
      "Created a deployment-ready application with 60% higher accuracy, enabling swift loan processing in equipment finance for the USA and Canada regions."
    ],
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
export { services, technologies, projects, ResearchExp, life };
