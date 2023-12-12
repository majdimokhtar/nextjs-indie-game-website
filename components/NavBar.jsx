import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="bg-gray-700 p-4">
      <div className="container mx-auto">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/" passHref>
              <button className="font-bold text-white text-2xl hover:text-orange-500 focus:outline-none">
                Indie Gamer
              </button>
            </Link>
          </li>
          <li className="ml-auto">
            <Link href="/reviews" passHref>
              <button className="text-white hover:text-orange-500 focus:outline-none mr-4">
                Reviews
              </button>
            </Link>
            <Link href="/about" passHref>
              <button className="text-white hover:text-orange-500 focus:outline-none">
                About
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
