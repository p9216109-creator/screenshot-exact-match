import interiorImg from "@/assets/c-interior.jpg";
import fashionImg from "@/assets/c-fashion.jpg";
import graphicImg from "@/assets/c-graphic.jpg";
import webImg from "@/assets/c-web.jpg";

/** Site-wide facts, taken from the current official website (mind.ind.in). */
export const SITE = {
  name: "MIND Creative School",
  url: "https://mind.ind.in",
  email: "mind30096@gmail.com",
  phones: [
    { label: "+91 77953 18231", tel: "+917795318231" },
    { label: "+91 824 426 7500", tel: "+918244267500" },
  ],
  /** Number used for WhatsApp chats. Confirm with the institute. */
  whatsapp: "917795318231",
  branches: [
    {
      city: "Mangalore",
      address: "4th Floor, Sanu Palace, PVS Circle, MG Road, Kodialbail, Mangaluru, Karnataka 575003",
      mapUrl: "https://maps.google.com/?cid=16400598640272404239",
      embed:
        "https://www.google.com/maps?q=Mind+Creative+School,+Sanu+Palace,+PVS+Circle,+Mangaluru&output=embed",
      verified: true,
    },
    {
      city: "Udupi",
      address: "Udupi branch address to be confirmed by the institute.",
      mapUrl: null as string | null,
      embed: null as string | null,
      verified: false,
    },
  ],
};

/** Top announcement bar. Set `enabled: false` to hide it. */
export const ANNOUNCEMENT = {
  enabled: true,
  text: "Admissions open for design, animation and web courses — book a free demo session.",
  cta: "Book a free demo",
};

