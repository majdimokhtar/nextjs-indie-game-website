import Heading from "@/components/Heading"

export const metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <>
      <Heading>About</Heading>
      <p className="text-gray-600 mb-8">
        Welcome to <strong className="text-indigo-600">Indie Gamer</strong> –
        Your Ultimate Destination for Indie Gaming! Dive into the vibrant world
        of independent game development with Indie Gamer. We are your go-to
        platform for discovering, exploring, and experiencing the most exciting
        indie games created by talented developers from around the globe.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Why Choose Indie Gamer?
        </h2>
        <ul className="list-disc pl-8 text-gray-700">
          <li>
            Curated Selection: Our team carefully curates a diverse collection
            of indie games, ensuring that you have access to unique and
            innovative titles that might not be found elsewhere.
          </li>
          <li>
            In-Depth Reviews: Get insightful and honest reviews of each indie
            game on our platform. We provide detailed analyses of gameplay,
            graphics, storyline, and overall user experience to help you make
            informed decisions.
          </li>
          <li>
            Exclusive Content: Discover exclusive interviews with indie game
            developers, gaining a behind-the-scenes look at the creative process
            and the stories behind your favorite games.
          </li>
          <li>
            Community Engagement: Connect with like-minded gamers in our vibrant
            community. Share your thoughts, recommendations, and experiences,
            and stay up-to-date with the latest indie gaming trends.
          </li>
          <li>
            User-Friendly Interface: Our website is designed with you in mind.
            Navigate seamlessly through our user-friendly interface to find the
            perfect indie game for your preferences.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Explore Our Categories:
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-700">
          <li className="flex items-center">
            <span className="mr-2 text-indigo-600">Action & Adventure:</span>{" "}
            Immerse yourself in thrilling worlds filled with action-packed
            adventures.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-indigo-600">Puzzle & Strategy:</span>{" "}
            Challenge your mind with thought-provoking puzzles and strategic
            gameplay.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-indigo-600">
              Simulation & Role-Playing:
            </span>{" "}
            Create and live your own stories in immersive simulation and RPG
            games.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-indigo-600">Multiplayer Madness:</span>{" "}
            Connect with friends or make new ones in our selection of
            multiplayer indie games.
          </li>
        </ul>
      </section>

      <p className="text-gray-700">
        At Indie Gamer, we celebrate the creativity, diversity, and innovation
        that indie game developers bring to the gaming industry. Join us on a
        journey of discovery and support the indie gaming community!
      </p>
    </>
  )
}
