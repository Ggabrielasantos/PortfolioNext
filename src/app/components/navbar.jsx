import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4 flex justify-center gap-6">
      <Link href="/">Home</Link>
      <Link href="/about">Sobre</Link>
      <Link href="/projects">Projetos</Link>
      <Link href="/skills">Habilidades</Link>
      <Link href="/contact">Contato</Link>
    </nav>
  );
};

export default Navbar;
