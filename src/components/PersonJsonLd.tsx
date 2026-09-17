import { Helmet } from "react-helmet-async";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ganesh Murali",
  jobTitle: "Frontend & Mobile Developer",
  url: "https://ganeshmurali.dev",
  image: "https://ganeshmurali.dev/og-image.jpg",
  email: "mailto:ganeshmdckap@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/ganeshmurali-dev",
    "https://www.linkedin.com/in/ganesh-murali-/",
    "https://www.instagram.com/__gane.sha__/",
  ],
  knowsAbout: [
    "React Native",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "UI/UX Design",
    "Tailwind CSS",
    "Mobile App Development",
    "CRM/ERP Integrations",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Madras",
  },
  worksFor: {
    "@type": "Organization",
    name: "AstroKure AI Private Limited",
  },
};

const PersonJsonLd = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
  </Helmet>
);

export default PersonJsonLd;
