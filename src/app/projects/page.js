import Navbar from "../components/navbar";
import ProjectCard from "../components/card";

export default function Projects() {
  const projects = [
    { title: "Projeto 1", description: "Deixei apenas de forma ilustrativa pois nao adicionei os projetos ao github" },
    { title: "Projeto 2", description: "Descrição do projeto" },
  ];

  return (
    <div>
      <section className="p-8">
        <h1 className="text-3xl font-bold">Meus Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
