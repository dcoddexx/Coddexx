import ProjectCard from "../components/ProjectCard";
import { getProject } from "../service/projectService";
import { useState, useEffect } from "react";
import { type ProjectTypes } from "../types/projectTypes";

export const Projects = () => {
  // I NEED THREE STATE TO HANDLE UI FOR FETCHING DATA OVER NETWORK
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        setLoading(true);
        setError(null);

        const data = await getProject();
        setProjects(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-[90px] bg-bg px-[18px] flex justify-center items-center">
        <p className="text-muted text-[18px] font-family-sans">
          Loading projects...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-[90px] bg-bg px-[18px] flex justify-center items-center">
        <p className="text-accent text-[18px] font-family-sans">
          Failed to fetch projects. {error}
        </p>
      </div>
    );
  }

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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
