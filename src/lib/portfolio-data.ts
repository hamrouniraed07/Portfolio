export type Lang = "en" | "fr" | "ar";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "ar", label: "AR", flag: "🇹🇳" },
];

type Dict = Record<string, string | string[]>;

export const T: Record<Lang, Dict> = {
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_name: "Raed Mohamed Amine Hamrouni",
    hero_subtitle: "I don't just use AI I engineer it into production.",
    hero_location: "Sousse, Tunisia",
    hero_cv: "Download CV",
    hero_connect: "Let's Connect",
    roles: ["AI Engineer", "LLM Builder", "Fullstack Engineer", "MLOps Practitioner"],
    about_title: "About",
    about_eyebrow: "Who I am",
    about_body:
      "AI & Fullstack Engineer obsessed with shipping intelligent systems end-to-end, from raw data to production-grade LLM agents. I design pipelines, fine-tune models, deploy them with MLOps discipline, and wrap them in clean APIs and interfaces. My work blends rigorous data science, modern backend architecture, and a deep love for product craft.",
    edu_title: "Education",
    edu1_school: "Polytechnic School of Sousse",
    edu1_deg: "Engineering Degree in AI & Data Science",
    edu2_school: "ISITCOM",
    edu2_deg: "Master's in Web Services & Multimedia",
    pipeline_title: "How I work",
    exp_title: "Experience",
    exp_eyebrow: "Selected work",
    proj_title: "Projects",
    proj_eyebrow: "Things I've built",
    proj_view: "View details",
    skills_title: "Skills",
    skills_eyebrow: "My toolkit",
    contact_title: "Let's build something",
    contact_tagline:
      "Open to Fullstack or AI engineering roles, LLM/agentic projects, and MLOps consulting.",
    contact_email_label: "Email me",
    chat_title: "Ask about Raed",
    chat_placeholder: "Ask about projects, skills, experience…",
    chat_send: "Send",
    chat_welcome:
      "Hi! I'm Raed's portfolio assistant. Ask me about his projects, skills, or experience.",
    footer: "Designed & engineered by Raed Hamrouni",
  },
  fr: {
    nav_about: "À propos",
    nav_experience: "Expérience",
    nav_projects: "Projets",
    nav_skills: "Compétences",
    nav_contact: "Contact",
    hero_name: "Raed Hamrouni",
    hero_subtitle: "Je n'utilise pas l'IA — je l'ingénie pour la production.",
    hero_location: "Sousse, Tunisie",
    hero_cv: "Télécharger CV",
    hero_connect: "Me contacter",
    roles: ["Ingénieur IA", "Bâtisseur de LLM", "Ingénieur Fullstack", "Praticien MLOps"],
    about_title: "À propos",
    about_eyebrow: "Qui je suis",
    about_body:
      "Ingénieur IA & Fullstack passionné par la livraison de systèmes intelligents de bout en bout, des données brutes aux agents LLM en production. Je conçois des pipelines, fine-tune des modèles, les déploie avec rigueur MLOps, et les enveloppe dans des APIs et interfaces soignées.",
    edu_title: "Formation",
    edu1_school: "École Polytechnique de Sousse",
    edu1_deg: "Diplôme d'ingénieur en IA & Data Science",
    edu2_school: "ISITCOM",
    edu2_deg: "Master en Services Web & Multimédia",
    pipeline_title: "Ma méthode",
    exp_title: "Expérience",
    exp_eyebrow: "Travaux sélectionnés",
    proj_title: "Projets",
    proj_eyebrow: "Ce que j'ai construit",
    proj_view: "Voir les détails",
    skills_title: "Compétences",
    skills_eyebrow: "Ma boîte à outils",
    contact_title: "Construisons ensemble",
    contact_tagline: "Ouvert aux postes en IA, projets LLM/agentiques, et conseil MLOps.",
    contact_email_label: "Envoyez-moi un email",
    chat_title: "Posez une question",
    chat_placeholder: "Projets, compétences, expérience…",
    chat_send: "Envoyer",
    chat_welcome: "Salut ! Je suis l'assistant du portfolio de Raed. Posez-moi vos questions.",
    footer: "Conçu & développé par Raed Hamrouni",
  },
  ar: {
    nav_about: "نبذة",
    nav_experience: "الخبرة",
    nav_projects: "المشاريع",
    nav_skills: "المهارات",
    nav_contact: "تواصل",
    hero_name: "رائد الحمروني",
    hero_subtitle: "لا أستخدم الذكاء الاصطناعي فحسب — بل أهندسه ليصل إلى الإنتاج.",
    hero_location: "سوسة، تونس",
    hero_cv: "تحميل السيرة",
    hero_connect: "تواصل معي",
    roles: ["مهندس ذكاء اصطناعي", "باني نماذج LLM", "مهندس Fullstack", "ممارس MLOps"],
    about_title: "نبذة",
    about_eyebrow: "من أنا",
    about_body:
      "مهندس ذكاء اصطناعي وفول ستاك شغوف بإطلاق أنظمة ذكية متكاملة — من البيانات الخام إلى وكلاء LLM في الإنتاج. أصمّم الـ pipelines، أُحسّن النماذج، وأنشرها بمنهجية MLOps، ثم أُغلّفها بواجهات وAPIs أنيقة.",
    edu_title: "التعليم",
    edu1_school: "المدرسة العليا متعددة التقنيات بسوسة",
    edu1_deg: "دبلوم مهندس — ذكاء اصطناعي وعلوم البيانات",
    edu2_school: "ISITCOM",
    edu2_deg: "ماجستير — خدمات الويب والوسائط المتعددة",
    pipeline_title: "أسلوبي",
    exp_title: "الخبرة",
    exp_eyebrow: "أعمال مختارة",
    proj_title: "المشاريع",
    proj_eyebrow: "ما بنيته",
    proj_view: "عرض التفاصيل",
    skills_title: "المهارات",
    skills_eyebrow: "أدواتي",
    contact_title: "لنبنِ شيئًا معًا",
    contact_tagline: "متاح لوظائف هندسة الذكاء الاصطناعي ومشاريع LLM واستشارات MLOps.",
    contact_email_label: "راسلني",
    chat_title: "اسأل عن رائد",
    chat_placeholder: "مشاريع، مهارات، خبرة…",
    chat_send: "إرسال",
    chat_welcome: "مرحبًا! أنا مساعد بورتفوليو رائد. اسألني عن مشاريعه ومهاراته.",
    footer: "تصميم وهندسة رائد الحمروني",
  },
};

