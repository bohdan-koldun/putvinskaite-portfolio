import * as React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

// Import the placeholder images
import before1 from '../images/before-after/before1.png';
import after1 from '../images/before-after/after1.png';
import before2 from '../images/before-after/before2.png';
import after2 from '../images/before-after/after2.png';

const BeforeAfterGallery = () => {
  const imagePairs = [
    {
      id: 1,
      beforeSrc: before1, 
      afterSrc: after1,   // Replace with your actual 'after' image import or path
    },
    {
      id: 2,
      beforeSrc: before2, 
      afterSrc: after2,   // Replace with your actual 'after' image import or path
    },
  ];

  const [selectedPair, setSelectedPair] = React.useState(null);

  const selectNewRandomPair = () => {
    if (imagePairs.length === 0) return;
    if (imagePairs.length === 1 && selectedPair) return; // No other pair to select

    let randomIndex;
    let newPair;
    do {
      randomIndex = Math.floor(Math.random() * imagePairs.length);
      newPair = imagePairs[randomIndex];
    } while (selectedPair && newPair.id === selectedPair.id && imagePairs.length > 1);
    setSelectedPair(newPair);
  };

  React.useEffect(() => {
    selectNewRandomPair(); // Initial random selection
  }, []); // Empty dependency array means this runs once on mount

  const sectionStyle = {
    padding: "40px 0",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px", // Reduced margin to make space for button
    fontSize: "2em",
    fontWeight: "300",
    color: "#333",
  };

  const galleryContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center the single item
  };
  
  const sliderWrapperStyle = {
    width: "100%", // Was: maxWidth: "800px", then removed for full width
    margin: "0 auto", // Removed bottom margin as button is now inside
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    borderRadius: "var(--border-radius, 6px)",
    overflow: "hidden", 
    position: 'relative', // For positioning the button
  };

  const buttonStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    padding: '8px',
    fontSize: '1.2em', // Slightly larger icon if it was too small
    lineHeight: '1', // Prevents extra space around icon
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black
    border: 'none',
    borderRadius: '50%', // Circular button
    cursor: 'pointer',
    zIndex: 10, // Ensure it's above the slider images
    width: '40px', // Explicit width for circle
    height: '40px', // Explicit height for circle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
  };

  if (!selectedPair) {
    // Return null or a loading indicator if no pair is selected yet, or if imagePairs is empty
    return null; 
  }

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Моя робота: До і Після</h2>
      <div style={galleryContainerStyle}>
        <div key={selectedPair.id} style={{width: '100%'}}>
          <div style={sliderWrapperStyle}>
            {/* Button moved inside sliderWrapper and positioned absolutely */}
            {imagePairs.length > 1 && (
              <button 
                onClick={selectNewRandomPair} 
                style={buttonStyle}
                title="Інший приклад" // Tooltip for accessibility
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'} // Darken on hover
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
              >
                🎲
              </button>
            )}
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={selectedPair.beforeSrc} alt={`До - ${selectedPair.id}`} />}
              itemTwo={<ReactCompareSliderImage src={selectedPair.afterSrc} alt={`Після - ${selectedPair.id}`} />}
              style={{ width: '100%', height: 'auto', aspectRatio: '4/3' }} 
            />
          </div>
        </div>
      </div>
       <p style={{textAlign: 'center', marginTop: '20px', fontStyle: 'italic', color: '#777'}}>
        * Наведіть курсор на зображення та рухайте повзунок, щоб побачити різницю.
      </p>
    </section>
  );
};

export default BeforeAfterGallery; 