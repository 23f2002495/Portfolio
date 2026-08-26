// projectsData.js

export const aiProjects = [
  {
    id: 1,
    title: "Structura AI",
    subtitle: "Machine Learning and Predictive Analytics",
    description:
      "A machine learning system that predicts construction project risks using historical engineering data. Built to assist in early-stage decision making through predictive analytics.",

    tech: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],

    github: "#",
    demo: "#",

    image: "/photos/risk-analysis.png",

    featured: true,

    status: {
    text: "Completed",
    type: "completed",
},
  },

  {
    id: 2,
    title: "MCQ Solver AI",
    subtitle: "Deep Learning and BERT",

    description:
      "An AI-powered assistant capable of solving multiple choice questions from images using OCR, retrieval, and large language models. Designed to provide explanations instead of only answers.",

    tech: [
      "Python",
      "PyTorch",
      "OpenCV",
      "OCR",
      "LLMs",
    ],

    github: "#",
    demo: "#",

    image: "/photos/mcq-solver.png",

    featured: true,

    status: {
    text: "Coming Sept 2026",
    type: "progress",
},
  },
];

export const webProjects = [
  {
    id: 3,

    title: "Park Prime",

    subtitle: "Parking Management System",

    description:
      "A parking management system featuring user authentication, booking, real-time spot availability, and an administrator dashboard for parking lot management.",

    tech: [
      "Flask",
      "SQLite",
      "Bootstrap",
      "Jinja2",
      "SQLAlchemy",
    ],

    github: "#",
    demo: "#",

    image: "/photos/parking.png",

    featured: false,

    status: {
    text: "Completed",
    type: "completed",
},
  },

  {
    id: 4,

    title: "Blogify",

    subtitle: "Express.js Application",

    description:
      "A full-stack blogging application with user authentication, post creation, profile management, and responsive UI built using the Express ecosystem.",

    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Bootstrap",
    ],

    github: "#",
    demo: "#",

    image: "/photos/blog.png",

    featured: false,

    status: {
    text: "Completed",
    type: "completed",
},
  },
];

export const analyticsProjects = [
  {
    id: 5,

    title: "Exploratory Data Analysis",

    image: "/photos/notebooks.png",

    description:
      "Data cleaning, visualization and statistical exploration on structured datasets.",

    tech: ["Pandas", "Matplotlib"],

    notebook: "#",
  },

  {
    id: 6,

    title: "Neural Network Assignment",

    image: "/photos/notebooks.png",

    description:
      "Image classification experiments using PyTorch and fully connected neural networks.",

    tech: ["PyTorch"],

    notebook: "#",
  },

  {
    id: 7,

    title: "Machine Learning Notebook",

    image: "/photos/notebooks.png",

    description:
      "Regression and classification models developed during coursework.",

    tech: ["Scikit-Learn"],

    notebook: "#",
  },

  {
    id: 8,

    title: "Feature Engineering",

    image: "/photos/notebooks.png",

    description:
      "Feature preprocessing, encoding and model evaluation experiments.",

    tech: ["Python"],

    notebook: "#",
  },

  {
    id: 9,

    title: "Data Visualization",

    image: "/photos/notebooks.png",

    description:
      "Interactive plots and insight generation from real-world datasets.",

    tech: ["Matplotlib"],

    notebook: "#",
  },

  {
    id: 10,

    title: "Predictive Analytics",

    image: "/photos/notebooks.png",

    description:
      "End-to-end ML workflow from preprocessing to evaluation.",

    tech: ["Python"],

    notebook: "#",
  },
];