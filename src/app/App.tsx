import { useEffect, useRef, useState, type FormEvent } from "react"
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useNavigate,
} from "react-router"
import {
  ArrowDown,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Atom,
  Braces,
  Code2,
  Database,
  Figma,
  GitBranch,
  Github,
  Menu,
  Minus,
  Monitor,
  Plus,
  Wind,
  X,
} from "lucide-react"
import profilePhoto from "../imports/1766010566518-1.jpeg"
import devfolio from "../imports/optimized/devfolio.webp"
import devfolioSmall from "../imports/optimized/devfolio-small.webp"
import fokir from "../imports/optimized/fokir.webp"
import fokirSmall from "../imports/optimized/fokir-small.webp"
import mealify from "../imports/optimized/mealify.webp"
import mealifySmall from "../imports/optimized/mealify-small.webp"
import freshcart from "../imports/optimized/freshcart.webp"
import freshcartSmall from "../imports/optimized/freshcart-small.webp"
import nox from "../imports/optimized/nox.webp"
import noxSmall from "../imports/optimized/nox-small.webp"
import fakhr from "../imports/optimized/fakhr.webp"
import fakhrSmall from "../imports/optimized/fakhr-small.webp"
import weather from "../imports/optimized/weather.webp"
import weatherSmall from "../imports/optimized/weather-small.webp"
import login from "../imports/optimized/login.webp"
import loginSmall from "../imports/optimized/login-small.webp"
import daniels from "../imports/optimized/daniels.webp"
import danielsSmall from "../imports/optimized/daniels-small.webp"

const projects = [
  {
    name: "NOX Store",
    category: "REACT E-COMMERCE",
    description:
      "A considered shopping experience for a contemporary menswear brand.",
    image: nox,
    small: noxSmall,
    tech: ["React", "JavaScript", "CSS"],
    built: "Product catalog · Responsive storefront · Motion",
    url: "https://noxwear-website.vercel.app",
    source: "https://github.com/ahmedeltawel123/nox-website",
    year: "2026",
    live: true,
  },
  {
    name: "FreshCart",
    category: "E-COMMERCE PLATFORM",
    description:
      "Everyday shopping, made simple. A complete React-powered storefront.",
    image: freshcart,
    small: freshcartSmall,
    tech: ["React", "Tailwind CSS", "API"],
    built: "Shopping cart · Authentication · Product browsing",
    url: "https://e-commerce-main-bice.vercel.app",
    source: "https://github.com/ahmedeltawel123/E-commerce-main",
    year: "2025",
    live: true,
  },
  {
    name: "DANIELS",
    category: "CREATIVE PORTFOLIO",
    description:
      "A timeless portfolio with expansive imagery and carefully crafted details.",
    image: daniels,
    small: danielsSmall,
    tech: ["HTML", "CSS", "JavaScript"],
    built: "Responsive layout · Project gallery · Contact section",
    url: "https://ahmedeltawel123.github.io/DANIELS/",
    source: "https://github.com/ahmedeltawel123/DANIELS",
    year: "2024",
    live: true,
  },
  {
    name: "DevFolio",
    category: "DEVELOPER PORTFOLIO",
    description:
      "A clean personal presence that puts the work and the developer first.",
    image: devfolio,
    small: devfolioSmall,
    tech: ["HTML", "CSS", "JavaScript"],
    built: "Personal branding · Smooth navigation · Responsive UI",
    url: "https://ahmedeltawel123.github.io/DevFolio/",
    source: "https://github.com/ahmedeltawel123/DevFolio",
    year: "2024",
    live: true,
  },
  {
    name: "Mealify",
    category: "RESTAURANT WEBSITE",
    description:
      "An inviting restaurant experience, from the first impression to the last detail.",
    image: mealify,
    small: mealifySmall,
    tech: ["HTML", "CSS", "JavaScript"],
    built: "Chef profiles · Food gallery · Responsive design",
    url: "https://ahmedeltawel123.github.io/Mealify./",
    source: "https://github.com/ahmedeltawel123/Mealify.",
    year: "2024",
    live: true,
  },
  {
    name: "Fokir",
    category: "PERSONAL PORTFOLIO",
    description:
      "A versatile personal portfolio with a clear, purposeful visual rhythm.",
    image: fokir,
    small: fokirSmall,
    tech: ["HTML", "CSS", "Bootstrap"],
    built: "Service sections · Skills showcase · Mobile layout",
    url: "https://github.com/ahmedeltawel123/Fokir",
    source: "https://github.com/ahmedeltawel123/Fokir",
    year: "2024",
    live: false,
  },
  {
    name: "Fakhr El Dein",
    category: "BUSINESS & RETAIL",
    description:
      "A bilingual digital storefront that brings a stationery business online.",
    image: fakhr,
    small: fakhrSmall,
    tech: ["HTML", "CSS", "JavaScript"],
    built: "Product catalog · Category navigation · Arabic & English",
    url: "https://fakhereldin.com/ar/",
    year: "2025",
    live: true,
  },
  {
    name: "Weather App",
    category: "WEB APPLICATION",
    description:
      "A simple way to stay one step ahead of the weather, wherever you are.",
    image: weather,
    small: weatherSmall,
    tech: ["JavaScript", "CSS", "API"],
    built: "Location search · Live weather · Three-day forecast",
    url: "https://ahmedeltawel123.github.io/weather/",
    source: "https://github.com/ahmedeltawel123/weather",
    year: "2024",
    live: true,
  },
  {
    name: "Smart Login",
    category: "AUTHENTICATION INTERFACE",
    description:
      "A focused authentication interface with nothing between you and getting started.",
    image: login,
    small: loginSmall,
    tech: ["HTML", "CSS", "JavaScript"],
    built: "Form validation · Sign-in flow · Responsive interface",
    url: "https://ahmedeltawel123.github.io/login/index.html",
    source: "https://github.com/ahmedeltawel123/login",
    year: "2024",
    live: true,
  },
]

