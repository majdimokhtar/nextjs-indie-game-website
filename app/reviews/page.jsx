import Link from "next/link"
import Heading from "@/components/Heading"
import { getReviews } from "@/lib/review"
import Image from "next/image"
import PaginationBar from "@/components/PaginationBar"

// export const revalidate = 30
const PAGE_SIZE = 6

export const metadata = {
  title: "Reviews",
}

export default async function ReviewsPage({ searchParams }) {
  const page = parsePageParams(searchParams.page)
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page)
  // console.log(reviews)
  return (
    <>
      <Heading>Reviews</Heading>
      <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
      <ul className="flex flex-row gap-3 flex-wrap">
        {reviews.map((review, index) => {
          return (
            <li
              key={review.slug}
              className="bg-white border rounded shadow w-80 hover:shadow-xl"
            >
              <Link href={`/reviews/${review.slug}`}>
                <Image
                  src={review.image}
                  alt=""
                  width="320"
                  height="180"
                  className="rounded-t"
                  priority={index === 0}
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

function parsePageParams(paramsValue) {
  if (paramsValue) {
    const page = parseInt(paramsValue)
    if (isFinite(page) && page > 0) {
      return page
    }
    return 1
  }
}
