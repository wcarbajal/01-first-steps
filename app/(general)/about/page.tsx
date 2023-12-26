import { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO Title",
    description: "SEO Description",
    authors: [{name: "Wuilmer Carbajal", url: "wcabajal"}],
    keywords: "nextjs, wcarbajal, otros"
}

export default function AboutPage() {
  return (
    
      <span className="text-5xl">About Page</span> 
    
  )
}