const tools = [
  { name: "React", Icon: Atom },
  { name: "JavaScript", Icon: Braces },
  { name: "HTML5", Icon: Code2 },
  { name: "CSS3", Icon: Monitor },
  { name: "Tailwind", Icon: Wind },
  { name: "Git", Icon: GitBranch },
  { name: "GitHub", Icon: Github },
  { name: "Figma", Icon: Figma },
  { name: "REST APIs", Icon: Database },
]
const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Contact", id: "contact" },
]
const buttonClass =
  "group inline-flex min-h-12 items-center justify-center gap-6 rounded-full bg-primary px-6 py-3 text-xs text-primary-foreground transition-colors hover:bg-[#294a6d]"
const labelClass =
  "text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs"
const imageHeights: Record<string, number> = {
  "NOX Store": 658,
  FreshCart: 684,
  DANIELS: 688,
  DevFolio: 684,
  Mealify: 686,
  Fokir: 688,
  "Fakhr El Dein": 673,
  "Weather App": 691,
  "Smart Login": 678,
}

function readName() {
  try {
    return localStorage.getItem("ahmed-visitor-name") || ""
  } catch {
    return ""
  }
}

function Orb({ compact = false }: { compact?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`orb-stage relative flex shrink-0 items-center justify-center ${
        compact ? "h-44 w-44" : "h-56 w-56 lg:h-64 lg:w-64"
      }`}
    >
      <div className="orb h-[52%] w-[52%] rounded-full" />
      <div className="orb-ring absolute inset-[9%] rounded-full" />
      <div className="orb-ring orb-ring-secondary absolute inset-[15%] rounded-full opacity-50" />
      <span className="absolute right-[16%] top-[25%] h-2 w-2 rounded-full bg-primary shadow-[0_0_0_5px_#0f25410a]" />
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-30 flex min-h-24 items-center justify-between gap-4 py-5 sm:min-h-28">
      <a href="#home" className="text-xs sm:text-base">
        Front-End Developer
      </a>
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-7 text-xs lg:flex"
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="transition-opacity hover:opacity-55"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <Link
          to="/register"
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-primary/50 px-3 text-[9px] tracking-[0.04em] transition-colors hover:bg-primary hover:text-primary-foreground sm:min-h-11 sm:gap-3 sm:px-5 sm:text-[11px]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" /> AVAILABLE FOR
          WORK <ArrowUpRight className="hidden h-3.5 w-3.5 sm:block" />
        </Link>
        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full flex flex-col gap-1 rounded-xl border border-border bg-card p-3 shadow-xl lg:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-between px-3 text-sm"
            >
              {item.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

function Hero({ name }: { name: string }) {
  return (
    <section id="home" aria-labelledby="hero-title" className="pb-7 sm:pb-12">
      <Header />
      <h1
        id="hero-title"
        className="hero-enter mt-8 flex flex-col justify-between gap-x-6 text-[clamp(3.25rem,14.2vw,8rem)] leading-[1.05] font-normal sm:mt-9 sm:flex-row sm:text-[clamp(3rem,9.5vw,11rem)]"
      >
        <span>AHMED</span>
        <span>MOHAMED</span>
      </h1>
      <div className="hero-enter relative mt-9 grid items-center gap-x-8 gap-y-4 sm:mt-12 md:grid-cols-12 lg:mt-14">
        <div className="order-2 md:order-1 md:col-span-4">
          <ArrowDownRight className="mb-5 hidden h-10 w-10 stroke-[1.2] md:block lg:mb-10" />
          <p className="max-w-md text-[clamp(1rem,1.55vw,1.65rem)] leading-[1.55]">
            I build thoughtful digital experiences. Clean code, intuitive
            interfaces, and a little something unexpected.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a href="#contact" className={buttonClass}>
              GET IN TOUCH{" "}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 text-xs"
            >
              View my work <ArrowDown size={15} />
            </a>
          </div>
          {name && (
            <p role="status" className="mt-5 text-sm text-muted-foreground">
              Hello {name}, nice to have you here.
            </p>
          )}
        </div>
        <div className="order-1 flex justify-center md:order-2 md:col-span-5">
          <img
            src={profilePhoto}
            alt="Ahmed Mohamed, front-end developer"
            width="400"
            height="400"
            fetchPriority="high"
            className="portrait-blend h-auto w-[min(80vw,370px)] md:w-full lg:max-w-[430px]"
          />
        </div>
        <div className="order-3 hidden flex-col items-end justify-end self-end md:col-span-3 md:flex">
          <Orb compact />
          <span className={`${labelClass} mt-2`}>
            Thoughtfully built. Always.
          </span>
          <span className="mt-3 text-[clamp(1.5rem,3.7vw,4.4rem)] leading-none">
            Code & craft.
          </span>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-between border-t border-border pt-5 sm:mt-12">
        <span className={labelClass}>Independent developer · Egypt</span>
        <a
          href="#about"
          aria-label="Scroll to About"
          className="flex min-h-11 items-center gap-3 text-[10px] uppercase tracking-widest"
        >
          Scroll to explore <ArrowDown size={15} />
        </a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="grid gap-10 border-t border-border py-20 md:grid-cols-12 md:gap-8 lg:py-32"
    >
      <div className="md:col-span-4">
        <span className={labelClass}>[ A little about me ]</span>
        <h2
          id="about-title"
          className="mt-6 text-4xl leading-[1.15] lg:text-5xl"
        >
          Good design.
          <br />
          Better experiences.
        </h2>
      </div>
      <div data-reveal className="md:col-span-8 md:pl-8 lg:pl-16">
        <p className="max-w-3xl text-[clamp(1.5rem,3vw,3rem)] leading-[1.35]">
          I turn ideas into interfaces that feel just right. Beautiful to look
          at.
          <span className="text-muted-foreground">
            {" "}
            Effortless to use. Built to last.
          </span>
        </p>
        <p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
          I'm Ahmed, a front-end developer with an eye for detail and a love for
          the web. From a first sketch to the final interaction, I bring design
          and development together to build responsive, purposeful experiences.
        </p>
        <a
          href="#contact"
          className="mt-7 inline-flex min-h-11 items-center gap-6 border-b border-primary pb-1 text-sm"
        >
          Have something in mind? <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}

function ToolsTicker() {
  return (
    <section
      aria-label="Tools I work with"
      className="border-y border-border py-7 sm:py-9"
    >
      <p className={`${labelClass} mb-7`}>The tools behind the craft</p>
      <div className="tools-window overflow-hidden">
        <div className="tools-track flex">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16"
            >
              {tools.map(({ name, Icon }) => (
                <span
                  key={name}
                  className="flex shrink-0 items-center gap-3 text-sm text-primary/80 sm:text-base"
                >
                  <Icon className="h-7 w-7 stroke-[1.2] sm:h-9 sm:w-9" />
                  <span>{name}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    {
      name: "Front-End Development",
      description:
        "Custom React interfaces with clean, maintainable code. Built around your brand, your goals, and the people who use it.",
    },
    {
      name: "Responsive Web Design",
      description:
        "Thoughtful layouts that adapt naturally to phones, tablets, and desktops, without compromising the experience.",
    },
    {
      name: "Design to Development",
      description:
        "Turning Figma designs into precise, interactive websites. The details, the rhythm, and the intention, all intact.",
    },
    {
      name: "Performance Optimization",
      description:
        "Smaller assets, lighter interactions, and efficient rendering. Because a beautiful website should feel fast, too.",
    },
  ]
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="grid gap-12 py-20 md:grid-cols-12 lg:py-32"
    >
      <div className="md:col-span-5">
        <span className={labelClass}>[ Services ]</span>
        <h2
          id="services-title"
          data-reveal
          className="mt-6 max-w-lg text-[clamp(2.6rem,5vw,5rem)] leading-[1.1]"
        >
          What can I<br />
          offer you?
        </h2>
        <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">
          A balance of thoughtful design and solid development. Less friction.
          More possibilities.
        </p>
      </div>
      <div className="md:col-span-7 md:pt-9">
        {items.map((item, index) => (
          <details
            key={item.name}
            open={index === 0}
            className="group border-t border-border py-6 last:border-b"
          >
            <summary className="flex min-h-8 list-none items-center gap-5">
              <span className={labelClass}>0{index + 1}</span>
              <h3 className="flex-1 text-base sm:text-xl">{item.name}</h3>
              <Plus size={18} className="group-open:hidden" />
              <Minus size={18} className="hidden group-open:block" />
            </summary>
            <p className="ml-10 mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const container = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  useEffect(() => {
    if (!container.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(Number((entry.target as HTMLElement).dataset.project))
        })
      },
      { rootMargin: "-15% 0px -40% 0px", threshold: 0 },
    )
    container.current
      .querySelectorAll("[data-project]")
      .forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-border pb-20 pt-16 lg:pb-32 lg:pt-24"
    >
      <div data-reveal className="flex flex-wrap items-start gap-4 sm:gap-7">
        <h2
          id="projects-title"
          className="text-[clamp(2.55rem,7.4vw,8.5rem)] leading-[1.1]"
        >
          SELECTED WORKS
        </h2>
        <span className="mt-2 text-lg text-muted-foreground sm:mt-4 sm:text-2xl">
          [ 09 ]
        </span>
      </div>
      <div className="mt-7 flex flex-col gap-4 md:ml-[41%] md:flex-row md:gap-8 lg:mt-10">
        <span className={`${labelClass} shrink-0 pt-1`}>[ Projects ]</span>
        <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
          A selection of ideas brought to life.
          <br />
          Different challenges. The same attention to detail.
        </p>
      </div>
      <div
        ref={container}
        className="mt-12 grid items-start gap-9 md:grid-cols-12 md:gap-8 lg:mt-20 lg:gap-16"
      >
        <aside
          aria-hidden="true"
          className="sticky top-16 hidden md:col-span-5 md:block"
        >
          <div className="flex overflow-hidden text-[clamp(8rem,23vw,25rem)] leading-[1.05] tracking-[-0.045em]">
            <span>0</span>
            <span key={active} className="hero-enter">
              {active + 1}
              <span className="text-accent">.</span>
            </span>
          </div>
          <p className={`${labelClass} mt-7`}>{projects[active].category}</p>
          <div
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Project navigation"
          >
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={`#project-${index}`}
                tabIndex={-1}
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] transition-colors ${
                  active === index
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary"
                }`}
              >
                {index + 1}
              </a>
            ))}
          </div>
          <p className="mt-7 max-w-52 text-xs leading-6 text-muted-foreground">
            Scroll through the work.
            <br />
            Each one, a new chapter.
          </p>
        </aside>
        <div className="flex min-w-0 flex-col gap-16 md:col-span-7 md:gap-24">
          {projects.map((project, index) => (
            <article
              id={`project-${index}`}
              data-project={index}
              key={project.name}
              className="scroll-mt-10"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className={labelClass}>
                  0{index + 1} / {project.category}
                </span>
                <span className={labelClass}>{project.year}</span>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${
                  project.live ? "Visit" : "View source for"
                } ${project.name} (opens in a new tab)`}
                className="project-link group block [perspective:1200px]"
              >
                <div data-reveal>
                  <div className="project-paper relative border border-primary/10 bg-card shadow-[0_4px_20px_#0f254108]">
                    <img
                      src={project.image}
                      srcSet={`${project.small} 720w, ${project.image} 1440w`}
                      sizes="(min-width: 1800px) 950px, (min-width: 768px) 55vw, 94vw"
                      alt={`${project.name} website — complete, uncropped preview`}
                      width="1440"
                      height={imageHeights[project.name]}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full object-contain"
                    />
                    <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-background/95 text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:bottom-5 sm:right-5 sm:h-12 sm:w-12">
                      <ArrowUpRight size={21} />
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl">
                    {project.name}
                  </h3>
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
                    {project.live ? "Visit website" : "View source"}
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/25 px-3 py-1.5 text-[10px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs leading-6 text-muted-foreground">
                  <span className="text-primary">Built:</span> {project.built}
                </p>
                {project.source && project.live && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex min-h-8 items-center gap-2 text-[11px] text-muted-foreground hover:text-primary"
                  >
                    Source code <Github size={12} />
                    <ArrowUpRight size={12} />
                  </a>
                )}
                {!project.live && (
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Source available on GitHub · Live demo not currently
                    published
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ name }: { name: string }) {
  const [emailOpened, setEmailOpened] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${data.get("name")}`,
    )
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    )
    window.location.href = `mailto:engahmedeltweel@gmail.com?subject=${subject}&body=${body}`
    setEmailOpened(true)
  }
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-border py-20 lg:py-28"
    >
      <div className="flex items-center justify-between">
        <span className={labelClass}>[ Have an idea? ]</span>
        <span className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Available for
          work
        </span>
      </div>
      <h2
        id="contact-title"
        data-reveal
        className="mt-9 text-[clamp(3rem,9.7vw,11rem)] leading-[1.05]"
      >
        LET'S CONNECT<span className="text-[#7894b4]">.</span>
      </h2>
      <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <p className="max-w-sm text-lg leading-8 text-muted-foreground">
            Good things start with a conversation.
            <br />
            Tell me what you're thinking.
          </p>
          <a
            href="mailto:engahmedeltweel@gmail.com"
            className="mt-7 inline-flex max-w-full items-center gap-3 border-b border-primary pb-2 text-[clamp(0.85rem,1.5vw,1.5rem)] break-all"
          >
            engahmedeltweel@gmail.com{" "}
            <ArrowUpRight className="h-5 w-5 shrink-0" />
          </a>
          <div className="mt-5 hidden md:block">
            <Orb />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Your name
            </label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              maxLength={80}
              defaultValue={name}
              placeholder="How should I call you?"
              className="mt-2 block min-h-12 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="mt-2 block min-h-12 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className={labelClass}>
              A little about your project
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={3}
              maxLength={4000}
              placeholder="The idea, the ambition, the possibilities..."
              className="mt-2 block w-full resize-y border-b border-border bg-transparent py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className={buttonClass}>
              LET'S TALK <ArrowUpRight size={16} />
            </button>
            <span className="text-[10px] text-muted-foreground">
              Opens your email app
            </span>
          </div>
          {emailOpened && (
            <p
              role="status"
              className="text-xs leading-6 text-muted-foreground"
            >
              Your email app will open with your message. If it doesn't, email
              me directly at engahmedeltweel@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ahmed-eltweel?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    { name: "GitHub", url: "https://github.com/ahmedeltawel123" },
    { name: "Facebook", url: "https://www.facebook.com/share/19MUspxM7M/" },
    { name: "WhatsApp", url: "https://wa.me/201558063129" },
  ]
  return (
    <footer className="border-t border-border pb-7 pt-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <p className="text-sm">Made with intention.</p>
        <nav
          aria-label="Social links"
          className="flex flex-wrap gap-x-6 gap-y-2"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-xs transition-opacity hover:opacity-55"
            >
              {social.name}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <p className="text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} Ahmed Mohamed. All rights reserved.
        </p>
        <a
          href="#home"
          className="inline-flex min-h-10 items-center gap-2 text-[10px] uppercase tracking-wider"
        >
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  )
}

function Portfolio() {
  const [name] = useState(readName)
  const main = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = main.current
    if (!element) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px 40px 0px" },
    )
    element.classList.add("motion-ready")
    element
      .querySelectorAll("[data-reveal]")
      .forEach((target) => observer.observe(target))
    return () => {
      observer.disconnect()
      element.classList.remove("motion-ready")
    }
  }, [])
  return (
    <div
      ref={main}
      className="page-atmosphere min-h-screen overflow-x-clip font-sans font-normal"
    >
      <a
        href="#main-content"
        className="sr-only fixed left-5 top-5 z-50 rounded bg-primary p-4 text-primary-foreground focus:not-sr-only"
      >
        Skip to content
      </a>
      <main
        id="main-content"
        className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-12 xl:px-16"
      >
        <Hero name={name} />
        <About />
        <ToolsTicker />
        <Services />
        <Projects />
        <Contact name={name} />
        <Footer />
      </main>
    </div>
  )
}

function Register() {
  const [name, setName] = useState(readName)
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!name.trim()) return
    try {
      localStorage.setItem("ahmed-visitor-name", name.trim())
    } catch {}
    navigate("/")
  }
  return (
    <main className="page-atmosphere flex min-h-svh flex-col px-6 sm:px-12">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between py-8">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 text-xs"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <span className={labelClass}>Let's get acquainted</span>
      </header>
      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-8 py-16 md:grid-cols-2">
        <div className="hero-enter">
          <span className={labelClass}>[ A simple introduction ]</span>
          <h1 className="mt-6 text-[clamp(3rem,7vw,6.5rem)] leading-[1.15]">
            Hello
            <br />
            My Name<span className="text-[#7894b4]">...</span>
          </h1>
          <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">
            Every great collaboration starts with a hello. Tell me your name and
            make yourself at home.
          </p>
          <div className="mt-6 hidden md:block">
            <Orb />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md md:justify-self-end"
        >
          <label htmlFor="visitor-name" className={labelClass}>
            What should I call you?
          </label>
          <input
            id="visitor-name"
            name="name"
            autoComplete="given-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={60}
            pattern=".*\S.*"
            required
            placeholder="Your name"
            className="mt-4 block w-full border-b border-primary/30 bg-transparent py-5 text-2xl outline-none focus:border-primary sm:text-3xl"
          />
          <button type="submit" className={`${buttonClass} mt-8`}>
            NICE TO MEET YOU <ArrowRight size={17} />
          </button>
          <p className="mt-5 text-[11px] leading-6 text-muted-foreground">
            Just a friendly hello, not an account.
            <br />
            Your name stays in this browser only.
          </p>
        </form>
      </div>
      <p className="mx-auto w-full max-w-7xl border-t border-border py-6 text-[10px] text-muted-foreground">
        AHMED MOHAMED · Thoughtful digital experiences.
      </p>
    </main>
  )
}

const router = createBrowserRouter([
  { path: "/", Component: Portfolio },
  { path: "/register", Component: Register },
  { path: "*", Component: Portfolio },
])

export default function App() {
  return <RouterProvider router={router} />
}
