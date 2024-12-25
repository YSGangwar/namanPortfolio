import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { MdEmail , MdOutlinePhoneInTalk} from 'react-icons/md';

export const SKILL_DATA = [
  {
    skill_name: "ANACONDA",
    image: "Anaconda.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AWS",
    image: "aws.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AP",
    image: "ap.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AZURE",
    image: "azure.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "c++.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "DOCKER",
    image: "docker.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "DJ",
    image: "dj.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "FAST API",
    image: "FastAPI.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GC",
    image: "gc.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Github",
    image: "github.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Gmail",
    image: "gmail.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/NamanVSrivastav",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/namanvsrivatav",
  },
  {
    name: "Gmail",
    icon: MdEmail,
    link: "mailto:vsnaman2002@gmail.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "JS",
    image: "js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jupyter",
    image: "jupyter.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kaggle",
    image: "Kaggle.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "MatplotLib",
    image: "Matplotlib.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Numpy",
    image: "numpy.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "OpenCV",
    image: "OpenCV.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pandas",
    image: "pandas.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    image: "Postman.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pytorch",
    image: "pytorch.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Qdrant",
    image: "qdrant.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "R",
    image: "R.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tensorflow",
    image: "tensorflow.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SQL",
    image: "sql.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "VSCode",
    image: "vscode.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Selenium",
    image: "selenium.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "XGboost",
    image: "xgboost.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "AE",
    image: "ae.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "ScikitLearn",
    image: "scikit-learn.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Seaborn",
    image: "seaborn.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Canva",
    image: "Canva.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Huggingface",
    image: "hugging-face.png",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "Opinify",
    description:"Integrated a pre-trained XGBoost model into a Flask API with 89% accuracy and developed a Streamlit frontend for intuitive sentiment analysis, achieving 95% user satisfaction.  Improved data quality through advanced preprocessing and implemented visualizations with Matplotlib, reducing analysis time by 30%.",
    image: "/projects/project-1.png",
    link: "https://github.com/NamanVSrivastav/Opinify",
  },
  {
    title: "V.I.B.E",
    description:
      'Virtual Intelligence for Business Enhancement. Designed advanced LSTM models for stock price prediction, achieving 87% precision and driving a 22% portfolio value growth in six months. Leveraged RNNs for long-term dependency capture, reducing mean squared error by 15% for enhanced real-time market analysis.',
    image: "/projects/project-2.png",
    link: "https://github.com/NamanVSrivastav/V.I.B.E",
  },
  {
    title: "AI Response Evaluator",
    description:
      'Developed an AI-powered WebSocket-based response evaluation system using Sentence-Transformers for semantic similarity scoring, delivering real-time, context-aware feedback (e.g., ”Great answer!” for scores above 0.8) . Strengthened performance by integrating Redis caching to reduce evaluation time by 50% and ensured reliability through unit testing with Pythons UnitTest framework.',
    image: "/projects/project-3.png",
    link: "https://github.com/NamanVSrivastav/AI_Response_Evaluator",
  },
  {
    title: "C.A.R.D.I.A",
    description:
      'Cardiovascular Risk Prediction using Distributed AI. Pioneered a privacy-focused cardiovascular risk prediction framework using FeedForward Neural Networks and Federated Learning, achieving 92% prediction accuracy while ensuring data security through decentralized model training. Enhanced patient outcomes by increasing engagement in cardiovascular health management by 30% through a daily health tracking feature.',
    image: "/projects/project-3.png",
    link: "https://github.com/NamanVSrivastav/C.A.R.D.I.A",
  },
  {
    title:"RAG Based ChatBot",
    description:'Topic-Specific Chatbot with Retrieval-Augmented Generation (RAG).Precision and Contextual Relevance: Combines Biomistral 7B for domain-specific language processing and Qdrant for efficient vector retrieval, ensuring accurate and relevant answers for healthcare and technical queries. Optimized Query Processing: Utilized NeuML/pubmedbert-base-embeddings for semantic understanding and integrated advanced prompt engineering techniques such as few-shot learning and chain-of-thought prompting for nuanced responses.',
    image:"/projects/project-3.png",
    link:'https://github.com/NamanVSrivastav/RAG-Chatbot',
  }
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/NamanVSrivastav",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/namanvsrivatav",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "+91 91561 79516",
        icon: MdOutlinePhoneInTalk,
        link: "",
      },
      {
        name: "vsnaman2002@gmail.com",
        icon: MdEmail,
        link: "",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:vsnaman2002@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

