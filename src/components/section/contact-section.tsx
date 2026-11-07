import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <section className="border rounded-xl p-10 relative overflow-hidden">
      <div className="absolute -top-0 left-1/2 -translate-x-1/2 border bg-primary z-10 rounded-b-xl px-4 py-1">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 h-1/2 rounded-xl overflow-hidden pointer-events-none">
        <FlickeringGrid className="h-full w-full" squareSize={2} gridGap={2} style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)"
        }} />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center pt-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's build something useful.</h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          I enjoy turning complex problems into practical systems. Explore my work and connect with me on{" "}
          <Link href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline underline-offset-4">GitHub</Link>
          {" "}or learn more about my work at{" "}
          <Link href="https://jeonglab.net/about" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline underline-offset-4">JEONG LAB</Link>.
        </p>
      </div>
    </section>
  );
}
