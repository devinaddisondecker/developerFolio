/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Devin Addison Decker",
  title: "Hi all, I'm Devin Decker",
  subTitle: emoji(
    "A Senior Software Engineer 🚀 specializing in AI-powered applications, Large Language Models (GPT-4o, Claude), RAG systems, and scalable cloud-native platforms using .NET, Python, AWS, Azure, and Kubernetes."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1YmNDEQiX3H-5xtZPLM4EdXi9P97YVSU4MFgW5k9-738/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/devinaddisondecker",
  linkedin: "https://www.linkedin.com/in/devin-decker-5b8396414",
  gmail: "devindecker112399@gmail.com",
  gitlab: "https://gitlab.com/devinaddisondecker",
  facebook: "https://www.facebook.com/devinaddisondecker",
  medium: "https://medium.com/@devindecker112399",
  stackoverflow: "https://stackoverflow.com/users/10422806/devindecker112399",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SENIOR SOFTWARE ENGINEER BUILDING AI SYSTEMS, LLM APPLICATIONS, AND SCALABLE CLOUD PLATFORMS",

  skills: [
    emoji(
      "⚡ Build production-ready AI applications using Large Language Models (GPT-4o, Claude), Retrieval-Augmented Generation (RAG), LangChain, semantic search, and vector databases."
    ),
    emoji(
      "⚡ Design scalable cloud-native backend systems, REST APIs, distributed systems, and microservices using C#, .NET Core, Python, Node.js, AWS, and Azure."
    ),
    emoji(
      "⚡ Architect and deploy secure, reliable cloud infrastructure using Docker, Kubernetes, Terraform, AWS serverless services, Azure, and automated CI/CD pipelines."
    ),
    emoji(
      "⚡ Develop intelligent automation workflows with prompt engineering, LLM evaluation, multi-agent systems, and enterprise AI integrations."
    )
  ],

  /* Make sure to include the correct Font Awesome classname
     https://fontawesome.com/icons */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C# / .NET",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "AI / LLM",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "RAG / LangChain",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Vector Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-code-branch"
    }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeasternLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2014 - May 2018",
      desc: "Completed a Bachelor of Science in Computer Science with a strong focus on software engineering, distributed systems, cloud computing, databases, and algorithms.",
      descBullets: [
        "Studied software engineering, data structures & algorithms, operating systems, databases, and computer networks.",
        "Built full-stack software projects using modern programming languages and software development best practices.",
        "Graduated in 2018."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI / LLM Systems",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend & Distributed Systems",
      progressPercentage: "92%"
    },
    {
      Stack: "Cloud Architecture (AWS / Azure)",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps & Kubernetes",
      progressPercentage: "85%"
    },
    {
      Stack: "Data & Vector Databases",
      progressPercentage: "82%"
    }
  ],

  displayCodersrank: false // Set true to display CodersRank badges
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer (AI Systems)",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "November 2023 – Present",
      desc: "Designing and building enterprise AI applications and cloud-native backend systems focused on automation, scalability, and production reliability.",
      descBullets: [
        "Developed LLM-powered applications using GPT-4o, Claude, LangChain, and Retrieval-Augmented Generation (RAG).",
        "Built scalable backend services with .NET Core, AWS Lambda, API Gateway, and DynamoDB.",
        "Designed AI workflows using AWS Bedrock and vector-based retrieval to improve contextual accuracy.",
        "Implemented CI/CD pipelines with Azure DevOps and GitHub Actions to streamline deployments and improve release reliability."
      ]
    },
    {
      role: "Senior Full Stack Engineer",
      company: "Revscale AI",
      companylogo: require("./assets/images/revscaleLogo.png"),
      date: "August 2021 – October 2023",
      desc: "Led development of enterprise cloud platforms, distributed backend systems, and DevOps automation for scalable business applications.",
      descBullets: [
        "Designed AWS serverless and microservices architectures using Lambda, API Gateway, ECS, and EKS.",
        "Built high-performance full-stack applications supporting enterprise workflow automation.",
        "Automated infrastructure provisioning using Terraform, Docker, Kubernetes (EKS/AKS), and GitHub Actions.",
        "Designed secure hybrid-cloud environments using IAM, KMS, VPC networking, and cloud security best practices."
      ]
    },
    {
      role: "Software Engineer",
      company: "LeverX",
      companylogo: require("./assets/images/leverxLogo.png"),
      date: "May 2018 – July 2021",
      desc: "Developed enterprise software solutions, REST APIs, and Azure cloud infrastructure for large-scale business applications.",
      descBullets: [
        "Built scalable full-stack applications using C#, .NET, JavaScript, SQL, and modern web technologies.",
        "Designed REST APIs and optimized relational and NoSQL database architectures.",
        "Automated Azure infrastructure using ARM Templates and Bicep (Infrastructure as Code).",
        "Managed Azure services including VMs, VNets, Azure AD, Blob Storage, RBAC, and monitoring solutions."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc:
        "Digital recruitment and staffing. We look at people, not paper.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/emiratesDiamonds.webp"),
      projectName: "EmiratesDiamonds",
      projectDesc:
        "This website is operated by Emiratesdiamonds. Throughout the site, the terms “we”, “us” and “our” refer to Emiratesdiamonds. Emiratesdiamonds offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://emiratesdiamonds.com/"
        }
      ]
    },
    {
      image: require("./assets/images/white_turtle_beauty.avif"),
      projectName: "WHITE TURTLE BEAUTY",
      projectDesc: "Botanical Skincare for Stressed Skin – WHITE TURTLE BEAUTY",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://whiteturtlebeauty.com/"
        }
      ]
    },
    {
      image: require("./assets/images/levinfurniture.png"),
      projectName: "LevinFurniture",
      projectDesc:
        "At Levin Furniture & Mattress, we are dedicated to helping you find furniture and mattresses that best fit your style and budget. To do this, we offer high quality living room furniture, bedroom furniture, dining room sets, mattresses, and much more at affordable prices. Stop into any of our Altoona, Canton, Cleveland, Greensburg, Pittsburgh, State College, or Youngstown stores to see our amazing selection and deals.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://levinfurniture.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc:
        "Healthy Work Culture is one of the most important determinants to absenteeism, productivity and employee retention.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/loyolapress.png"),
      projectName: "LOYOLAPRESS",
      projectDesc:
        "Loyola Press was founded in 1912 by Father William P. Lyons SJ as a non-profit Catholic publishing ministry of the Midwest Province of the Society of Jesus. His first published work was Loyola University’s four-page school newspaper, The Maroon and Gold. Soon after, however, Fr. Lyons began publishing college textbooks, and Loyola Press swiftly grew in size and scope, having now served more than 40 million children and adults as they seek to grow academically, personally, and spiritually with assistance and inspiration from our textbooks, spirituality books for adults and children, and a growing array of multi-media resources.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://loyolapress.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/MDDV.png"),
      projectName: "MDDV",
      projectDesc:
        "MDDV replaces fragmented maintenance manuals, wiring diagrams, parts catalogs, and training docs - automatic reporting at the most granular level, using AI Joe, leading to predictive logistics.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mddv.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/green-legal-logo-sm.png"),
      projectName: "Green Legal",
      projectDesc:
        "At Green & Schafle, we work tirelessly every day to make sure our clients’ cases become our causes. Our clients have suffered some of the most tragic and catastrophic outcomes through no fault of their own and it is our job to not only advocate for them to get justice, but to also listen to their hardships and care about them as people so that we can be the best trial lawyers we can for their cases. At Green & Schafle, we advocate for our clients through three core principles:",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://greenlegalteam.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/price-logo-red-mobile.webp"),
      projectName: "Price.com",
      projectDesc:
        "Price.com brings you savings with our comparison shopping tools, coupons, cashback, loyalty points, price alerts and other services. Unlike classic price comparison sites that focus on matching only new products, our technology also enables the matching of new products to, used, refurbished, generic, rental and offline. This enables the comparison options to span hundreds of thousands of merchants to provide full transparency and the most savings to you.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://price.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ocsri.png"),
      projectName: "OKLAHOMA CANCER SPECIALISTS AND REARCH INSTITUTE",
      projectDesc:
        "Oklahoma Cancer Specialists and Research Institute offers the region’s most comprehensive cancer care. As a community-based oncology practice with nearly 400 staff members, including a combined 40 physicians and allied health professionals, we focus on providing high-quality, value-based care for Oklahomans.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ocsri.org/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 917 920 6159",
  email_address: "devindecker112399@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
