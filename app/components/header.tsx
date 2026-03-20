export default function Header() {
  return (
    <header className="h-20 flex justify-evenly items-center bg-black text-white font-bold fixed w-full">
      <div>
        <h2>FSantech</h2>
      </div>
      <nav className="p-3 w-64">
        <ul className="flex flex-row justify-between">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <a href="">Quem Somos</a>
          </li>
        </ul>
      </nav>
      <div>
        <h2>FSantech</h2>
      </div>
    </header>
  );
}
