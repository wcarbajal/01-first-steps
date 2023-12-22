import { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO Title",
    description: "SEO Description",
    authors: [{name: "Wuilmer Carbajal", url: "wcabajal"}],
    keywords: "nextjs, wcarbajal, otros"
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
     <span className="text-5xl">About Page</span> 
    </div>
  )
}
