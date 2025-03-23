import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold text-pink-500 mb-6">Meus Contatos</h1>

      <div className="grid gap-6">
        <Link href="05gabrielasantos@gmail.com" target="_blank">
          <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg shadow-lg hover:bg-pink-500 transition">
            <span className="text-2xl">📧</span>
            <span className="text-lg">Email</span>
          </div>
        </Link>

        <Link href="https://github.com/seuusuario" target="_blank">
          <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg shadow-lg hover:bg-pink-500 transition">
            <span className="text-2xl">🐱</span>
            <span className="text-lg">github</span>
          </div>
        </Link>

        <Link href="https://www.linkedin.com/in/05gabrielasantos/" target="_blank">
          <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg shadow-lg hover:bg-pink-500 transition">
            <span className="text-2xl">🔗</span>
            <span className="text-lg">linkedin</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
