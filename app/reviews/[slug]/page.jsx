import Heading from "@/components/Heading"
import ShareLinkBtn from "@/components/ShareLinkBtn"
import { getReview, getSlugs } from "@/lib/review"
import Image from "next/image"
import { notFound } from "next/navigation"

// export const dynamic = "force-dynamic"

// export const revalidate = 30

export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug)
  if (!review) {
    return notFound()
  }
  return {
    title: review.title,
  }
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug)
  if (!review) {
    return notFound()
  }
  return (
    <>
      <Heading>{review.title} </Heading>
      <p className="font-semibold pb-3">{review.subtitle}</p>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date} </p>
        <ShareLinkBtn />
      </div>
      <Image
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  )
}
