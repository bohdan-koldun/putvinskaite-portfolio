import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PriceBlock from "../components/PriceBlock" // Assuming we'll create this

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

      <section id="contact" style={{ marginBottom: '3rem', padding: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2em', fontWeight: '300' }}>Послуги та Ціни</h2>
        <PriceBlock />
      </section>

      <section style={{ marginBottom: '3rem', padding: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2em', fontWeight: '300' }}>Стрічка Instagram</h2>
        {/* Placeholder for Instagram feed */}
        <p style={{ textAlign: 'center' }}>Стрічка Instagram буде тут. Наразі, відвідайте <a href="https://www.instagram.com/putvinskaite_photo" target="_blank" rel="noopener noreferrer">@putvinskaite_photo в Instagram</a>.</p>
      </section>
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
