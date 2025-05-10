import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PriceBlock from "../components/PriceBlock" // Assuming we'll create this
import Testimonials from "../components/Testimonials"
import BeforeAfterGallery from "../components/BeforeAfterGallery"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Optional YARL plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

// We can remove or replace styles from index.module.css later
// import * as styles from "../components/index.module.css"

const INITIAL_VISIBLE_IMAGES = 6;

const IndexPage = ({ data }) => {
  const allImages = data.allFile.nodes;

  const [visibleImageCount, setVisibleImageCount] = React.useState(INITIAL_VISIBLE_IMAGES);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const imagesToShow = allImages.slice(0, visibleImageCount);

  const handleShowMore = () => {
    setVisibleImageCount(allImages.length);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxSlides = allImages.map(node => ({
    gridImage: node.childImageSharp.gridImage,
    lightboxImage: node.childImageSharp.lightboxImage,
    thumbnailImage: node.childImageSharp.thumbnailImage,
    alt: node.name,
  }));

  const galleryItemStyle = {
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    overflow: 'hidden', 
  };

  const showMoreButtonStyle = {
    display: 'block',
    margin: '2rem auto',
    padding: '10px 25px',
    fontSize: '1.1em',
    color: '#fff',
    backgroundColor: 'var(--color-primary, #007bff)',
    border: 'none',
    borderRadius: 'var(--border-radius, 4px)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <Layout>
      <section id="portfolio" style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2em', fontWeight: '300' }}>Портфоліо</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {imagesToShow.map((imageNode) => {
            const imageData = getImage(imageNode.childImageSharp.gridImage);
            const originalImageIndex = allImages.findIndex(img => img.id === imageNode.id);
            return (
              <div 
                key={imageNode.id} 
                style={galleryItemStyle}
                onClick={() => openLightbox(originalImageIndex)}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(originalImageIndex)}
                role="button"
                tabIndex={0}
              >
                {imageData && <GatsbyImage image={imageData} alt={imageNode.name} />}
              </div>
            );
          })}
        </div>
        {visibleImageCount < allImages.length && (
          <button 
            onClick={handleShowMore} 
            style={showMoreButtonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark, #0056b3)'} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary, #007bff)'}
          >
            Показати більше
          </button>
        )}
      </section>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxSlides}
          plugins={[Fullscreen, Thumbnails, Counter]}
          render={{
            slide: ({ slide, offset, rect }) => {
              const gatsbyImgData = slide.lightboxImage;
              if (!gatsbyImgData) return null;
              const width = Math.round(Math.min(rect.width, (rect.height / gatsbyImgData.height) * gatsbyImgData.width));
              const height = Math.round(Math.min(rect.height, (rect.width / gatsbyImgData.width) * gatsbyImgData.height));
              return (
                <div style={{ position: "relative", width, height }}>
                  <GatsbyImage
                    image={gatsbyImgData}
                    alt={slide.alt}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              );
            },
            thumbnail: ({ slide, rect }) => {
              const gatsbyThumbData = slide.thumbnailImage;
              if (!gatsbyThumbData) return null;
              return (
                  <GatsbyImage 
                    image={gatsbyThumbData} 
                    alt={slide.alt} 
                    style={{ width: '100%', height: '100%'}}
                   />
              );
            }
          }}
        />
      )}

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
              <p style={{ fontSize: '1.1em', lineHeight: '1.6', fontWeight: 'bold' }}>
                Місце надання послуг: м. Київ
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
      sort: { name: ASC } # Ensure consistent order for slicing and indexing
    ) {
      nodes {
        id
        name
        childImageSharp {
          gridImage: gatsbyImageData(
            layout: CONSTRAINED
            width: 400 # This width is for the grid thumbnails
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
          lightboxImage: gatsbyImageData(
            layout: CONSTRAINED
            width: 1600 # Larger width for lightbox
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90 # Optional: adjust quality for larger images
          )
          thumbnailImage: gatsbyImageData(
            layout: CONSTRAINED
            width: 200 # Smaller width for lightbox thumbnails
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
