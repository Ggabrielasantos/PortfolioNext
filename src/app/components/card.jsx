import Image from "next/image";

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg">
      <Image src={image} alt={title} width={300} height={200} className="rounded-lg"/>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProjectCard;
