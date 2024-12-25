import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Research Experience
      </h1>
      <div className="h-full w-[1000px] flex  md:flex-cols-3 gap-10 px-10">
        <ProjectCard
            key="Heart Disease Prediction Using Federated Learning"
            src="/projects/project-2.png"
            title="Heart Disease Prediction Using Federated Learning"
            description="Pioneered a privacy-focused cardiovascular risk prediction framework using FeedForward Neural Networks and Federated Learning, achieving 92% prediction accuracy while ensuring data security through decentralized model training. Enhanced patient outcomes by increasing engagement in cardiovascular health management by 30% through a daily health tracking feature. Earned recognition with the acceptance of a research paper by ICRIC-2023 (International Conference on Innovations in Computing), highlighting the innovation in predictive healthcare technology."
            link="https://link.springer.com/chapter/10.1007/978-981-97-7862-1_3"
        />
      </div>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid md:grid-cols-3 gap-10 px-10">
      {PROJECTS.map((project) => (
          <ProjectCard
          key={project.title}
          src={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
