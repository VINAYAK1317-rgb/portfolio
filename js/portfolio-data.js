/**
 * PORTFOLIO DATA STORE — VINAYAK SAJEENDRAN
 * 
 * Centralized data source for the entire portfolio website.
 * Update details here to automatically reflect changes across the entire website.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Vinayak Sajeendran",
    shortName: "Vinayak",
    title: "Computer Science & Engineering Student",
    roles: [
      "Computer Science & Engineering Student",
      "Software Developer",
      "IoT & Cybersecurity Enthusiast"
    ],
    fullRole: "Computer Science & Engineering Student | Software Developer | IoT & Cybersecurity Enthusiast",
    email: "vinayaksajeendran@gmail.com",
    phone: "+91-9778004080",
    phoneDisplay: "+91 97780 04080",
    location: "Phagwara, Punjab / Kerala, India",
    university: "Lovely Professional University, Phagwara, Punjab",
    socials: {
      github: {
        username: "VINAYAK1317-rgb",
        url: "https://github.com/VINAYAK1317-rgb",
        label: "GitHub"
      },
      linkedin: {
        username: "vinayaksajeendran",
        url: "https://linkedin.com/in/vinayaksajeendran",
        label: "LinkedIn"
      },
      email: {
        address: "vinayaksajeendran@gmail.com",
        url: "mailto:vinayaksajeendran@gmail.com",
        label: "Email"
      }
    },
    status: {
      isOpenToOpportunities: true,
      label: "Open to Internship Opportunities",
      indicator: "🟢"
    }
  },

  hero: {
    badge: "COMPUTER SCIENCE & ENGINEERING STUDENT",
    greeting: "Hi, I'm Vinayak Sajeendran.",
    headline: {
      prefix: "Building ",
      highlight1: "technology",
      middle: " that solves ",
      highlight2: "real-world problems",
      suffix: " through reliable ",
      highlight3: "software",
      end: "."
    },
    description: "I'm a Computer Science & Engineering student passionate about software development, web technologies, IoT, and cybersecurity. I enjoy turning ideas into practical solutions while continuously learning and improving my technical skills.",
    primaryCta: {
      text: "View My Projects",
      href: "#projects",
      icon: "arrow-right"
    },
    secondaryCta: {
      text: "Let's Connect",
      href: "#contact",
      icon: "message-square"
    }
  },

  about: {
    heading: "A little about me.",
    leadParagraph: "I'm Vinayak Sajeendran, a Computer Science & Engineering student at Lovely Professional University. I'm interested in software development, web technologies, IoT, and cybersecurity.",
    bodyParagraph: "I enjoy understanding how systems work and building solutions that connect software with real-world problems. My approach is centered around critical thinking, problem-solving, teamwork, and continuous learning.",
    cards: [
      {
        id: "problem-solver",
        icon: "cpu",
        title: "Problem Solver",
        description: "I enjoy breaking complex problems into practical solutions.",
        color: "from-cyan-500/20 to-blue-500/10",
        borderColor: "border-cyan-500/30"
      },
      {
        id: "continuous-learner",
        icon: "book-open",
        title: "Continuous Learner",
        description: "I'm constantly exploring new technologies and improving my development skills.",
        color: "from-blue-500/20 to-violet-500/10",
        borderColor: "border-blue-500/30"
      },
      {
        id: "tech-enthusiast",
        icon: "terminal",
        title: "Technology Enthusiast",
        description: "My interests span software development, IoT, web technologies, and cybersecurity.",
        color: "from-violet-500/20 to-cyan-500/10",
        borderColor: "border-violet-500/30"
      }
    ]
  },

  stats: [
    {
      id: "cgpa",
      value: 7.4,
      displayValue: "7.4",
      suffix: "",
      isDecimal: true,
      label: "CGPA",
      subtext: "Lovely Professional University"
    },
    {
      id: "students-trained",
      value: 30,
      displayValue: "30",
      suffix: "+",
      isDecimal: false,
      label: "Students Trained in Cybersecurity",
      subtext: "WNS Cares Foundation Initiative"
    },
    {
      id: "math-olympiad-score",
      value: 98,
      displayValue: "98%",
      suffix: "%",
      isDecimal: false,
      label: "National Mathematics Olympiad Score",
      subtext: "Organized by DMTA"
    },
    {
      id: "math-olympiad-rank",
      value: 2,
      displayValue: "2nd",
      suffix: "nd",
      isDecimal: false,
      label: "National Mathematics Olympiad Position",
      subtext: "National Level Ranking"
    }
  ],

  skills: {
    heading: "Technologies I Work With",
    subheading: "A categorized overview of languages, frameworks, developer tools, and domain interests I actively use and learn.",
    categories: [
      {
        id: "programming",
        name: "Programming",
        icon: "code",
        items: [
          { name: "Java", icon: "coffee", level: "Core", tag: "Object-Oriented" },
          { name: "JavaScript", icon: "file-code", level: "ES6+", tag: "Full-Stack" },
          { name: "C", icon: "terminal", level: "Systems", tag: "Procedural" },
          { name: "C++", icon: "binary", level: "OOP / DSA", tag: "Systems" }
        ]
      },
      {
        id: "web",
        name: "Web Technologies",
        icon: "globe",
        items: [
          { name: "HTML", icon: "layout", level: "Semantic", tag: "Markup" },
          { name: "CSS", icon: "palette", level: "Modern", tag: "Styling" },
          { name: "Node.js", icon: "server", level: "Runtime", tag: "Backend" },
          { name: "Tailwind CSS", icon: "wind", level: "Utility-First", tag: "UI Framework" }
        ]
      },
      {
        id: "tools",
        name: "Databases & Tools",
        icon: "database",
        items: [
          { name: "MySQL", icon: "database", level: "Relational", tag: "RDBMS" },
          { name: "Git", icon: "git-branch", level: "Version Control", tag: "VCS" },
          { name: "GitHub", icon: "github", level: "Collaboration", tag: "CI/CD & Repos" },
          { name: "Figma", icon: "figma", level: "Design", tag: "Prototyping" }
        ]
      },
      {
        id: "interests",
        name: "Core Interests",
        icon: "sparkles",
        items: [
          { name: "IoT", icon: "wifi", level: "Hardware & Edge", tag: "Smart Systems" },
          { name: "Embedded Systems", icon: "cpu", level: "Microcontrollers", tag: "Firmware" },
          { name: "Cybersecurity", icon: "shield-check", level: "Fundamentals", tag: "Security" },
          { name: "Real-Time Monitoring", icon: "activity", level: "Telemetry", tag: "Data Streaming" },
          { name: "Software Development", icon: "layers", level: "Application", tag: "Architecture" }
        ]
      }
    ]
  },

  featuredProject: {
    badge: "FEATURED PROJECT",
    title: "Post Accident Survivor Detection System",
    date: "December 2025 – January 2026",
    role: "IoT & Embedded System Developer",
    tagline: "An automated IoT-based accident detection and survivor identification platform designed to transmit critical telemetry to emergency healthcare centers in real time.",
    
    description: "An IoT-based accident detection and survivor identification system designed to detect victims in accident-prone environments and communicate critical information to nearby hospitals and healthcare centres in real time.",
    
    problem: {
      title: "The Problem",
      text: "Accidents can require immediate medical intervention, but delays in identifying survivors and communicating accident information can increase response time."
    },
    
    solution: {
      title: "The Solution",
      text: "The system uses sensors and embedded technologies to detect accident-related conditions and identify potential survivors, then automatically transmits relevant information to healthcare facilities."
    },
    
    capabilities: [
      {
        title: "Sensor-Based Detection",
        desc: "Continuous physical parameter monitoring using impact, tilt, and acoustic sensors.",
        icon: "radio"
      },
      {
        title: "Survivor Identification",
        desc: "Vital signals and presence verification to distinguish critical survivors immediately.",
        icon: "user-check"
      },
      {
        title: "Real-Time Monitoring",
        desc: "Instantaneous edge processing of accident triggers with continuous telemetry streams.",
        icon: "activity"
      },
      {
        title: "Automated Hospital Alerts",
        desc: "Direct emergency dispatch notifications dispatched to the nearest medical facilities.",
        icon: "bell-ring"
      },
      {
        title: "Reduced Manual Intervention",
        desc: "Zero dependency on bystanders to report accident coordinates and severity.",
        icon: "zap"
      },
      {
        title: "Real-Time Information Transmission",
        desc: "Low-latency data packets containing location, severity, and survivor estimates.",
        icon: "send"
      }
    ],

    tags: ["IoT", "Sensors", "Embedded Systems", "Real-Time Monitoring", "Web Technologies"],
    
    architecture: [
      { step: "01", name: "Sensors", desc: "Impact & motion telemetry capture", icon: "radio" },
      { step: "02", name: "Embedded System", desc: "Edge microcontroller signal processing", icon: "cpu" },
      { step: "03", name: "Data Processing", desc: "Threshold analysis & survivor validation", icon: "binary" },
      { step: "04", name: "Real-Time Monitoring", desc: "Telemetry transmission & live status stream", icon: "activity" },
      { step: "05", name: "Healthcare Centre", desc: "Emergency alert dispatch & hospital dashboard", icon: "hospital" }
    ],

    links: {
      viewCaseStudy: true,
      githubUrl: "https://github.com/VINAYAK1317-rgb", // Editable placeholder link
      demoUrl: null // Set to URL when live demo is available
    },

    modalDetails: {
      overview: "The Post Accident Survivor Detection System is an end-to-end IoT engineering solution engineered to drastically shorten emergency medical response times. When a vehicular or transit collision occurs, critical moments are often lost due to delays in manual reporting. This system bridges that gap by autonomously detecting impact severity, verifying survivor status, and sending instant structured alert packets to regional healthcare centres.",
      
      problemDeepDive: "In emergency trauma medicine, immediate intervention is vital. Delayed accident detection, inaccurate location reporting, and lack of advance information about the number or condition of victims severely hinder emergency medical services. In remote or low-traffic zones, collisions may go unnoticed for prolonged durations.",
      
      solutionArchitecture: "The hardware nodes combine accelerometer/gyroscope sensors, acoustic impact triggers, and microcontrollers. When collision acceleration thresholds are exceeded, the embedded unit reads survivor presence sensors, packages the telemetry payload, and transmits it over communication channels to a centralized monitoring server that notifies hospital emergency departments.",
      
      myContribution: "Designed the system logic, integrated sensor telemetry pipeline, configured microcontroller polling routines, and structured alert notification modules.",
      
      challenges: [
        {
          challenge: "Sensor Calibration & Noise Filtering",
          solution: "Implemented threshold filtering and debounce logic to ensure ordinary vehicle vibrations do not trigger false positive accident alerts."
        },
        {
          challenge: "Reliable Low-Latency Transmission",
          solution: "Structured lightweight serialized telemetry packets to maintain emergency transmission even in bandwidth-constrained network zones."
        }
      ],

      futureImprovements: [
        "Better sensor accuracy and multi-sensor fusion",
        "GPS integration for high-precision geofencing and coordinate tracking",
        "More healthcare integrations and hospital API connectors",
        "Cloud-based monitoring dashboard for emergency service dispatchers",
        "Mobile notifications for emergency contacts and rapid response teams",
        "Improved survivor detection using advanced sensor arrays"
      ]
    }
  },

  achievements: [
    {
      id: "cybersecurity",
      category: "Cybersecurity Experience",
      badge: "🛡️ Certified Training & Community Impact",
      title: "WNS CARE Cyber Security Certificate",
      date: "July 2026",
      organization: "WNS Cares Foundation",
      summary: "Completed cybersecurity training through the WNS Cares Foundation program and contributed to training 30 students on essential cybersecurity concepts and best practices.",
      impact: "30 Students Trained in Cybersecurity",
      topics: [
        "Cyber Hygiene & Safe Web Practices",
        "Phishing & Social Engineering Defense",
        "Password Security & Authentication Standards",
        "Network Fundamentals & Threat Mitigation"
      ],
      terminalSnippet: {
        command: "wns-care --verify-certificate --id WNS-CYBER-2026",
        output: "[STATUS: VALID] Trained 30 students in cybersecurity concepts and security best practices."
      }
    },
    {
      id: "mathematics",
      category: "Analytical & Problem-Solving Excellence",
      badge: "🏆 National-Level Achievement",
      title: "National-Level Mathematics Olympiad",
      date: "National Competition",
      organization: "DMTA",
      summary: "Secured 2nd Position nationwide with a 98% score in the National Mathematics Olympiad organized by DMTA, demonstrating strong quantitative aptitude, mathematical rigor, and analytical problem-solving skills.",
      metrics: [
        { label: "Score", value: "98%" },
        { label: "Position", value: "2nd Position" },
        { label: "Organized by", value: "DMTA" }
      ],
      highlight: "Demonstrates strong foundational algorithmic reasoning and analytical aptitude."
    }
  ],

  howIWork: {
    heading: "How I Work",
    subheading: "Core principles guiding my development process, problem-solving, and team collaborations.",
    principles: [
      {
        title: "Critical Thinking",
        icon: "brain",
        desc: "Analyzing problems carefully before choosing an effective approach."
      },
      {
        title: "Problem-Solving",
        icon: "crosshair",
        desc: "Breaking challenging problems into manageable technical solutions."
      },
      {
        title: "Teamwork",
        icon: "users",
        desc: "Collaborating effectively and learning from different perspectives."
      },
      {
        title: "Continuous Learning",
        icon: "trending-up",
        desc: "Exploring new technologies and continuously improving technical skills."
      }
    ]
  },

  education: {
    heading: "Education Timeline",
    subheading: "Academic journey and milestones in Computer Science & Engineering.",
    timeline: [
      {
        id: "lpu",
        institution: "Lovely Professional University",
        degree: "B.Tech — Computer Science & Engineering",
        period: "Aug 2025 – Present",
        score: "CGPA: 7.4",
        scoreType: "CGPA",
        location: "Phagwara, Punjab",
        isCurrent: true,
        details: "Focusing on software development, data structures, algorithms, IoT architectures, and cybersecurity fundamentals."
      },
      {
        id: "chinmaya-12",
        institution: "Chinmaya Vidyalaya",
        degree: "Intermediate",
        period: "Jun 2023 – Mar 2025",
        score: "85%",
        scoreType: "Percentage",
        location: "Taliparamba, Kannur, Kerala",
        isCurrent: false,
        details: "Core subjects: Mathematics, Physics, Chemistry, Computer Science."
      },
      {
        id: "chinmaya-10",
        institution: "Chinmaya Vidyalaya",
        degree: "Matriculation",
        period: "Jun 2022 – Mar 2023",
        score: "93%",
        scoreType: "Percentage",
        location: "Taliparamba, Kannur, Kerala",
        isCurrent: false,
        details: "Strong academic foundation with distinction in Mathematics and Science."
      }
    ]
  },

  currentLearning: {
    heading: "Currently Exploring",
    subheading: "Actively developing and sharpening skills across these modern technology domains.",
    topics: [
      {
        title: "Full-Stack Web Development",
        desc: "Building responsive, modern user interfaces and structured backend systems.",
        icon: "layers"
      },
      {
        title: "JavaScript & Node.js",
        desc: "Deepening knowledge in asynchronous programming, APIs, and runtime environments.",
        icon: "file-code"
      },
      {
        title: "IoT Systems",
        desc: "Sensor integration, edge microcontroller communication, and telemetry flows.",
        icon: "wifi"
      },
      {
        title: "Cybersecurity Fundamentals",
        desc: "Security best practices, network security, authentication, and vulnerability awareness.",
        icon: "shield"
      },
      {
        title: "Data & Database Technologies",
        desc: "Database design, structured querying, and data relationships with MySQL.",
        icon: "database"
      },
      {
        title: "Software Engineering Practices",
        desc: "Clean code principles, version control workflows, problem-solving, and modular architecture.",
        icon: "git-commit"
      }
    ]
  },

  careerDirection: {
    heading: "What I'm Looking For",
    statement: "I'm looking for opportunities where I can apply my programming and problem-solving skills, contribute to meaningful projects, learn from experienced developers, and grow as a software engineer.",
    primaryCta: {
      text: "Let's Work Together",
      href: "#contact"
    },
    secondaryCta: {
      text: "View My GitHub",
      href: "https://github.com/VINAYAK1317-rgb"
    }
  },

  contact: {
    heading: "Have an idea? Let's build it.",
    subheading: "Whether it's a project, internship opportunity, collaboration, or simply a conversation about technology, I'd love to connect.",
    directChannels: [
      {
        type: "email",
        label: "Email",
        value: "vinayaksajeendran@gmail.com",
        href: "mailto:vinayaksajeendran@gmail.com",
        icon: "mail",
        actionText: "Copy Email",
        canCopy: true
      },
      {
        type: "phone",
        label: "Phone",
        value: "+91-9778004080",
        href: "tel:+919778004080",
        icon: "phone",
        actionText: "Call Now",
        canCopy: true
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        value: "vinayaksajeendran",
        href: "https://linkedin.com/in/vinayaksajeendran",
        icon: "linkedin",
        actionText: "Connect",
        canCopy: false
      },
      {
        type: "github",
        label: "GitHub",
        value: "VINAYAK1317-rgb",
        href: "https://github.com/VINAYAK1317-rgb",
        icon: "github",
        actionText: "Follow",
        canCopy: false
      }
    ]
  },

  footer: {
    brandName: "VINAYAK SAJEENDRAN",
    role: "Computer Science & Engineering Student | Software Developer",
    copyrightYear: 2026,
    copyrightText: "© 2026 Vinayak Sajeendran. Built with curiosity and code."
  }
};

// Freeze data to prevent accidental runtime mutation
if (typeof Object.freeze === 'function') {
  Object.freeze(PORTFOLIO_DATA);
}
