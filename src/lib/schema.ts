import { SITE } from "@/constants/site";
import { FAQS } from "@/data/faq";
import { PRICING_PLANS } from "@/data/pricing";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    image: `${SITE.url}${SITE.ogImage}`,
    description: SITE.description,
    medicalSpecialty: "MedicalCannabis",
    areaServed: {
      "@type": "State",
      name: "Illinois",
      identifier: "IL",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "IL",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: "US",
    },
    priceRange: "$129 - $149",
    sameAs: Object.values(SITE.social).filter(Boolean),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}#organization` },
    inLanguage: "en-US",
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Illinois Medical Marijuana Card Evaluation",
    description:
      "Online evaluation by Illinois-licensed physicians for the state Medical Cannabis Patient Program.",
    procedureType: "https://schema.org/DiagnosticProcedure",
    provider: { "@id": `${SITE.url}#organization` },
    offers: PRICING_PLANS.map((plan) => ({
      "@type": "Offer",
      name: plan.title,
      description: plan.subtitle,
      price: plan.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/#pricing`,
    })),
  };
}

export function breadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#localbusiness`,
    name: SITE.name,
    image: `${SITE.url}${SITE.ogImage}`,
    url: SITE.url,
    priceRange: "$129 - $149",
    address: {
      "@type": "PostalAddress",
      addressRegion: "IL",
      addressCountry: "US",
    },
    areaServed: { "@type": "State", name: "Illinois" },
  };
}