export const EXPERIENCES = [
  {
    company: "ClassQuiz",
    role: {
      en: "AI Software Engineer Intern",
      fr: "Stagiaire Ingénieur IA",
      ar: "متدرب مهندس ذكاء اصطناعي",
    },
    period: "Jan – Jun 2026",
    desc: {
      en: "Built end-to-end AI exam-correction pipeline: Arabic OCR with Gemini 2.5 Flash, automated grading with Llama 3.2, and full deployment with FastAPI + Docker.",
      fr: "Pipeline IA complet de correction d'examens : OCR arabe avec Gemini 2.5 Flash, notation automatisée Llama 3.2, déploiement FastAPI + Docker.",
      ar: "بناء خط أنابيب IA متكامل لتصحيح الامتحانات: OCR عربي بـ Gemini 2.5 Flash، تقييم آلي بـ Llama 3.2، نشر بـ FastAPI و Docker.",
    },
    tags: ["Gemini", "Llama 3.2", "FastAPI", "Docker"],
  },

  {
    company: "ARSII",
    role: {
      en: "Data Science Intern",
      fr: "Stagiaire Data Science",
      ar: "متدرب علم البيانات",
    },
    period: "Jul – Sept 2025",
    desc: {
      en: "Designed a postoperative complication prediction model — feature engineering on hospital data, hyperparameter tuning, and clinical-ready evaluation.",
      fr: "Modèle de prédiction des complications postopératoires — feature engineering, tuning, évaluation clinique.",
      ar: "نموذج للتنبؤ بمضاعفات ما بعد العمليات — هندسة الميزات وضبط النموذج وتقييم سريري.",
    },
    tags: ["Scikit-learn", "Pandas", "Optuna"],
  },

  {
    company: "VIVIA",
    role: {
      en: "Software Developer Intern",
      fr: "Stagiaire Développeur",
      ar: "متدرب مطور برمجيات",
    },
    period: "Jan – Jun 2023",
    desc: {
      en: "Developed a CRM complaint management module — full-stack feature work, REST integration, and UX improvements for client agents.",
      fr: "Module CRM de gestion des réclamations — développement full-stack, intégration REST, améliorations UX.",
      ar: "وحدة CRM لإدارة الشكاوى — تطوير كامل وتكامل REST وتحسينات UX.",
    },
    tags: ["React", "Node.js", "REST"],
  },

  // ✅ NEW EXPERIENCE 1
  {
    company: "SASTEC-SKILLS",
    role: {
      en: "Software Developer Intern",
      fr: "Stagiaire Développeur Logiciel",
      ar: "متدرب مطور برمجيات",
    },
    period: "Jul – Aug 2022",
    desc: {
      en: "Developed an online art gallery web application allowing users to sell their artwork.",
      fr: "Développement d’une application web de galerie d’art en ligne permettant aux utilisateurs de vendre leurs œuvres.",
      ar: "تطوير تطبيق ويب لمعرض فني عبر الإنترنت يتيح للمستخدمين بيع أعمالهم الفنية.",
    },
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
  },

  // ✅ NEW EXPERIENCE 2
  {
    company: "TUS",
    role: {
      en: "Software Developer Intern",
      fr: "Stagiaire Développeur Logiciel",
      ar: "متدرب مطور برمجيات",
    },
    period: "Aug – Sept 2021",
    desc: {
      en: "Developed a 'Wheel of Fortune' game allowing customers to win gifts.",
      fr: "Développement d’un jeu (Roue de chance) permettant aux clients de gagner des cadeaux.",
      ar: "تطوير لعبة 'عجلة الحظ' تتيح للعملاء ربح هدايا.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
export const PROJECTS = [
  {
    title: "The Jungle Gym Platform",
    blurb: {
      en: "Modern gym booking platform with multi-location support, real-time class reservations, and seamless user experience.",
      fr: "Plateforme moderne de réservation de salle de sport avec support multi-sites et réservation en temps réel.",
      ar: "منصة حديثة لحجز الصالات الرياضية مع دعم مواقع متعددة وحجز فوري.",
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Docker"],
    accent: "from-lime-400 to-emerald-500",
    github: "https://github.com/hamrouniraed07/The_Jungle_front",
    demo: "https://the-jungle-front.vercel.app",
  },
  {
    title: "RAG Medical System",
    blurb: {
      en: "Local AI pipeline for clinical Q&A — fully on-prem.",
      fr: "Pipeline IA local pour Q&R cliniques — 100% on-prem.",
      ar: "نظام IA محلي للاستفسارات الطبية.",
    },
    tags: ["FAISS", "HuggingFace", "Ollama", "Streamlit"],
    accent: "from-emerald-400 to-cyan-300",
    github: "https://github.com/hamrouniraed07/Pediatric_Circumnision_RAG",
  },
  {
    title: "Fraud Detection MLOps",
    blurb: {
      en: "99.9% precision, AUC-ROC 97.8%, full observability stack.",
      fr: "Précision 99,9%, AUC-ROC 97,8%, stack d'observabilité.",
      ar: "دقة 99.9% مع منظومة مراقبة كاملة.",
    },
    tags: ["ZenML", "MLflow", "Prometheus", "Grafana", "Optuna", "CI/CD", "Machine Learning"],
    accent: "from-fuchsia-400 to-violet-400",
    github: "https://github.com/hamrouniraed07/Fraud-detection",
  },
  {
    title: "FitBox AI Coach",
    blurb: {
      en: "Llama 3.2 fine-tuned with LoRA for personalized coaching.",
      fr: "Llama 3.2 fine-tuné avec LoRA pour coaching personnalisé.",
      ar: "تدريب Llama 3.2 بـ LoRA لتدريب شخصي.",
    },
    tags: ["Llama 3.2", "LoRA", "PyTorch", "FastAPI"],
    accent: "from-orange-400 to-pink-400",
    github: "https://github.com/hamrouniraed07/Fitbox",
    demo: "http://148.113.42.38:8501",
  },
  {
    title: "FoodOrder Platform",
    blurb: {
      en: "MERN + Ollama AI recommendations, UberEats-inspired UX.",
      fr: "MERN + recommandations IA Ollama, UX inspirée UberEats.",
      ar: "منصة MERN مع توصيات Ollama، تجربة شبيهة بـ UberEats.",
    },
    tags: ["MongoDB", "Express", "React", "Node.js", "Ollama"],
    accent: "from-yellow-300 to-orange-400",
    github: "https://github.com/hamrouniraed07/FoodOrder",
  },
  {
    title: "Biological Age Estimation",
    blurb: {
      en: "Regression model from dermatological imaging data.",
      fr: "Modèle de régression sur images dermatologiques.",
      ar: "نموذج انحدار على صور جلدية.",
    },
    tags: ["TensorFlow", "Keras", "CNN", "Pandas"],
    accent: "from-cyan-300 to-blue-400",
    github: "https://github.com/hamrouniraed07/ML_Project",
  },

  // ✅ NEW PROJECT 1
  {
    title: "StudyPal",
    blurb: {
      en: "Gamified learning platform with local AI adapting to each user’s level — question generation, smart feedback, and progression system.",
      fr: "Plateforme d’apprentissage gamifiée avec IA locale s’adaptant au niveau de chaque utilisateur — génération de questions, feedback intelligent et progression.",
      ar: "منصة تعلم تفاعلية مدعومة بـ IA محلية تتكيف مع مستوى المستخدم — توليد أسئلة وتقييم ذكي ونظام تقدم.",
    },
    tags: ["Python", "FastAPI", "SQLite", "React", "JavaScript", "Ollama", "Llama 3.2"],
    accent: "from-indigo-400 to-purple-400",
    github: "https://github.com/hamrouniraed07/Study_Quiz",
  },

  // ✅ NEW PROJECT 2
  {
    title: "Hotel Microservices System",
    blurb: {
      en: "Hotel booking platform built on microservices architecture with gRPC, GraphQL, REST, and Kafka for scalable communication.",
      fr: "Plateforme de réservation d’hôtel basée sur une architecture microservices avec gRPC, GraphQL, REST et Kafka.",
      ar: "نظام حجز فنادق مبني على معمارية Microservices باستخدام gRPC و GraphQL و Kafka.",
    },
    tags: ["Node.js", "Express", "Apollo Server", "gRPC", "Kafka", "Docker", "OpenRouter"],
    accent: "from-sky-400 to-blue-500",
    github: "https://github.com/hamrouniraed07/Hotel_microservices",
  },
  {
    title: "Circumcision Data Analysis",
    blurb: {
      en: "End-to-end statistical analysis of clinical circumcision data using R & Quarto, with interactive reports, Jupyter notebooks, and RevealJS presentation.",
      fr: "Analyse statistique complète de données cliniques de circoncision avec R & Quarto, incluant rapport interactif, notebook et présentation RevealJS.",
      ar: "تحليل إحصائي متكامل لبيانات طبية باستخدام R وQuarto مع تقارير تفاعلية وعروض تقديمية.",
    },
    tags: [
      "R",
      "Quarto",
      "Jupyter",
      "ggplot2",
      "dplyr",
      "Data Analysis",
      "Visualization",
      "RevealJS",
      "Bootstrap",
    ],
    accent: "from-rose-400 to-pink-500",
    github: "https://github.com/hamrouniraed07/R_Presentation",
    demo: "https://r-presentation.vercel.app",
  },
];

export const SKILLS = [
  {
    group: "AI / LLM",
    items: [
      "Gemini",
      "Llama",
      "Claude",
      "Ollama",
      "HuggingFace",
      "LangChain",
      "LangGraph",
      "RAG",
      "LoRA",
    ],
  },
  {
    group: "MLOps",
    items: [
      "ZenML",
      "MLflow",
      "Optuna",
      "Prometheus",
      "Grafana",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
    ],
  },
  { group: "Backend", items: ["FastAPI", "Node.js", "Express", "gRPC", "GraphQL", "Kafka"] },
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind", "Redux", "Zustand"] },
  { group: "Data", items: ["Python", "Pandas", "NumPy", "TensorFlow", "PyTorch", "Scikit-learn"] },
];

export const PIPELINE = ["Problem", "Data", "Model", "API", "Agent", "Monitor", "Impact"];

export const FULLSTACK_PIPELINE = [
  "Design",
  "Backend",
  "Database",
  "API",
  "Frontend",
  "Deploy",
  "Scale",
];

// Static chatbot knowledge — keyword-based responses
export function chatbotReply(question: string, lang: Lang): string {
  const q = question.toLowerCase();
  const k = (...words: string[]) => words.some((w) => q.includes(w));
  const R = {
    en: {
      projects:
        "Raed has built 9 standout projects: The Jungle (modern gym booking platform), StudyPal (gamified AI learning system), a Hotel Microservices System (gRPC, Kafka, GraphQL), ClassQuiz (AI exam correction), a local RAG Medical System, an MLOps Fraud Detection stack (99.9% precision), FitBox AI Coach (LoRA fine-tuned Llama), a MERN FoodOrder platform with Ollama recommendations, a Biological Age estimator, and an interactive Circumcision Data Analysis platform built with R & Quarto.",

      skills:
        "He's strong in AI/LLM (Gemini, Llama, Claude, LangChain, LangGraph, RAG, LoRA), MLOps (ZenML, MLflow, Prometheus, Docker, Kubernetes), backend (FastAPI, Node.js, gRPC, Kafka, GraphQL), frontend (React, TypeScript, Tailwind, Framer Motion), and data science (TensorFlow, PyTorch, Scikit-learn).",

      experience:
        "3 internships: ClassQuiz (AI Engineer, 2026), ARSII (Data Science, 2025 — postoperative complication prediction), and VIVIA (Software Developer, 2023 — CRM module).",

      education:
        "Engineering degree in AI & Data Science from the Polytechnic School of Sousse, plus a Master's in Web Services & Multimedia from ISITCOM.",

      contact:
        "Reach him at Hamrouniraed50@gmail.com, or via LinkedIn / GitHub linked at the bottom of the page.",

      who: "Raed is an AI & Fullstack Engineer from Sousse, Tunisia. He builds and ships intelligent systems end-to-end — from scalable backend architectures to production-ready LLM agents.",

      mlops:
        "On the MLOps side, he has worked with ZenML, MLflow, Optuna, Docker, Kubernetes, Prometheus & Grafana — notably building a fraud detection system reaching 99.9% precision and 97.8% AUC-ROC with full observability.",

      llm: "For LLMs, he has used Gemini 2.5 Flash for Arabic OCR, Llama 3.2 for grading and fine-tuning (LoRA), built adaptive AI systems like StudyPal, and deployed RAG pipelines using FAISS + Ollama.",

      default:
        "Try asking about his projects, skills, experience, education, or how to contact him.",
    },

    fr: {
      projects:
        "Raed a réalisé 9 projets majeurs : The Jungle (plateforme de réservation), StudyPal (apprentissage IA gamifié), un système hôtelier en microservices, ClassQuiz (correction IA), un RAG médical, un système MLOps de fraude (99,9%), FitBox AI Coach, FoodOrder (MERN + IA), un estimateur d’âge biologique, et une plateforme d’analyse statistique interactive en R & Quarto.",

      skills:
        "Solide en IA/LLM (Gemini, Llama, LangChain, RAG, LoRA), MLOps (ZenML, MLflow, Docker, Kubernetes), backend (FastAPI, Node.js, gRPC, Kafka, GraphQL), frontend (React, TypeScript, Tailwind, Framer Motion) et data science.",

      experience:
        "3 stages : ClassQuiz (Ingénieur IA, 2026), ARSII (Data Science, 2025 — prédiction des complications postopératoires), VIVIA (Développement logiciel, 2023 — module CRM).",

      education:
        "Diplôme d’ingénieur en IA & Data Science (École Polytechnique de Sousse) et Master en Services Web & Multimédia (ISITCOM).",

      contact: "Email : Hamrouniraed50@gmail.com — LinkedIn et GitHub disponibles en bas de page.",

      who: "Raed est un ingénieur IA & Fullstack basé à Sousse, Tunisie. Il conçoit et déploie des systèmes intelligents de bout en bout.",

      mlops:
        "Expérience avec ZenML, MLflow, Optuna, Docker, Kubernetes, Prometheus & Grafana — notamment un système de détection de fraude avec 99,9% de précision.",

      llm: "Utilisation de Gemini 2.5 Flash, Llama 3.2 (fine-tuning LoRA), systèmes adaptatifs comme StudyPal, et pipelines RAG avec FAISS + Ollama.",

      default: "Posez une question sur ses projets, compétences, expérience, formation ou contact.",
    },

    ar: {
      projects:
        "قام رائد بإنجاز 9 مشاريع مميزة: The Jungle، StudyPal، نظام فنادق Microservices، ClassQuiz، نظام RAG طبي، نظام كشف احتيال MLOps (دقة 99.9%)، FitBox AI Coach، FoodOrder، تقدير العمر البيولوجي، بالإضافة إلى منصة تحليل بيانات طبية باستخدام R وQuarto.",
      skills:
        "خبرة قوية في LLM وMLOps وBackend (FastAPI وNode.js وgRPC وKafka) وFrontend (React وTypeScript وTailwind) وعلم البيانات.",

      experience:
        "3 تربصات: ClassQuiz (مهندس ذكاء اصطناعي 2026)، ARSII (علم البيانات 2025)، VIVIA (تطوير برمجيات 2023).",

      education:
        "مهندس في الذكاء الاصطناعي وعلوم البيانات من المدرسة العليا بسوسة، وماجستير في خدمات الويب والوسائط المتعددة من ISITCOM.",

      contact: "البريد: Hamrouniraed50@gmail.com — وروابط LinkedIn و GitHub في الأسفل.",

      who: "رائد مهندس ذكاء اصطناعي وFullstack من سوسة، تونس، يقوم ببناء أنظمة ذكية متكاملة من البداية للنشر.",

      mlops:
        "عمل على ZenML وMLflow وDocker وKubernetes — نظام كشف احتيال بدقة 99.9% مع مراقبة كاملة.",

      llm: "استخدم Gemini وLlama 3.2 مع LoRA، وبنى أنظمة RAG باستخدام FAISS وOllama بالإضافة إلى StudyPal.",

      default: "اسأل عن المشاريع أو المهارات أو الخبرة أو التعليم أو كيفية التواصل.",
    },
  } as const;
  const r = R[lang];
  if (k("project", "projet", "مشاريع", "مشروع")) return r.projects;
  if (k("skill", "stack", "tech", "compétence", "مهار")) return r.skills;
  if (k("experience", "intern", "stage", "خبرة", "تدريب", "تربص")) return r.experience;
  if (k("education", "school", "study", "formation", "université", "تعليم", "دراس"))
    return r.education;
  if (k("contact", "email", "mail", "reach", "بريد", "تواصل")) return r.contact;
  if (k("mlops", "deploy", "monitor")) return r.mlops;
  if (k("llm", "gemini", "llama", "rag", "lora", "agent")) return r.llm;
  if (k("who", "about", "raed", "qui", "من")) return r.who;
  return r.default;
}
