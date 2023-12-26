import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pricing page",
    description: "Los precios",
    authors: [{name: "Wuilmer Carbajal", url: "wcabajal"}],
    keywords: "pricing, wcarbajal, otros"
}

export default function PricingPage() {
    return (
       <span className="text-5xl">Pricing Page</span> 

    )
  }
  