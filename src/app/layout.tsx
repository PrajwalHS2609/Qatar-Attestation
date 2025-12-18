import "./globals.css";
import NavBar from "./../Components/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";
import PopUp from "./../Components/PopUp/PopUp";
import Whatsapp from "./../Components/Whatsapp/Whatsapp";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/Components/style.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content="YJNyWVemEAUeqSBuf1p5P1xqaEvS0DdzFon8TI_ppUw"
        />

        <link rel="icon" type="image/png" href="./goodWayFavicon.ico" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Qatar attestation and why is it required?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Qatar attestation is the official verification of Indian-issued documents to make them legally valid for employment, education, business, and residency purposes in Qatar.",
                },
              },
              {
                "@type": "Question",
                name: "Which documents require Qatar attestation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Educational certificates, personal documents such as birth and marriage certificates, and commercial documents like MOA, POA, and company invoices require Qatar attestation.",
                },
              },
              {
                "@type": "Question",
                name: "How long does Qatar attestation take in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Qatar attestation typically takes around 5 working days, depending on the document type and issuing authority.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of Qatar attestation in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of Qatar attestation in Bangalore generally ranges from ₹5,000 to ₹15,000, based on the document type and processing requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Is Qatar attestation mandatory for employment visas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Qatar attestation is mandatory for employment visas, professional contracts, and work permits issued by employers in Qatar.",
                },
              },
              {
                "@type": "Question",
                name: "Who issues Qatar attestation in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Qatar attestation is carried out through State HRD or SDM, the Ministry of External Affairs (MEA), and the Qatar Embassy in India, followed by MOFA attestation in Qatar if required.",
                },
              },
              {
                "@type": "Question",
                name: "Can Qatar attestation be done without visiting government offices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, government-approved agencies like Goodway Attestation provide complete doorstep services including document pickup, processing, and delivery.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if documents are not properly attested for Qatar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Improper or incomplete attestation can lead to visa rejection, job offer cancellation, application delays, or legal issues in Qatar.",
                },
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.goodwayattestation.com/#localbusiness",
            name: "Goodway Attestation",
            url: "https://www.goodwayattestation.com",
            logo: "https://qatarattestationbangalore.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6174c7ac.png&w=640&q=75",
            image:
              "https://qatarattestationbangalore.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FQatarHeader.95e522b7.png&w=1080&q=75",
            description:
              "Goodway Attestation is a government-approved attestation agency in Bangalore offering Qatar attestation services for educational, personal, and commercial documents with guaranteed delivery.",
            telephone: "+91 9148889666",
            priceRange: "₹5000 - ₹15000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bangalore",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560003",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "12.9716",
              longitude: "77.5946",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "20:30",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Bangalore",
            },
            sameAs: [
              "https://www.facebook.com/goodwayattestation",
              "https://www.instagram.com/goodwayattestation.india/",
              "https://www.linkedin.com/company/goodway-attestation/",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Attestation Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Qatar Attestation in Bangalore",
                    description:
                      "Fast and government-approved Qatar attestation service for Indian-issued documents.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "MEA Attestation",
                    description:
                      "Ministry of External Affairs attestation for educational, personal, and commercial certificates.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Embassy & MOFA Attestation",
                    description:
                      "Complete embassy and MOFA attestation services for Qatar and other countries.",
                  },
                },
              ],
            },
          })}
        </script>
      </head>
      <body>
        <NavBar />
        {children}
        <PopUp />
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
