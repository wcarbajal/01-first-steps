import { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO Title",
    description: "SEO Description",
    authors: [{name: "Wuilmer Carbajal", url: "wcabajal"}],
    keywords: "nextjs, wcarbajal, otros"
}

export default function ContacPage() {
    return (
      
       <span className="text-5xl">Contact Page</span> 
      
    )
  }
  