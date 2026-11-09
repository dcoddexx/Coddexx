import { projectsObjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export const Projects = () => {
  return (
    <div className="w-full py-[90px] bg-bg border-t-[0.5px] border-t border-line px-[18px]">
      <div className="flex gap-[10px]">
        <p className="text-muted text-[15px] md:text-[20px] font-mono">
          PROJECT ARCHIVE
        </p>
      </div>

      <h1 className="text-text text-[38px] font-family-sans font-[600] my-[22px]">
        Products built for{" "}
        <span className="text-accent">clarity, scale, and momentum.</span>
      </h1>

      <p className="text-[18px] md:text-[23px] text-muted font-family-sans my-[26px]">
        A collection of product platforms, design systems, and data-rich
        experiences shaped from strategy through production.
      </p>

      <div className="flex border border-t-line my-[32px] gap-[80px]">
        <div className="">
          <p className="font-sans text-text text-[25px] md:text-[30px]">06</p>
          <p className="font-family-sans text-muted-2 text-[15px] md:text-[20px]">
            SELECTED PROJECTS
          </p>
        </div>

        <div className="">
          <p className="font-sans text-text text-[25px] md:text-[30px]">04</p>
          <p className="font-family-sans text-muted-2 text-[15px] md:text-[20px]">
            INDUSTRIES
          </p>
        </div>
      </div>

      <div>
        {projectsObjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
