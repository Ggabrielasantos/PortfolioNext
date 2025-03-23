import Image from "next/image";

const Inicio = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center text-center bg-white shadow-lg border rounded-lg max-w-2xl mx-auto p-8">
        <Image
          src="/profile.jpg" 
          alt=""
          width={150} 
          height={150}
          className="rounded-full border-4 border-gray-300 shadow-lg"
        />
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-gray-900">Olá, eu sou a Gabriela 👋</h1>
          <p className="text-lg text-gray-700 mt-2">
            Estou no último semestre de Sistemas para Internet. Trabalho na área de tecnologia há 3 meses e estou construindo minha carreira.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
