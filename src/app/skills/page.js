import Navbar from "../components/navbar";

export default function Skills() {
  return (
    <div className="skills-container p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="skill-card bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center">
          <i className="fa-brands fa-html5 text-4xl mb-2"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center">
          <i className="fa-brands fa-css3-alt text-4xl mb-2"></i>
          <p>CSS</p>
        </div>
        <div className="skill-card bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center">
          <i className="fa-brands fa-js-square text-4xl mb-2"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center">
          <i className="fa-brands fa-react text-4xl mb-2"></i>
          <p>Banco de dados</p>
        </div>
        <div className="skill-card bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center">
          <i className="fa-brands fa-node-js text-4xl mb-2"></i>
          <p>Braze</p>
        </div>
        <div className="skill-card bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center">
          <i className="fa-brands fa-python text-4xl mb-2"></i>
          <p>Amplitude</p>
        </div>
      </div>
    </div>
  );
}
