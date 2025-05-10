import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PriceBlock from "../components/PriceBlock" // Assuming we'll create this
import Testimonials from "../components/Testimonials"
import BeforeAfterGallery from "../components/BeforeAfterGallery"

// We can remove or replace styles from index.module.css later
// import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => {
  const images = data.allFile.nodes

  return (
    <Layout>
      <section id="portfolio" style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2em', fontWeight: '300' }}>Портфоліо</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {images.map(image => {
            const imageData = getImage(image)
            return (
              <GatsbyImage
                key={image.id}
                image={imageData}
                alt={image.name}
                style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '4px' }}
              />
            )
          })}
        </div>
      </section>

      {/* Before and After Section START */}
      <BeforeAfterGallery />
      {/* Before and After Section END */}

      <section id="prices" style={{ marginBottom: '3rem', padding: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2em', fontWeight: '300' }}>Послуги та Ціни</h2>
        <PriceBlock />
      </section>

      {/* Testimonials Section START */}
      <Testimonials />
      {/* Testimonials Section END */}

      {/* New Contact Section START */}
      <section id="contact" style={{ marginBottom: '3rem', padding: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2em', fontWeight: '300' }}>Контакти</h2>
        {(() => {
          // Replicating styles and logic from the old contact page directly here
          // You might want to refactor this into a component later for cleanliness
          const contactInfoStyles = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            maxWidth: "600px",
            width: "100%",
            textAlign: "center",
            margin: "0 auto", // Center the block
          };

          const contactLinkStyles = {
            fontSize: "1.2em",
            color: "var(--color-primary)",
            textDecoration: "none",
            padding: "10px 15px",
            border: "1px solid var(--color-primary)",
            borderRadius: "var(--border-radius)",
            transition: "background-color 0.3s ease, color 0.3s ease",
            display: 'block', // Make links block for better spacing
            width: 'fit-content',
          };
          
          const handleLinkHover = (e, isHovering) => {
            if (isHovering) {
              e.currentTarget.style.backgroundColor = "var(--color-primary)";
              e.currentTarget.style.color = "#fff";
            } else {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--color-primary)";
            }
          };

          const phoneNumber = "+380950219125"; // Replace with your phone number
          const telegramUsername = "justina_p"; // Replace with your Telegram username

          return (
            <div style={contactInfoStyles}>
              <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>
                Ви можете зв'язатися зі мною за телефоном або через месенджери.
                Буду рада обговорити ваші ідеї та відповісти на будь-які запитання!
              </p>
              
              <a 
                href={`tel:${phoneNumber}`}
                style={contactLinkStyles}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Телефон: {phoneNumber}
              </a>
              
              <a 
                href={`viber://chat?number=${phoneNumber.replace('+', '')}`}
                style={contactLinkStyles}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Написати у Viber
              </a>
              
              <a 
                href={`https://t.me/${telegramUsername}`}
                target="_blank" 
                rel="noopener noreferrer"
                style={contactLinkStyles}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Написати у Telegram
              </a>
              
              <a 
                href="https://www.instagram.com/putvinskaite_photo/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={contactLinkStyles}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Перейти в Instagram
              </a>
            </div>
          );
        })()}
      </section>
      {/* New Contact Section END */}

    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        extension: { eq: "jpg" }
        name: { in: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"] }
      }
    ) {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Головна" />

export default IndexPage
