import Navbar from "../components/navbar";

export default function About() {
  return (
    <div className="p-8 flex justify-center">
      <div className="border rounded-lg p-10 bg-white shadow-lg max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">Sobre Mim</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Tenho 19 anos e estou no último semestre de Sistemas para Internet. Comecei minha jornada na área de tecnologia há 3 meses e, desde então, venho aprendendo bastante sobre o desenvolvimento front-end.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          No entanto, o que realmente me encanta é a área de dados. Gosto de explorar informações, realizar consultas SQL e transformar dados em insights que podem ser usados para tomar decisões mais estratégicas.
          Estou investindo cada vez mais nesse campo, pois é nele que quero construir minha carreira.
        </p>
      </div>
    </div>
  );
}
