import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { r as raedImg } from "./router-C57DchFi.mjs";
import { u as useScroll, a as useSpring, m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { L as Languages, M as MapPin, E as Eye, A as ArrowRight, a as Mail, b as ArrowDown, G as GraduationCap, S as Sparkles, D as Database, B as Brain, P as Plug, c as Bot, d as Activity, e as ExternalLink, X, f as MessageCircle, g as Send } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const cvPdf = "/assets/Cv_Raed_Hamrouni-C7sGoIbY.pdf";
function CursorGlow() {
  const [pos, setPos] = reactExports.useState({ x: -100, y: -100 });
  const [hover, setHover] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const t = e.target;
      setHover(!!t.closest("a, button, [role='button'], input, textarea"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "pointer-events-none fixed z-[100] hidden md:block transition-transform duration-100",
        style: {
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1.6 : 1})`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "size-3 rounded-full bg-cyan",
            style: { boxShadow: "0 0 12px var(--cyan), 0 0 24px var(--electric)" }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "pointer-events-none fixed z-[99] hidden md:block transition-all duration-300 ease-out",
        style: {
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1.4 : 1})`,
          width: 320,
          height: 320,
          background: "radial-gradient(circle, oklch(0.72 0.18 235 / 0.18), transparent 60%)",
          borderRadius: "50%",
          mixBlendMode: "screen"
        }
      }
    )
  ] });
}
function NeuralBackground() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor(w * h / 18e3));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      }));
    };
    resize();
    window.addEventListener("resize", resize);
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140) {
            const alpha = 1 - Math.sqrt(d2) / 140;
            ctx.strokeStyle = `rgba(45, 158, 247, ${alpha * 0.35})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 6);
        grad.addColorStop(0, "rgba(0, 245, 255, 0.9)");
        grad.addColorStop(1, "rgba(0, 245, 255, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref,
      className: "absolute inset-0 size-full",
      style: { maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)" },
      "aria-hidden": true
    }
  );
}
const LANGS = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "ar", label: "AR", flag: "🇹🇳" }
];
const T = {
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_name: "Raed Mohamed Amine Hamrouni",
    hero_subtitle: "I don't just use AI I engineer it into production.",
    hero_location: "Sousse, Tunisia",
    hero_cv: "Resume",
    hero_connect: "Let's Connect",
    roles: ["AI Engineer", "LLM Builder", "Fullstack Engineer", "MLOps Practitioner"],
    about_title: "About",
    about_eyebrow: "Who I am",
    about_body: "AI & Fullstack Engineer obsessed with shipping intelligent systems end-to-end, from raw data to production-grade LLM agents. I design pipelines, fine-tune models, deploy them with MLOps discipline, and wrap them in clean APIs and interfaces. My work blends rigorous data science, modern backend architecture, and a deep love for product craft.",
    edu_title: "Education",
    edu1_school: "Polytechnic School of Sousse",
    edu1_deg: "Engineering Degree in Data Science & Artificial Intelligence",
    edu1_date: "2024 – 2026",
    edu2_school: "ISITCOM – Sousse",
    edu2_deg: "Professional Master's Degree in Web Services and Multimedia",
    edu2_date: "2023 – 2026",
    edu3_school: "ISITCOM – Sousse",
    edu3_deg: "Bachelor's Degree in Computer Science in Computer Science",
    edu3_date: "2020 – 2023",
    pipeline_title: "How I work",
    exp_title: "Experience",
    exp_eyebrow: "Selected work",
    proj_title: "Projects",
    proj_eyebrow: "Things I've built",
    proj_view: "View details",
    skills_title: "Skills",
    skills_eyebrow: "My toolkit",
    contact_title: "Let's build something",
    contact_tagline: "Open to Fullstack or AI engineering roles, LLM/agentic projects, and MLOps consulting.",
    contact_email_label: "Email me",
    chat_title: "Ask about Raed",
    chat_placeholder: "Ask about projects, skills, experience…",
    chat_send: "Send",
    chat_welcome: "Hi! I'm Raed's portfolio assistant. Ask me about his projects, skills, or experience.",
    footer: "Designed & engineered by Raed Hamrouni"
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
    hero_cv: "Consulter CV",
    hero_connect: "Me contacter",
    roles: ["Ingénieur IA", "Bâtisseur de LLM", "Ingénieur Fullstack", "Praticien MLOps"],
    about_title: "À propos",
    about_eyebrow: "Qui je suis",
    about_body: "Ingénieur IA & Fullstack passionné par la livraison de systèmes intelligents de bout en bout, des données brutes aux agents LLM en production. Je conçois des pipelines, fine-tune des modèles, les déploie avec rigueur MLOps, et les enveloppe dans des APIs et interfaces soignées.",
    edu_title: "Formation",
    edu1_school: "École Polytechnique de Sousse",
    edu1_deg: "Diplôme d'ingénieur en Data Science & Intelligence Artificielle",
    edu1_date: "2024 – 2026",
    edu2_school: "ISITCOM – Sousse",
    edu2_deg: "Master Professionnel en Services Web et Multimédia",
    edu2_date: "2023 – 2026",
    edu3_school: "ISITCOM – Sousse",
    edu3_deg: "Licence en Informatique en Sciences de l'informatique",
    edu3_date: "2020 – 2023",
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
    footer: "Conçu & développé par Raed Hamrouni"
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
    hero_cv: "السيرة الذاتية",
    hero_connect: "تواصل معي",
    roles: ["مهندس ذكاء اصطناعي", "باني نماذج LLM", "مهندس Fullstack", "ممارس MLOps"],
    about_title: "نبذة",
    about_eyebrow: "من أنا",
    about_body: "مهندس ذكاء اصطناعي وفول ستاك شغوف بإطلاق أنظمة ذكية متكاملة — من البيانات الخام إلى وكلاء LLM في الإنتاج. أصمّم الـ pipelines، أُحسّن النماذج، وأنشرها بمنهجية MLOps، ثم أُغلّفها بواجهات وAPIs أنيقة.",
    edu_title: "التعليم",
    edu1_school: "المدرسة العليا متعددة التقنيات بسوسة",
    edu1_deg: "دبلوم مهندس — علوم البيانات والذكاء الاصطناعي",
    edu1_date: "2024 – 2026",
    edu2_school: "ISITCOM – سوسة",
    edu2_deg: "ماجستير مهني — خدمات الويب والوسائط المتعددة",
    edu2_date: "2023 – 2026",
    edu3_school: "ISITCOM – سوسة",
    edu3_deg: "إجازة في علوم الحاسوب — علوم الحاسوب والوسائط المتعددة",
    edu3_date: "2020 – 2023",
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
    footer: "تصميم وهندسة رائد الحمروني"
  }
};
const EXPERIENCES = [
  {
    company: "ClassQuiz",
    role: {
      en: "AI Software Engineer Intern",
      fr: "Stagiaire Ingénieur IA",
      ar: "متدرب مهندس ذكاء اصطناعي"
    },
    period: "Jan – Jun 2026",
    desc: {
      en: "Built end-to-end AI exam-correction pipeline: Arabic OCR with Gemini 2.5 Flash, automated grading with Llama 3.2, and full deployment with FastAPI + Docker.",
      fr: "Pipeline IA complet de correction d'examens : OCR arabe avec Gemini 2.5 Flash, notation automatisée Llama 3.2, déploiement FastAPI + Docker.",
      ar: "بناء خط أنابيب IA متكامل لتصحيح الامتحانات: OCR عربي بـ Gemini 2.5 Flash، تقييم آلي بـ Llama 3.2، نشر بـ FastAPI و Docker."
    },
    tags: ["Gemini", "Llama 3.2", "FastAPI", "Docker"]
  },
  {
    company: "ARSII",
    role: {
      en: "Data Science Intern",
      fr: "Stagiaire Data Science",
      ar: "متدرب علم البيانات"
    },
    period: "Jul – Sept 2025",
    desc: {
      en: "Designed a postoperative complication prediction model — feature engineering on hospital data, hyperparameter tuning, and clinical-ready evaluation.",
      fr: "Modèle de prédiction des complications postopératoires — feature engineering, tuning, évaluation clinique.",
      ar: "نموذج للتنبؤ بمضاعفات ما بعد العمليات — هندسة الميزات وضبط النموذج وتقييم سريري."
    },
    tags: ["Scikit-learn", "Pandas", "Optuna"]
  },
  {
    company: "VIVIA",
    role: {
      en: "Software Developer Intern",
      fr: "Stagiaire Développeur",
      ar: "متدرب مطور برمجيات"
    },
    period: "Jan – Jun 2023",
    desc: {
      en: "Developed a CRM complaint management module — full-stack feature work, REST integration, and UX improvements for client agents.",
      fr: "Module CRM de gestion des réclamations — développement full-stack, intégration REST, améliorations UX.",
      ar: "وحدة CRM لإدارة الشكاوى — تطوير كامل وتكامل REST وتحسينات UX."
    },
    tags: ["React", "Node.js", "REST"]
  },
  // ✅ NEW EXPERIENCE 1
  {
    company: "SASTEC-SKILLS",
    role: {
      en: "Software Developer Intern",
      fr: "Stagiaire Développeur Logiciel",
      ar: "متدرب مطور برمجيات"
    },
    period: "Jul – Aug 2022",
    desc: {
      en: "Developed an online art gallery web application allowing users to sell their artwork.",
      fr: "Développement d’une application web de galerie d’art en ligne permettant aux utilisateurs de vendre leurs œuvres.",
      ar: "تطوير تطبيق ويب لمعرض فني عبر الإنترنت يتيح للمستخدمين بيع أعمالهم الفنية."
    },
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"]
  },
  // ✅ NEW EXPERIENCE 2
  {
    company: "TUS",
    role: {
      en: "Software Developer Intern",
      fr: "Stagiaire Développeur Logiciel",
      ar: "متدرب مطور برمجيات"
    },
    period: "Aug – Sept 2021",
    desc: {
      en: "Developed a 'Wheel of Fortune' game allowing customers to win gifts.",
      fr: "Développement d’un jeu (Roue de chance) permettant aux clients de gagner des cadeaux.",
      ar: "تطوير لعبة 'عجلة الحظ' تتيح للعملاء ربح هدايا."
    },
    tags: ["HTML", "CSS", "JavaScript"]
  }
];
const PROJECTS = [
  {
    title: "The Jungle Gym Platform",
    blurb: {
      en: "Modern gym booking platform with multi-location support, real-time class reservations, and seamless user experience.",
      fr: "Plateforme moderne de réservation de salle de sport avec support multi-sites et réservation en temps réel.",
      ar: "منصة حديثة لحجز الصالات الرياضية مع دعم مواقع متعددة وحجز فوري."
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Docker"],
    accent: "from-lime-400 to-emerald-500",
    github: "https://github.com/hamrouniraed07/The_Jungle_front",
    demo: "https://the-jungle-front.vercel.app"
  },
  {
    title: "RAG Medical System",
    blurb: {
      en: "Local AI pipeline for clinical Q&A — fully on-prem.",
      fr: "Pipeline IA local pour Q&R cliniques — 100% on-prem.",
      ar: "نظام IA محلي للاستفسارات الطبية."
    },
    tags: ["FAISS", "HuggingFace", "Ollama", "Streamlit"],
    accent: "from-emerald-400 to-cyan-300",
    github: "https://github.com/hamrouniraed07/Pediatric_Circumnision_RAG"
  },
  {
    title: "Fraud Detection MLOps",
    blurb: {
      en: "99.9% precision, AUC-ROC 97.8%, full observability stack.",
      fr: "Précision 99,9%, AUC-ROC 97,8%, stack d'observabilité.",
      ar: "دقة 99.9% مع منظومة مراقبة كاملة."
    },
    tags: ["ZenML", "MLflow", "Prometheus", "Grafana", "Optuna", "CI/CD", "Machine Learning"],
    accent: "from-fuchsia-400 to-violet-400",
    github: "https://github.com/hamrouniraed07/Fraud-detection"
  },
  {
    title: "FitBox AI Coach",
    blurb: {
      en: "Llama 3.2 fine-tuned with LoRA for personalized coaching.",
      fr: "Llama 3.2 fine-tuné avec LoRA pour coaching personnalisé.",
      ar: "تدريب Llama 3.2 بـ LoRA لتدريب شخصي."
    },
    tags: ["Llama 3.2", "LoRA", "PyTorch", "FastAPI"],
    accent: "from-orange-400 to-pink-400",
    github: "https://github.com/hamrouniraed07/Fitbox",
    demo: "http://148.113.42.38:8501"
  },
  {
    title: "FoodOrder Platform",
    blurb: {
      en: "MERN + Ollama AI recommendations, UberEats-inspired UX.",
      fr: "MERN + recommandations IA Ollama, UX inspirée UberEats.",
      ar: "منصة MERN مع توصيات Ollama، تجربة شبيهة بـ UberEats."
    },
    tags: ["MongoDB", "Express", "React", "Node.js", "Ollama"],
    accent: "from-yellow-300 to-orange-400",
    github: "https://github.com/hamrouniraed07/FoodOrder"
  },
  {
    title: "Biological Age Estimation",
    blurb: {
      en: "Regression model from dermatological imaging data.",
      fr: "Modèle de régression sur images dermatologiques.",
      ar: "نموذج انحدار على صور جلدية."
    },
    tags: ["TensorFlow", "Keras", "CNN", "Pandas"],
    accent: "from-cyan-300 to-blue-400",
    github: "https://github.com/hamrouniraed07/ML_Project"
  },
  // ✅ NEW PROJECT 1
  {
    title: "StudyPal",
    blurb: {
      en: "Gamified learning platform with local AI adapting to each user’s level — question generation, smart feedback, and progression system.",
      fr: "Plateforme d’apprentissage gamifiée avec IA locale s’adaptant au niveau de chaque utilisateur — génération de questions, feedback intelligent et progression.",
      ar: "منصة تعلم تفاعلية مدعومة بـ IA محلية تتكيف مع مستوى المستخدم — توليد أسئلة وتقييم ذكي ونظام تقدم."
    },
    tags: ["Python", "FastAPI", "SQLite", "React", "JavaScript", "Ollama", "Llama 3.2"],
    accent: "from-indigo-400 to-purple-400",
    github: "https://github.com/hamrouniraed07/Study_Quiz"
  },
  // ✅ NEW PROJECT 2
  {
    title: "Hotel Microservices System",
    blurb: {
      en: "Hotel booking platform built on microservices architecture with gRPC, GraphQL, REST, and Kafka for scalable communication.",
      fr: "Plateforme de réservation d’hôtel basée sur une architecture microservices avec gRPC, GraphQL, REST et Kafka.",
      ar: "نظام حجز فنادق مبني على معمارية Microservices باستخدام gRPC و GraphQL و Kafka."
    },
    tags: ["Node.js", "Express", "Apollo Server", "gRPC", "Kafka", "Docker", "OpenRouter"],
    accent: "from-sky-400 to-blue-500",
    github: "https://github.com/hamrouniraed07/Hotel_microservices"
  },
  {
    title: "Circumcision Data Analysis",
    blurb: {
      en: "End-to-end statistical analysis of clinical circumcision data using R & Quarto, with interactive reports, Jupyter notebooks, and RevealJS presentation.",
      fr: "Analyse statistique complète de données cliniques de circoncision avec R & Quarto, incluant rapport interactif, notebook et présentation RevealJS.",
      ar: "تحليل إحصائي متكامل لبيانات طبية باستخدام R وQuarto مع تقارير تفاعلية وعروض تقديمية."
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
      "Bootstrap"
    ],
    accent: "from-rose-400 to-pink-500",
    github: "https://github.com/hamrouniraed07/R_Presentation",
    demo: "https://r-presentation.vercel.app"
  }
];
const SKILLS = [
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
      "LoRA"
    ]
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
      "Kubernetes"
    ]
  },
  { group: "Backend", items: ["FastAPI", "Node.js", "Express", "gRPC", "GraphQL", "Kafka"] },
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind", "Redux", "Zustand"] },
  { group: "Data", items: ["Python", "Pandas", "NumPy", "TensorFlow", "PyTorch", "Scikit-learn"] }
];
const PIPELINE = ["Problem", "Data", "Model", "API", "Agent", "Monitor", "Impact"];
const FULLSTACK_PIPELINE = [
  "Design",
  "Backend",
  "Database",
  "API",
  "Frontend",
  "Deploy",
  "Scale"
];
function chatbotReply(question, lang) {
  const q = question.toLowerCase();
  const k = (...words) => words.some((w) => q.includes(w));
  const R = {
    en: {
      projects: "Raed has built 9 standout projects: The Jungle (modern gym booking platform), StudyPal (gamified AI learning system), a Hotel Microservices System (gRPC, Kafka, GraphQL), ClassQuiz (AI exam correction), a local RAG Medical System, an MLOps Fraud Detection stack (99.9% precision), FitBox AI Coach (LoRA fine-tuned Llama), a MERN FoodOrder platform with Ollama recommendations, a Biological Age estimator, and an interactive Circumcision Data Analysis platform built with R & Quarto.",
      skills: "He's strong in AI/LLM (Gemini, Llama, Claude, LangChain, LangGraph, RAG, LoRA), MLOps (ZenML, MLflow, Prometheus, Docker, Kubernetes), backend (FastAPI, Node.js, gRPC, Kafka, GraphQL), frontend (React, TypeScript, Tailwind, Framer Motion), and data science (TensorFlow, PyTorch, Scikit-learn).",
      experience: "3 internships: ClassQuiz (AI Engineer, 2026), ARSII (Data Science, 2025 — postoperative complication prediction), and VIVIA (Software Developer, 2023 — CRM module).",
      education: "Engineering degree in AI & Data Science from the Polytechnic School of Sousse, plus a Master's in Web Services & Multimedia from ISITCOM.",
      contact: "Reach him at Hamrouniraed50@gmail.com, or via LinkedIn / GitHub linked at the bottom of the page.",
      who: "Raed is an AI & Fullstack Engineer from Sousse, Tunisia. He builds and ships intelligent systems end-to-end — from scalable backend architectures to production-ready LLM agents.",
      mlops: "On the MLOps side, he has worked with ZenML, MLflow, Optuna, Docker, Kubernetes, Prometheus & Grafana — notably building a fraud detection system reaching 99.9% precision and 97.8% AUC-ROC with full observability.",
      llm: "For LLMs, he has used Gemini 2.5 Flash for Arabic OCR, Llama 3.2 for grading and fine-tuning (LoRA), built adaptive AI systems like StudyPal, and deployed RAG pipelines using FAISS + Ollama.",
      default: "Try asking about his projects, skills, experience, education, or how to contact him."
    },
    fr: {
      projects: "Raed a réalisé 9 projets majeurs : The Jungle (plateforme de réservation), StudyPal (apprentissage IA gamifié), un système hôtelier en microservices, ClassQuiz (correction IA), un RAG médical, un système MLOps de fraude (99,9%), FitBox AI Coach, FoodOrder (MERN + IA), un estimateur d’âge biologique, et une plateforme d’analyse statistique interactive en R & Quarto.",
      skills: "Solide en IA/LLM (Gemini, Llama, LangChain, RAG, LoRA), MLOps (ZenML, MLflow, Docker, Kubernetes), backend (FastAPI, Node.js, gRPC, Kafka, GraphQL), frontend (React, TypeScript, Tailwind, Framer Motion) et data science.",
      experience: "3 stages : ClassQuiz (Ingénieur IA, 2026), ARSII (Data Science, 2025 — prédiction des complications postopératoires), VIVIA (Développement logiciel, 2023 — module CRM).",
      education: "Diplôme d’ingénieur en IA & Data Science (École Polytechnique de Sousse) et Master en Services Web & Multimédia (ISITCOM).",
      contact: "Email : Hamrouniraed50@gmail.com — LinkedIn et GitHub disponibles en bas de page.",
      who: "Raed est un ingénieur IA & Fullstack basé à Sousse, Tunisie. Il conçoit et déploie des systèmes intelligents de bout en bout.",
      mlops: "Expérience avec ZenML, MLflow, Optuna, Docker, Kubernetes, Prometheus & Grafana — notamment un système de détection de fraude avec 99,9% de précision.",
      llm: "Utilisation de Gemini 2.5 Flash, Llama 3.2 (fine-tuning LoRA), systèmes adaptatifs comme StudyPal, et pipelines RAG avec FAISS + Ollama.",
      default: "Posez une question sur ses projets, compétences, expérience, formation ou contact."
    },
    ar: {
      projects: "قام رائد بإنجاز 9 مشاريع مميزة: The Jungle، StudyPal، نظام فنادق Microservices، ClassQuiz، نظام RAG طبي، نظام كشف احتيال MLOps (دقة 99.9%)، FitBox AI Coach، FoodOrder، تقدير العمر البيولوجي، بالإضافة إلى منصة تحليل بيانات طبية باستخدام R وQuarto.",
      skills: "خبرة قوية في LLM وMLOps وBackend (FastAPI وNode.js وgRPC وKafka) وFrontend (React وTypeScript وTailwind) وعلم البيانات.",
      experience: "3 تربصات: ClassQuiz (مهندس ذكاء اصطناعي 2026)، ARSII (علم البيانات 2025)، VIVIA (تطوير برمجيات 2023).",
      education: "مهندس في الذكاء الاصطناعي وعلوم البيانات من المدرسة العليا بسوسة، وماجستير في خدمات الويب والوسائط المتعددة من ISITCOM.",
      contact: "البريد: Hamrouniraed50@gmail.com — وروابط LinkedIn و GitHub في الأسفل.",
      who: "رائد مهندس ذكاء اصطناعي وFullstack من سوسة، تونس، يقوم ببناء أنظمة ذكية متكاملة من البداية للنشر.",
      mlops: "عمل على ZenML وMLflow وDocker وKubernetes — نظام كشف احتيال بدقة 99.9% مع مراقبة كاملة.",
      llm: "استخدم Gemini وLlama 3.2 مع LoRA، وبنى أنظمة RAG باستخدام FAISS وOllama بالإضافة إلى StudyPal.",
      default: "اسأل عن المشاريع أو المهارات أو الخبرة أو التعليم أو كيفية التواصل."
    }
  };
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
function Chatbot({ lang }) {
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [msgs, setMsgs] = reactExports.useState([]);
  const scrollRef = reactExports.useRef(null);
  const t = T[lang];
  reactExports.useEffect(() => {
    setMsgs([{ role: "bot", text: t.chat_welcome }]);
  }, [lang, t.chat_welcome]);
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);
  const send = () => {
    const q = input.trim();
    if (!q) return;
    const reply = chatbotReply(q, lang);
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "bot", text: reply }]);
    setInput("");
  };
  const suggestions = lang === "fr" ? ["Projets ?", "Compétences ?", "Expérience ?", "Contact ?"] : lang === "ar" ? ["المشاريع؟", "المهارات؟", "الخبرة؟", "تواصل؟"] : ["Projects?", "Skills?", "Experience?", "Contact?"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setOpen((o) => !o),
        className: "fixed bottom-6 end-6 z-50 size-14 rounded-full grid place-items-center text-primary-foreground hover-glow",
        style: { background: "var(--grad-primary)", boxShadow: "var(--shadow-glow)" },
        "aria-label": "Open chatbot",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { rotate: -90, opacity: 0 },
            animate: { rotate: 0, opacity: 1 },
            exit: { rotate: 90, opacity: 0 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-6" })
          },
          "x"
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { rotate: 90, opacity: 0 },
            animate: { rotate: 0, opacity: 1 },
            exit: { rotate: -90, opacity: 0 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-6" })
          },
          "m"
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 24, scale: 0.95 },
        transition: { type: "spring", damping: 24, stiffness: 280 },
        className: "fixed bottom-24 end-6 z-50 w-[min(92vw,380px)] h-[min(70vh,520px)] glass-strong rounded-2xl flex flex-col overflow-hidden",
        style: { boxShadow: "0 20px 60px rgba(0,0,0,0.5), var(--shadow-glow)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "size-9 rounded-full grid place-items-center",
                style: { background: "var(--grad-primary)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-primary-foreground" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: t.chat_title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "● online" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 overflow-y-auto p-4 space-y-3", children: msgs.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "text-primary-foreground" : "glass border"}`,
                  style: m.role === "user" ? { background: "var(--grad-primary)" } : {},
                  children: m.text
                }
              )
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 flex flex-wrap gap-1.5 border-t", children: suggestions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setInput(s);
                setTimeout(send, 0);
              },
              className: "text-xs px-2.5 py-1 rounded-full glass border hover:border-primary/40 transition",
              children: s
            },
            s
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-t flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: input,
                onChange: (e) => setInput(e.target.value),
                onKeyDown: (e) => e.key === "Enter" && send(),
                placeholder: t.chat_placeholder,
                className: "flex-1 bg-transparent border rounded-full px-4 py-2 text-sm outline-none focus:border-primary/60"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: send,
                className: "size-9 grid place-items-center rounded-full text-primary-foreground",
                style: { background: "var(--grad-primary)" },
                "aria-label": t.chat_send,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4" })
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
const Github = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...p, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" }) });
const Linkedin = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...p, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.7V19h-3V9h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.4 1.3 3.4 4V19z" }) });
const Instagram = (p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", ...p, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3.5" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor", stroke: "none" })
] });
const PIPELINE_ICONS = [Sparkles, Database, Brain, Plug, Bot, Activity, ArrowRight];
const FULLSTACK_PIPELINE_ICONS = [Sparkles, Bot, Database, Plug, ArrowRight, Activity, ArrowRight];
function Portfolio() {
  const [lang, setLang] = reactExports.useState("en");
  const [langOpen, setLangOpen] = reactExports.useState(false);
  const t = T[lang];
  const isRTL = lang === "ar";
  reactExports.useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.body.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "fixed top-0 inset-x-0 h-[2px] z-50 origin-left", style: {
      scaleX,
      background: "var(--grad-primary)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-full px-5 py-2.5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#hero", className: "font-mono text-sm font-bold tracking-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "RH" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: ".dev" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-foreground transition", children: t.nav_about }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#experience", className: "hover:text-foreground transition", children: t.nav_experience }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#projects", className: "hover:text-foreground transition", children: t.nav_projects }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#skills", className: "hover:text-foreground transition", children: t.nav_skills }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-foreground transition", children: t.nav_contact })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLangOpen((o) => !o), className: "flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full glass border hover:border-primary/40 transition", "aria-label": "Change language", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "size-3.5" }),
          LANGS.find((l) => l.code === lang)?.label
        ] }),
        langOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute end-0 mt-2 glass-strong rounded-xl overflow-hidden min-w-[120px] py-1", children: LANGS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setLang(l.code);
          setLangOpen(false);
        }, className: `w-full px-3 py-2 text-sm text-start flex items-center gap-2 hover:bg-white/5 transition ${lang === l.code ? "text-cyan" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: l.label }),
          lang === l.code && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ms-auto text-cyan", children: "●" })
        ] }, l.code)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "hero", className: "relative min-h-screen flex items-center justify-center overflow-hidden noise", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NeuralBackground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "radial-gradient(ellipse at top, oklch(0.72 0.18 235 / 0.18), transparent 60%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          scale: 0.6,
          opacity: 0
        }, animate: {
          scale: 1,
          opacity: 1
        }, transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }, className: "inline-block mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-float", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full animate-pulse-ring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: raedImg, alt: "Raed Hamrouni", width: 160, height: 160, className: "size-40 rounded-full object-cover relative glow-ring" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.2,
          duration: 0.8
        }, className: "inline-flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4 px-3 py-1.5 rounded-full glass", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-emerald-400 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3" }),
          " ",
          t.hero_location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.3,
          duration: 0.9
        }, className: "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text", children: t.hero_name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typewriter, { words: t.roles }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.7,
          duration: 1
        }, className: "mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: t.hero_subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.9,
          duration: 0.8
        }, className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: cvPdf, target: "_blank", rel: "noopener noreferrer", className: "group inline-flex items-center gap-2 px-6 py-3 rounded-full text-primary-foreground font-medium text-sm hover-glow", style: {
            background: "var(--grad-primary)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4" }),
            " ",
            t.hero_cv
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-2 px-6 py-3 rounded-full glass border font-medium text-sm hover:border-primary/40 hover-glow", children: [
            t.hero_connect,
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 1.1
        }, className: "mt-8 flex items-center justify-center gap-3", children: [{
          icon: Github,
          href: "https://github.com/hamrouniraed07",
          label: "GitHub"
        }, {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/raed-med-amin-hamrouni",
          label: "LinkedIn"
        }, {
          icon: Mail,
          href: "mailto:Hamrouniraed50@gmail.com",
          label: "Email"
        }].map(({
          icon: Icon,
          href,
          label
        }) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noopener noreferrer", "aria-label": label, className: "size-11 grid place-items-center rounded-full glass border hover:border-primary/50 hover:text-cyan transition-all hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) }, label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 1.5,
          duration: 1
        }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono uppercase tracking-widest", children: "scroll" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "size-3 animate-bounce" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "about", eyebrow: t.about_eyebrow, title: t.about_title, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-6 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.7
        }, className: "md:col-span-3 text-lg leading-relaxed text-muted-foreground", children: t.about_body }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-mono uppercase tracking-widest text-cyan flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "size-4" }),
            " ",
            t.edu_title
          ] }),
          [{
            school: t.edu1_school,
            degree: t.edu1_deg,
            date: t.edu1_date
          }, {
            school: t.edu2_school,
            degree: t.edu2_deg,
            date: t.edu2_date
          }, {
            school: t.edu3_school,
            degree: t.edu3_deg,
            date: t.edu3_date
          }].map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: 20
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: i * 0.1
          }, className: "glass rounded-2xl p-5 hover-glow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: e.school }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: e.degree }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-cyan mt-2", children: e.date })
          ] }, i))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-mono uppercase tracking-widest text-cyan mb-6 text-center", children: t.pipeline_title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-2", children: PIPELINE.map((step, i) => {
          const Icon = PIPELINE_ICONS[i] || Sparkles;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            scale: 0.8
          }, whileInView: {
            opacity: 1,
            scale: 1
          }, viewport: {
            once: true
          }, transition: {
            delay: i * 0.08
          }, className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl px-4 py-2.5 flex items-center gap-2 hover-glow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4 text-cyan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: step })
            ] }),
            i < PIPELINE.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3 text-muted-foreground rtl:rotate-180" })
          ] }, step);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-mono uppercase tracking-widest text-cyan mb-6 text-center", children: "Fullstack Pipeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-2", children: FULLSTACK_PIPELINE.map((step, i) => {
          const Icon = FULLSTACK_PIPELINE_ICONS[i] || Sparkles;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            scale: 0.8
          }, whileInView: {
            opacity: 1,
            scale: 1
          }, viewport: {
            once: true
          }, transition: {
            delay: i * 0.08
          }, className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl px-4 py-2.5 flex items-center gap-2 hover-glow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4 text-cyan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: step })
            ] }),
            i < FULLSTACK_PIPELINE.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3 text-muted-foreground rtl:rotate-180" })
          ] }, step);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "experience", eyebrow: t.exp_eyebrow, title: t.exp_title, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute start-4 md:start-1/2 top-2 bottom-2 w-px md:-translate-x-1/2", style: {
        background: "linear-gradient(to bottom, transparent, oklch(0.72 0.18 235 / 0.5), transparent)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: EXPERIENCES.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.6
      }, className: `relative ps-12 md:ps-0 md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute start-4 md:start-1/2 top-3 size-3 rounded-full -translate-x-1/2 ring-4 ring-background", style: {
          background: "var(--grad-primary)",
          boxShadow: "0 0 20px var(--electric)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: i % 2 === 0 ? "md:text-end md:pe-10" : "md:ps-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-cyan uppercase tracking-wider", children: e.period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-bold", children: e.company }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: e.role[lang] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: i % 2 === 0 ? "md:ps-10 mt-3 md:mt-0" : "md:pe-10 md:text-end mt-3 md:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 hover-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: e.desc[lang] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-3 flex flex-wrap gap-1.5 ${i % 2 === 0 ? "" : "md:justify-end"}`, children: e.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono px-2 py-0.5 rounded-full border border-primary/30 text-cyan bg-primary/5", children: tag }, tag)) })
        ] }) })
      ] }, e.company)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "projects", eyebrow: t.proj_eyebrow, title: t.proj_title, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-50px"
    }, transition: {
      delay: i % 3 * 0.1,
      duration: 0.6
    }, className: "group relative glass rounded-2xl p-6 hover-glow overflow-hidden flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${p.accent} -z-10 blur-xl` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-xl bg-gradient-to-br ${p.accent} grid place-items-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-background" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-2", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4 min-h-[3rem]", children: p.blurb[lang] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: p.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-muted-foreground border border-white/5", children: tag }, tag)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4", children: [
        p.github && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.github, target: "_blank", rel: "noopener noreferrer", className: "group relative flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover-glow transition-all hover:scale-105", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-3.5 group-hover:text-cyan transition-colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GitHub" })
        ] }),
        p.demo && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.demo, target: "_blank", rel: "noopener noreferrer", className: "group relative flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover-glow transition-all hover:scale-105", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3.5 group-hover:text-cyan transition-colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Demo" })
        ] })
      ] })
    ] }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "skills", eyebrow: t.skills_eyebrow, title: t.skills_title, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: SKILLS.map((group, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      x: -20
    }, whileInView: {
      opacity: 1,
      x: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.08
    }, className: "grid md:grid-cols-[180px_1fr] gap-3 md:gap-6 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono uppercase tracking-widest text-cyan pt-2", children: group.group }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: group.items.map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
        opacity: 0,
        scale: 0.8
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        delay: j * 0.03
      }, whileHover: {
        y: -2,
        scale: 1.05
      }, className: "px-3.5 py-1.5 rounded-full text-sm glass border hover:border-primary/50 hover:text-cyan transition cursor-default", children: item }, item)) })
    ] }, group.group)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative py-32 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "radial-gradient(ellipse at center, oklch(0.72 0.18 235 / 0.15), transparent 60%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8
      }, className: "relative max-w-2xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono uppercase tracking-widest text-cyan mb-3", children: t.nav_contact }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-6xl font-bold tracking-tighter mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text", children: t.contact_title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-10 text-lg", children: t.contact_tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:Hamrouniraed50@gmail.com", className: "inline-flex items-center gap-3 px-7 py-4 rounded-full glass-strong border-2 border-primary/30 hover:border-primary/60 transition group", style: {
          boxShadow: "var(--shadow-glow-cyan)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-5 text-cyan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-medium", children: "Hamrouniraed50@gmail.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center gap-3", children: [{
          icon: Instagram,
          href: "https://www.instagram.com/hamrouni_raed07/",
          label: "Instagram"
        }, {
          icon: Github,
          href: "https://github.com/hamrouniraed07",
          label: "GitHub"
        }, {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/raed-med-amin-hamrouni/",
          label: "LinkedIn"
        }].map(({
          icon: Icon,
          href,
          label
        }) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noopener noreferrer", "aria-label": label, className: "size-12 grid place-items-center rounded-full glass border hover:border-primary/50 hover:text-cyan hover:scale-110 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }, label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "py-8 text-center text-xs text-muted-foreground border-t border-white/5", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " — ",
      t.footer
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Chatbot, { lang })
  ] });
}
function Section({
  id,
  eyebrow,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: "relative py-28 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.6
    }, className: "mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono uppercase tracking-widest text-cyan mb-2", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold tracking-tighter", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: title }) })
    ] }),
    children
  ] }) });
}
function Typewriter({
  words
}) {
  const [idx, setIdx] = reactExports.useState(0);
  const [text, setText] = reactExports.useState("");
  const [del, setDel] = reactExports.useState(false);
  const word = reactExports.useMemo(() => words[idx % words.length], [idx, words]);
  reactExports.useEffect(() => {
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, word]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-9 md:h-11 text-2xl md:text-3xl font-mono text-cyan cursor-blink", children: text });
}
export {
  Portfolio as component
};
