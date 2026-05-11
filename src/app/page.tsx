import { ProjectCarousel } from "@/components/ProjectCarousel";
import { SectionNav } from "@/components/SectionNav";
import { siteContent } from "@/content/siteContent";

export default function Home() {
  return (
    <>
      <SectionNav />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <section id="hero" className="scroll-mt-20 py-12">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Welcome!
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {siteContent.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {siteContent.heroTagline}
          </p>
        </section>

        <section id="about" className="scroll-mt-20 py-12">
          <h2 className="text-2xl font-medium text-ink">About</h2>
          <p className="mt-4 leading-relaxed text-muted">{siteContent.about}</p>
        </section>

        <section id="projects" className="scroll-mt-20 py-12">
          <h2 className="text-2xl font-medium text-ink">Projects</h2>
          <p className="mt-3 text-sm text-muted">
            Take a look!
          </p>
          {/* Slider + carousel: edit projects in src/content/siteContent.ts */}
          <ProjectCarousel projects={siteContent.projects} />
        </section>

        <section id="likes" className="scroll-mt-20 py-12">
          <h2 className="text-2xl font-medium text-ink">Things I Like</h2>
          <ul className="mt-4 space-y-3 text-muted">
            {siteContent.thingsILike.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          {/* YouTube embed placeholder:
            Add iframe blocks here when you want to embed videos.
            Example:
            <iframe
              className="mt-6 h-64 w-full rounded-xl"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube video"
              allowFullScreen
            />
          */}
        </section>

        <section id="now" className="scroll-mt-20 py-12">
          <h2 className="text-2xl font-medium text-ink">Now</h2>
          <p className="mt-4 leading-relaxed text-muted">{siteContent.now}</p>
        </section>

        <section id="contact" className="scroll-mt-20 py-12">
          <h2 className="text-2xl font-medium text-ink">Contact</h2>
          <div className="mt-4 flex flex-wrap gap-4 text-muted">
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="transition-colors hover:text-ink"
            >
              Email
            </a>
            <a
              href={siteContent.contact.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
