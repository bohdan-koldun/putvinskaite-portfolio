import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const AboutMe = () => {
  const sectionStyle = {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9', // Light background for differentiation
    textAlign: 'center',
  };

  const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const imageContainerStyle = {
    marginBottom: '20px',
    width: '200px', // Adjust as needed
    height: '200px', // Adjust as needed
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  };

  const textContainerStyle = {
    textAlign: 'left', // Or 'center' if you prefer all text centered
    lineHeight: '1.8',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '2em',
    fontWeight: '300',
    color: '#333',
    marginBottom: '30px',
  };

  const nameStyle = {
    fontSize: '1.8em',
    fontWeight: 'bold',
    color: 'var(--color-primary, #333)',
    textAlign: 'center',
    marginBottom: '10px',
  };

  return (
    <section style={sectionStyle} id="about-me">
      <h2 style={headingStyle}>Про Фотографа</h2>
      <div style={contentWrapperStyle}>
        <div style={imageContainerStyle}>
          {/* 
            IMPORTANT: Replace this StaticImage with your actual photo.
            Ensure 'justina-profile.jpg' exists in 'src/images/'
            or update the src path accordingly.
          */}
          <StaticImage 
            src="../images/yust.jpg" 
            alt="Юстина Торчило - Фотограф"
            placeholder="blurred"
            layout="constrained"
            width={200}
            height={200}
            style={{ borderRadius: '50%', width: '100%', height: '100%' }}
          />
        </div>
        <h3 style={nameStyle}>Юстина Торчило</h3>
        <div style={textContainerStyle}>
          <p style={{marginBottom: '15px'}}>
            Привіт! Я Юстина, і фотографія – це не просто моя робота, а справжня пристрасть. 
            Я люблю ловити щирі емоції, неповторні моменти та створювати кадри, що розповідають історії.
            Для мене кожна зйомка – це можливість побачити світ вашими очима та зберегти найцінніші спогади.
          </p>
          <p style={{marginBottom: '15px'}}>
            Мій стиль – це поєднання природності, легкості та уваги до деталей. 
            Я прагну, щоб ви почувалися комфортно перед камерою, а результат перевершив ваші очікування.
            Давайте разом створимо щось особливе!
          </p>
          {/* Можна додати ще абзаци про досвід, підхід тощо */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 