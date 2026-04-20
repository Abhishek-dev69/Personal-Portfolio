import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectsGallery } from "@/components/projects-gallery";
import { SectionHeading } from "@/components/section-heading";
import { projects, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore selected product and web development projects by ${siteConfig.name}.`,
};

export default function ProjectsPage() {
  return (
    <section className="section-space">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Projects"
          title="Work designed to feel premium, useful, and production-ready."
          description="Each placeholder project includes a description, tech stack, and links you can easily replace with real work."
        />
        <ProjectsGallery projects={projects} />
      </Container>
    </section>
  );
}
