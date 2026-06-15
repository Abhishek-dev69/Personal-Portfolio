import type { Project } from "@/data/site";

type ProjectVisualProps = {
  project: Project;
  index?: number;
};

const visualStyles = [
  "project-visual-coral",
  "project-visual-blue",
  "project-visual-sand",
  "project-visual-ink",
];

export function ProjectVisual({ project, index = 0 }: ProjectVisualProps) {
  const style = visualStyles[index % visualStyles.length];
  const isMobile = /iOS|Mobile App/i.test(project.category);

  return (
    <div className={`project-visual ${style}`} aria-label={project.imageLabel} role="img">
      <div className="project-visual-topline">
        <span>{project.category}</span>
        <span>0{index + 1}</span>
      </div>

      {isMobile ? (
        <div className="project-device-stage" aria-hidden="true">
          <div className="project-phone project-phone-back">
            <span />
            <i />
            <i />
          </div>
          <div className="project-phone project-phone-front">
            <span />
            <strong>{project.title.split(" ")[1] ?? "App"}</strong>
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : (
        <div className="project-browser-stage" aria-hidden="true">
          <div className="project-browser-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="project-browser-content">
            <div className="project-browser-sidebar" />
            <div className="project-browser-main">
              <span />
              <span />
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="project-visual-caption">{project.impact ?? project.imageLabel}</p>
    </div>
  );
}
