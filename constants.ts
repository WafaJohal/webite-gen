import { Publication, PublicationType, NewsItem, Project, Course, SocialLink } from './types';

export const SITE_CONFIG = {
  name: "Wafa Johal",
  title: "Dr. Wafa Johal",
  role: "Senior Lecturer",
  affiliation: "University of Melbourne",
  department: "School of Computing & Info Systems",
  shortBio: "HRI • EdTech • Tangible UI",
  fullBio: `I am a Senior Lecturer (Assistant Professor) in Human-Computer Interaction at the University of Melbourne. 
  
  My research focuses on **Social Robotics** and **Human-Robot Interaction (HRI)** within educational and collaborative settings. I explore how embodied agents can act as tutors, peers, or collaborators to facilitate learning and rehabilitation.

  I direct the **Inclusive Technology Lab**, where we design adaptive and tangible robotic systems (like the Cellulo robots) to make technology accessible and trustworthy for diverse user groups, including children and rehabilitation patients.`,
  email: "wafa.johal@unimelb.edu.au",
  location: "Melbourne, Australia",
  googleScholarUrl: "https://scholar.google.com/citations?user=XxXxXxX"
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Google Scholar", url: "https://scholar.google.com/citations?user=XxXxXxX", iconName: "GraduationCap" },
  { platform: "Twitter", url: "https://twitter.com/wafajohal", iconName: "Twitter" },
  { platform: "GitHub", url: "https://github.com/WafaJohal", iconName: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/wafajohal", iconName: "Linkedin" }
];

export const RESEARCH_AREAS = [
  {
    id: "ra1",
    title: "Social Robotics for Learning",
    description: "Investigating how social robots can support learning through tutoring, peer-learning, and teaching-by-learning paradigms.",
    icon: "Bot"
  },
  {
    id: "ra2",
    title: "Tangible Interfaces",
    description: "Designing haptic and tangible user interfaces (like swarm robots) to physically represent abstract concepts in classrooms.",
    icon: "BoxSelect"
  },
  {
    id: "ra3",
    title: "Inclusion & Trust",
    description: "Developing adaptive systems that build trust and are accessible to diverse populations, including rehabilitation contexts.",
    icon: "HeartHandshake"
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "n1",
    date: "Mar 2024",
    title: "Best Paper Award at HRI 2024",
    description: "Honored to receive the Best Paper Award for our work on inclusive robotic tutors.",
    link: "#"
  },
  {
    id: "n2",
    date: "Feb 2024",
    title: "Grant Success",
    description: "Secured ARC Discovery Grant for 'Trust in Educational Robots'.",
  },
  {
    id: "n3",
    date: "Nov 2023",
    title: "Keynote at OzCHI",
    description: "Discussed 'The Tangible Future of Classroom Robotics' in Sydney.",
  },
  {
    id: "n4",
    date: "Sep 2023",
    title: "New PhD Students",
    description: "Welcoming 2 new PhD candidates to the Inclusive Tech Lab.",
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "Research trends in social robots for learning: A review",
    authors: ["T. Belpaeme", "J. Kennedy", "A. Ramachandran", "B. Scassellati", "F. Tanaka"],
    venue: "Science Robotics",
    year: 2018,
    type: PublicationType.JOURNAL,
    doi: "10.1126/scirobotics.aat5954",
    tags: ["HRI", "Review"],
    abstract: "Social robots are proving to be effective tutors and peer learners. This review summarizes the current state of the field, highlighting key trends in embodiment, personalization, and long-term interaction."
  },
  {
    id: "p2",
    title: "Robots for learning: A review of the field",
    authors: ["W. Johal", "P. Dillenbourg"],
    venue: "International Conference on Human-Robot Interaction (HRI)",
    year: 2020,
    type: PublicationType.CONFERENCE,
    tags: ["Education", "Survey"],
    abstract: "A comprehensive survey of the Robots for Learning (R4L) field, categorizing systems by their social role: tutor, peer, or tutee."
  },
  {
    id: "p3",
    title: "Child-robot interaction for handwriting learning",
    authors: ["T. Gargot", "W. Johal", "V. Zufferey", "S. Puranik", "P. Dillenbourg"],
    venue: "ICRA",
    year: 2021,
    type: PublicationType.CONFERENCE,
    tags: ["Co-writer", "Handwriting"],
    abstract: "We present a longitudinal study where children teach a humanoid robot how to write, observing significant improvements in the children's own handwriting quality and motivation."
  },
  {
    id: "p4",
    title: "Co-writing Robot: Learning by teaching a robot how to write",
    authors: ["S. Lemaignan", "W. Johal", "P. Dillenbourg"],
    venue: "HRI",
    year: 2016,
    type: PublicationType.CONFERENCE,
    tags: ["Learning by Teaching"],
    abstract: "Introducing the Co-Writer system, which leverages the Protégé Effect to help children with handwriting difficulties."
  },
  {
    id: "p5",
    title: "Tangible swarm robots for education: The Cellulo platform",
    authors: ["W. Johal", "A. Ozgur", "F. Mondada", "P. Dillenbourg"],
    venue: "TEI",
    year: 2017,
    type: PublicationType.CONFERENCE,
    tags: ["Swarm", "Tangible"],
    abstract: "Cellulo is a novel tangible interface featuring small, swarm-capable robots that operate on printed paper, bridging the physical and digital learning worlds."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "pr1",
    title: "Co-Writer",
    description: "Investigating the 'Learning by Teaching' paradigm where children help a robot improve its handwriting. The robot acts as a peer causing a 'protégé effect', motivating the child to practice more.",
    imageUrl: "https://picsum.photos/seed/cowriter/600/400",
    tags: ["EdTech", "HRI", "Learning by Teaching"],
    active: true
  },
  {
    id: "pr2",
    title: "Cellulo Swarm",
    description: "Development of haptic-enabled tangible swarm robots for classroom education. These robots can represent atoms, stars, or characters, making abstract concepts physical and interactive.",
    imageUrl: "https://picsum.photos/seed/cellulo/600/400",
    tags: ["Swarm UI", "Tangible Interaction"],
    active: true
  },
  {
    id: "pr3",
    title: "Trust in AI Teammates",
    description: "Analyzing behavioral cues that influence human trust in automated decision-support systems. We use physiological sensing to measure trust in real-time.",
    imageUrl: "https://picsum.photos/seed/trustai/600/400",
    tags: ["Psychology", "Trust", "XAI"],
    active: true
  }
];

export const TEACHING: Course[] = [
  {
    id: "c1",
    code: "COMP90000",
    title: "Human-Computer Interaction",
    role: "Coordinator",
    period: "2022 - Present",
    institution: "University of Melbourne"
  },
  {
    id: "c2",
    code: "COMP30000",
    title: "Social Robotics",
    role: "Lecturer",
    period: "2023",
    institution: "University of Melbourne"
  },
  {
    id: "c3",
    code: "DESN2000",
    title: "Design Thinking",
    role: "Lecturer",
    period: "2019 - 2021",
    institution: "UNSW Sydney"
  }
];