export const waLink = (msg = "Hello MIND Creative School, I would like to know more about your courses.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export type Category =
  | "Design & Creative Arts"
  | "Software & Digital Skills"
  | "Design Software & Professional Tools"
  | "Short-Term Courses";

export const CATEGORIES: Category[] = [
  "Design & Creative Arts",
  "Software & Digital Skills",
  "Design Software & Professional Tools",
  "Short-Term Courses",
];

export type Course = {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  summary: string;
  image: string;
  overview: string[];
  tools: string[];
  programmes: { name: string; duration: string }[];
  careers: string[];
  activities: string[];
  featured?: boolean;
};

const ACTIVITIES = ["Workshops", "Assignments", "Projects", "Study material provided"];

export const COURSES: Course[] = [
  {
    slug: "interior-design",
    name: "Interior Design",
    category: "Design & Creative Arts",
    tagline: "Learn to design with style, design with smile.",
    summary: "Residential and commercial space design with AutoCAD, Revit, 3ds Max, SketchUp and V-Ray.",
    image: interiorImg,
    featured: true,
    overview: [
      "Interior design is the art, science and business planning of creative, technical, sustainable and functional interior solutions that respond to the architecture of a space.",
      "The curriculum balances design theory, software tools, material surveys, workshops, site visits and project work on residential and commercial spaces — with a strong emphasis on both knowledge and skill building.",
    ],
    tools: ["AutoCAD", "Revit Architecture", "3ds Max", "Google SketchUp", "V-Ray"],
    programmes: [
      { name: "Master Diploma in Interior & Architectural Design", duration: "600 hours" },
      { name: "Advance Diploma in Interior & Architectural Design", duration: "240 hours" },
      { name: "Professional Diploma in Interior & Architectural Design", duration: "240 hours" },
      { name: "Diploma in Interior & Architectural Design", duration: "200 hours" },
    ],
    careers: ["Interior designer", "3D visualiser", "Space planner", "Freelance designer"],
    activities: [...ACTIVITIES, "Material surveys", "Site visits", "Portfolio building"],
  },
  {
    slug: "fashion-design",
    name: "Fashion Design",
    category: "Design & Creative Arts",
    tagline: "Learn to make people look better, feel better and live better.",
    summary: "Garment design, pattern making, Fashion CAD, embellishment and accessories.",
    image: fashionImg,
    featured: true,
    overview: [
      "Fashion is a manifestation of human art and communication — the study of creating original garment designs and following ever-changing trends in the industry and market.",
      "Students apply design aesthetics, clothing construction and accessory design, keeping themes, materials, colours, patterns and occasions in mind.",
    ],
    tools: ["Fashion CAD", "Pattern making", "Embroidery & Aari work", "Fabric painting"],
    programmes: [
      { name: "Master Diploma in Fashion Designing", duration: "600 hours" },
      { name: "Professional in Fashion Designing", duration: "360 hours" },
      { name: "Diploma in Fashion CAD", duration: "160 hours" },
      { name: "Diploma in Embellishment", duration: "1 month" },
    ],
    careers: ["Fashion designer", "Boutique owner", "Pattern maker", "Fashion illustrator"],
    activities: [...ACTIVITIES, "Garment projects"],
  },
  {
    slug: "graphic-design-animation",
    name: "Graphic Design & 3D Animation",
    category: "Design & Creative Arts",
    tagline: "Great designers create visual stories with simplicity and clarity.",
    summary: "Branding, print and digital design, plus 3D modelling and animation with Maya.",
    image: graphicImg,
    featured: true,
    overview: [
      "Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content — from a simple logo to a complete website.",
      "Animation lets storytellers tell stories in unique ways. The programme covers 2D graphics, 3D modelling and animation for students who want to bring ideas to life.",
    ],
    tools: ["Photoshop", "Illustrator", "CorelDRAW", "InDesign", "Premiere Pro", "After Effects", "Maya", "Sound Forge"],
    programmes: [
      { name: "Post Diploma in Graphic Design & 3D Animation", duration: "720 hours" },
      { name: "Master Diploma in 2D Graphics & Web Design", duration: "480 hours" },
      { name: "Professional Diploma in 2D Graphics & Web Design", duration: "380 hours" },
      { name: "Diploma in Graphic Design", duration: "200 hours" },
    ],
    careers: ["Graphic designer", "UI & UX designer", "Motion graphic designer", "3D artist / animator", "Print media", "Freelance artist"],
    activities: [...ACTIVITIES, "Portfolio building"],
  },
  {
    slug: "video-editing-vfx",
    name: "Video Editing & Compositing",
    category: "Design & Creative Arts",
    tagline: "Arrange clips, images and sound into stories that move.",
    summary: "Post-production: editing, compositing, titling, colour correction and sound.",
    image: graphicImg,
    overview: [
      "Video editing is essential for films, television shows and video ads — arranging clips, images and sounds to create shots, done today with professional editing software.",
      "Students also explore other post-production tasks such as sound mixing, visual effects, titling and colour correction.",
    ],
    tools: ["Premiere Pro", "After Effects", "Sound Forge"],
    programmes: [{ name: "Diploma in Movie Editing & Compositing", duration: "128 hours" }],
    careers: ["Video editor", "Motion graphic & rotoscope artist", "Animation & VFX artist", "Short films & documentaries"],
    activities: ACTIVITIES,
  },
  {
    slug: "web-design-development",
    name: "Web Design & Development",
    category: "Software & Digital Skills",
    tagline: "Design, build and maintain websites that work.",
    summary: "Frontend with HTML, CSS, JavaScript and Bootstrap; backend with PHP, Java, Python and Node.js.",
    image: webImg,
    featured: true,
    overview: [
      "Web development covers creating, building and maintaining websites — web design, web publishing, web programming and database management.",
      "Students learn the frontend (what users see and interact with) and the backend (the server side that stores and arranges data).",
    ],
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Java", "Python", "Node.js"],
    programmes: [
      { name: "Diploma in Web Design", duration: "200 hours" },
      { name: "Master Diploma in 2D Graphics & Web Design", duration: "480 hours" },
    ],
    careers: ["Web designer", "Frontend developer", "Backend developer", "Freelance web developer"],
    activities: ACTIVITIES,
  },
  {
    slug: "autocad",
    name: "Creative AutoCAD",
    category: "Design Software & Professional Tools",
    tagline: "Precise 2D drafting and plans.",
    summary: "Drafting floor plans and drawings in AutoCAD.",
    image: interiorImg,
    overview: ["A focused software course on AutoCAD for drafting plans and technical drawings, taught as part of the interior design track."],
    tools: ["AutoCAD"],
    programmes: [{ name: "Creative AutoCAD", duration: "40 hours" }],
    careers: ["Draughtsperson", "CAD technician"],
    activities: ["Assignments", "Projects"],
  },
  {
    slug: "3ds-max",
    name: "3ds Max",
    category: "Design Software & Professional Tools",
    tagline: "Model and render spaces in 3D.",
    summary: "3D modelling and visualisation of interiors and exteriors.",
    image: interiorImg,
    overview: ["A software course in 3ds Max for creating high-quality interior models, exteriors and visualisations."],
    tools: ["3ds Max", "V-Ray"],
    programmes: [{ name: "3ds Max", duration: "80 hours" }],
    careers: ["3D visualiser", "Render artist"],
    activities: ["Assignments", "Projects"],
  },
  {
    slug: "vray-sketchup",
    name: "V-Ray on SketchUp",
    category: "Design Software & Professional Tools",
    tagline: "Photo-real renders from SketchUp models.",
    summary: "Rendering SketchUp models with V-Ray.",
    image: interiorImg,
    overview: ["A short software course on rendering with V-Ray inside Google SketchUp."],
    tools: ["SketchUp", "V-Ray"],
    programmes: [{ name: "V-Ray on SketchUp", duration: "40 hours" }],
    careers: ["3D visualiser", "Interior render artist"],
    activities: ["Assignments", "Projects"],
  },
  {
    slug: "fashion-certificate-courses",
    name: "Fashion Certificate Courses",
    category: "Short-Term Courses",
    tagline: "One-month hands-on skills.",
    summary: "Pattern making, embroidery & Aari work, fabric paint, jewellery design and accessories.",
    image: fashionImg,
    overview: ["Short, one-month certificate courses that teach a single practical fashion skill."],
    tools: ["Pattern making", "Embroidery & Aari", "Fabric paint", "Jewellery design", "Accessories"],
    programmes: [
      { name: "Certificate Course on Pattern Making", duration: "1 month" },
      { name: "Certificate Course on Embroidery & Aari Work", duration: "1 month" },
      { name: "Certificate Course on Fabric Paint", duration: "1 month" },
      { name: "Certificate Course on Jewellery Design", duration: "1 month" },
      { name: "Certificate Course on Accessories", duration: "1 month" },
    ],
    careers: ["Boutique work", "Freelance designer"],
    activities: ["Hands-on practice"],
  },
  {
    slug: "graphic-certificate-courses",
    name: "Software Certificate Courses",
    category: "Short-Term Courses",
    tagline: "Learn one tool, well.",
    summary: "40-hour certificate courses in individual creative software such as Photoshop.",
    image: graphicImg,
    overview: ["Short certificate courses that focus on individual creative software. Ask us which tools are running in the next batch."],
    tools: ["Photoshop", "Illustrator", "CorelDRAW", "Premiere Pro"],
    programmes: [{ name: "Certificate courses", duration: "40 hours" }],
    careers: ["Upskilling for current work", "Freelance projects"],
    activities: ["Hands-on practice"],
  },
];

export const getCourse = (slug: string) => COURSES.find((c) => c.slug === slug);

export const TESTIMONIALS = [
  {
    quote:
      "This institution itself is built for comfort of the students and has a stress free and a friendly environment… Faculty members are very supportive. Teaching is very good.",
    name: "Deekshitha",
    role: "Manthra Ixe Fashion Villa Boutique, Mangalore",
  },
  {
    quote: "I am grateful for the lessons you've taught me… Good teaching skills and I had good experience. Thank you MIND.",
    name: "Avish Kulal",
    role: "3D Artist, Black or Gray",
  },
  {
    quote:
      "The Interior Course equips with skills required to start your interior career in the form of helping you to make your portfolio. I had very good experience with software's.",
    name: "Dhanush Kumar",
    role: "Civil and Structural Consultant, Mangalore",
  },
  {
    quote:
      "One of best training institute in Mangalore, they help in skill development and right guidance, even the staffs are very friendly.",
    name: "Shaffaf Raheman",
    role: "AESTHETIC Designers of Architectures and Interiors",
  },
];

export type Workshop = {
  slug: string;
  title: string;
  description: string;
  date: string | null; // ISO date; null = date to be announced
  mode: string;
  free: boolean | null;
  status: "upcoming" | "completed" | "unpublished";
};

/** Add confirmed workshops here. Past dates are never shown as upcoming. */
export const WORKSHOPS: Workshop[] = [];

export const isUpcoming = (w: Workshop, now = new Date()) =>
  w.status === "upcoming" && (w.date === null || new Date(w.date) >= now);

export const FAQS = [
  { q: "Which courses are available?", a: "Interior Design, Fashion Design, Graphic Design & 3D Animation, Video Editing & Compositing, Web Design & Development, and software courses such as AutoCAD, 3ds Max and V-Ray on SketchUp, plus short certificate courses." },
  { q: "Who can enrol?", a: "Students, graduates and working professionals interested in creative and digital careers. Eligibility can vary by programme — please enquire for specifics." },
  { q: "Are beginner-friendly courses available?", a: "Yes — diploma and certificate courses start from the basics. Our team will suggest the right level during a free demo." },
  { q: "Are classes online or offline?", a: "Classes run at our institute. Online learning through self-paced videos and live classes is available on our G-SKOOL platform for some courses — ask us which ones." },
  { q: "How can I learn about fees and duration?", a: "Course hours are listed on each course page. Fees vary by programme, so please send an enquiry or WhatsApp us for the current fee details." },
  { q: "Can I attend a demo before enrolling?", a: "Yes. Book a free demo and our team will contact you to arrange a time." },
  { q: "Are practical projects included?", a: "Courses are highly activity based, with workshops, assignments, material surveys, projects, site visits and internships where applicable." },
  { q: "Is career or placement assistance available?", a: "We offer career guidance and placement assistance. Outcomes depend on each student's effort and portfolio; we do not guarantee jobs." },
  { q: "How do I register for a workshop?", a: "Upcoming workshops are listed on the Workshops page with a registration form. You can also WhatsApp us." },
  { q: "Where are the branches located?", a: "Mangalore (4th Floor, Sanu Palace, PVS Circle, MG Road) and Udupi." },
];
