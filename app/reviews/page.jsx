import Link from "next/link"
import Heading from "@/components/Heading"
import { getReviews, getSlugs } from "@/lib/review"

export async function generatingStaticParams() {
  const slugs = await getSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function ReviewsPage() {
  const reviews = await getReviews()
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row gap-3 flex-wrap">
        {reviews.map((review) => {
          return (
            <li
              key={review.slug}
              className="bg-white border rounded shadow w-80 hover:shadow-xl"
            >
              <Link href={`/reviews/${review.slug}`}>
                <img
                  src={review.image}
                  alt=""
                  width="320"
                  height="180"
                  className="rounded-t"
                />
                <h2 className="font-orbitron font-semibold py-1 text-center">
                  {review.title}
                </h2>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
