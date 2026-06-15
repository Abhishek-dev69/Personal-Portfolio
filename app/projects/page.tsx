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
    <section className="page-hero">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Project archive"
          title="Published apps, live platforms, and experiments with a product point of view."
          description="Browse work across mobile development, event technology, fintech, workflow tools, AI, and full-stack web engineering."
        />
        <ProjectsGallery projects={projects} />
      </Container>
    </section>
  );
}
