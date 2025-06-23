import * as React from "react"
import OrderForm from './OrderForm'; // Import the new form component

const PriceBlock = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [currentService, setCurrentService] = React.useState('');

  const services = [
    {
      name: "Індивідуальна фотосесія",
      price: "від 2500₴",
      description: "Підкресліть вашу унікальність та стиль. Зйомка 1-1.5 години, 15-20 фото в ретуші.",
    },
    {
      name: "Сімейна фотосесія",
      price: "від 3600₴",
      description: "Збережіть теплі моменти з рідними. До 1.5 годин зйомки, 20+ фото.",
    },
    {
      name: "Весільна фотозйомка",
      price: "від 15 000₴",
      description: "Найважливіший день у найкращих фотографіях. Повний день зйомки, до 400 фото.",
    },
    {
      name: "Love story",
      price: "від 4000₴",
      description: "Романтична історія вашого кохання в кадрах. 2 години зйомки, локація за вибором.",
    },
    {
      name: "Репортажна фотозйомка",
      price: "800₴/год",
      description: "Мін. 2 години. Динамічна зйомка подій, 50+ фото/година.",
    },
    {
      name: "Предметна фотозйомка",
      price: "від 300₴/продукт",
      description: "Чіткі студійні знімки, 3–5 ракурсів, базова обробка.",
    },
  ];
  

  const handleOrderClick = (serviceName) => {
    setCurrentService(serviceName);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setCurrentService('');
  };

  const handleFormSubmit = (formData) => {
    console.log('PriceBlock received form submission:', formData);
    // You might want to do something else here after submission, if needed
  };

  const sectionStyle = {
    padding: "40px 0px",
    display: "flex",
    flexWrap: "wrap",
    gap: "25px", // Slightly increased gap
    justifyContent: 'center', // Center cards if they don't fill the row
  }

  const serviceItemStyle = {
    backgroundColor: "#1A1A1A", // Slightly lighter black for the card
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "25px", // Increased padding
    border: "1px solid #333", // Slightly lighter border
    borderRadius: "var(--border-radius, 6px)", // Slightly more rounded
    flex: "1 1 320px", // Adjusted flex-basis
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)", // More pronounced shadow
    transition: "transform 0.3s ease-out, boxShadow 0.3s ease-out", // For potential hover effects
    // On hover, you might want to add: transform: 'translateY(-5px)', boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
    // This is best done with CSS classes for pseudo-selectors.
  }

  const serviceInfoAndPriceStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '20px', // Increased space
  }

  const serviceInfoStyle = {
    flexGrow: 1,
    marginRight: '15px', // Ensure space between info and price
  }

  const nameStyle = {
    fontSize: "1.4em", // Slightly larger
    fontWeight: "600", // Semi-bold
    color: "#fff",
    margin: "0 0 8px 0", // Adjusted margin
    // Consider adding an icon here for visual appeal
  }

  const descriptionStyle = {
    fontSize: "0.9em", // Slightly smaller for differentiation
    color: "#B3B3B3", // Lighter grey for subtlety
    margin: "0 0 15px 0", // Adjusted margin
    lineHeight: '1.6',
  }

  const priceStyle = {
    fontSize: "1.3em", // Prominent price
    fontWeight: "bold",
    color: "#fff", 
    textAlign: 'right',
    wordBreak: 'break-word', // Added to allow breaking long words
  }

  const buttonStyle = {
    backgroundColor: "var(--color-primary, #4A4A4A)",
    color: "#fff",
    padding: "12px 22px", // Slightly larger button
    border: "none",
    borderRadius: "var(--border-radius, 6px)", // Consistent rounding
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "1em",
    fontWeight: "600", // Semi-bold
    transition: "background-color 0.2s ease-in-out, transform 0.2s ease-in-out",
    alignSelf: 'flex-start',
    marginTop: 'auto',
    // On hover: backgroundColor: '#333', transform: 'scale(1.03)'
    // Best done with CSS classes.
  }

  // Basic hover effect for button (can't do :hover with inline styles directly like this)
  // Consider CSS Modules or styled-components for more advanced styling

  return (
    <>
      <div style={sectionStyle}>
        {services.map((service) => (
          <div
            key={service.name}
            style={serviceItemStyle}
            // For JS-based hover (less ideal than CSS classes):
            // onMouseEnter={e => {
            //   e.currentTarget.style.transform = 'translateY(-5px)';
            //   e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
            // }}
            // onMouseLeave={e => {
            //   e.currentTarget.style.transform = 'translateY(0px)';
            //   e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            // }}
          >
            <div style={serviceInfoAndPriceStyle}> 
              <div style={serviceInfoStyle}>
                <p style={nameStyle}>{service.name}</p>
                <p style={descriptionStyle}>{service.description}</p>
              </div>
              <p style={priceStyle}>{service.price}</p>
            </div>
            <button 
              style={buttonStyle} 
              onClick={() => handleOrderClick(service.name)}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = '#383838'; // Darken primary on hover
                // e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary, #4A4A4A)';
                // e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Замовити
            </button>
          </div>
        ))}
      </div>
      {showForm && (
        <OrderForm 
          serviceName={currentService} 
          onClose={handleCloseForm} 
          onSubmit={handleFormSubmit} 
        />
      )}
    </>
  )
}

export default PriceBlock 