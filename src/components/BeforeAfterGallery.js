import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image'; // Для легкого використання статичних зображень

const BeforeAfterGallery = () => {
  // Вам потрібно буде замінити ці StaticImage на ваші реальні зображення "до" та "після"
  // Наприклад, якщо у вас є before1.jpg та after1.jpg в src/images/before-after/
  const pairs = [
    {
      id: 1,
       beforeSrc: "../images/before-after/before1.jpg", // Приклад шляху
       afterSrc: "../images/before-after/after1.jpg",   // Приклад шляху
      description: "Ретуш портрета",
    },
    {
      id: 2,
      // beforeSrc: "../images/before-after/before2.jpg",
      // afterSrc: "../images/before-after/after2.jpg",
      description: "Корекція кольору пейзажу",
    },
    {
      id: 3,
      // beforeSrc: "../images/before-after/before3.jpg",
      // afterSrc: "../images/before-after/after3.jpg",
      description: "Відновлення старого фото",
    },
  ];

  const sectionStyle = {
    padding: "40px 20px",
    // backgroundColor: "#f0f0f0", // Можна додати фон, якщо потрібно
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2em",
    fontWeight: "300",
    color: "#333",
  };

  const galleryContainerStyle = {
    display: "flex",
    flexDirection: "column", // Пари будуть одна під одною
    gap: "40px", // Відстань між парами
    alignItems: "center",
  };

  const pairContainerStyle = {
    display: "flex",
    flexWrap: "wrap", // Дозволяє переносити зображення на мобільних
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "900px", // Максимальна ширина для пари
    marginBottom: "20px",
  };

  const imageContainerStyle = {
    flex: "1 1 300px", // Зображення будуть гнучкими
    textAlign: "center",
    minWidth: "280px",
  };
  
  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "var(--border-radius, 4px)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  };

  const captionStyle = {
    marginTop: "10px",
    fontSize: "1.1em",
    color: "#555",
    fontWeight: "bold",
  };

  const descriptionStyle = {
    width: "100%",
    textAlign: "center",
    fontSize: "1.2em",
    fontWeight: "500",
    color: "#333",
    marginBottom: "10px", // Відстань над парою
  };

  // Тимчасові розміри для StaticImage, налаштуйте під ваші фото
  const imageWidth = 400;
  const imageHeight = 300;

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Моя робота: До і Після</h2>
      <div style={galleryContainerStyle}>
        {pairs.map((pair) => (
          <div key={pair.id} style={{width: '100%', textAlign: 'center'}}>
            {pair.description && <h3 style={descriptionStyle}>{pair.description}</h3>}
            <div style={pairContainerStyle}>
              <div style={imageContainerStyle}>
                <p style={captionStyle}>До</p>
                {/* Замініть src на шлях до вашого зображення "до" */}
                <StaticImage 
                  src="../images/placeholder-before.jpg" 
                  alt={`До - ${pair.description || pair.id}`}
                  placeholder="blurred"
                  layout="constrained"
                  width={imageWidth}
                  height={imageHeight}
                  style={imageStyle}
                />
              </div>
              <div style={imageContainerStyle}>
                <p style={captionStyle}>Після</p>
                {/* Замініть src на шлях до вашого зображення "після" */}
                <StaticImage 
                  src="../images/placeholder-after.jpg" 
                  alt={`Після - ${pair.description || pair.id}`}
                  placeholder="blurred"
                  layout="constrained"
                  width={imageWidth}
                  height={imageHeight}
                  style={imageStyle}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <p style={{textAlign: 'center', marginTop: '30px', fontStyle: 'italic', color: '#777'}}>
        * Будь ласка, замініть ці зображення-заповнювачі на ваші реальні роботи "До" та "Після".
      </p>
    </section>
  );
};

export default BeforeAfterGallery; 