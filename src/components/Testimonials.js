import * as React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Олена П.",
      text: "Дуже задоволена фотосесією! Юстина справжній професіонал, допомогла розслабитися і зловила найкращі моменти. Фотографії вийшли неймовірні!",
      avatar: "", // Можна додати посилання на аватарку, якщо є
      service: "Портретна фотосесія"
    },
    {
      id: 2,
      name: "Андрій та Марина К.",
      text: "Замовляли репортажну зйомку нашого весілля. Результат перевершив усі очікування! Жоден важливий момент не був пропущений. Рекомендуємо!",
      avatar: "",
      service: "Репортажна фотозйомка"
    },
    {
      id: 3,
      name: "Катерина В.",
      text: "Фотографії для мого бренду одягу вийшли просто чудово. Юстина тонко відчула стиль і допомогла з позуванням. Дуже дякую!",
      avatar: "",
      service: "Предметна фотозйомка"
    },
  ];

  const sectionStyle = {
    padding: "40px 20px",
    backgroundColor: "#f9f9f9", // Світлий фон для секції
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2em",
    fontWeight: "300",
    color: "#333",
  };

  const testimonialsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
    justifyContent: "center",
  };

  const testimonialCardStyle = {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "var(--border-radius, 6px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    flex: "1 1 320px",
    maxWidth: "380px", // Щоб картки не були занадто широкими
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const avatarStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#ccc", // Заповнювач, якщо немає фото
    marginBottom: "15px",
    objectFit: "cover",
    // Якщо будете використовувати реальні зображення:
    // backgroundImage: `url(${testimonial.avatar})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
  };

  const nameStyle = {
    fontSize: "1.2em",
    fontWeight: "600",
    color: "#333",
    marginBottom: "5px",
  };

  const serviceStyle = {
    fontSize: "0.9em",
    color: "var(--color-primary, #4A4A4A)",
    marginBottom: "15px",
    fontStyle: "italic",
  };

  const textStyle = {
    fontSize: "1em",
    color: "#555",
    lineHeight: "1.6",
    fontStyle: "italic",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Що кажуть мої клієнти</h2>
      <div style={testimonialsContainerStyle}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} style={testimonialCardStyle}>
            {testimonial.avatar ? (
              <img src={testimonial.avatar} alt={testimonial.name} style={avatarStyle} />
            ) : (
              <div style={{...avatarStyle, display: 'flex', justifyContent:'center', alignItems:'center', fontSize: '2em', color: '#fff'}}>
                {testimonial.name.substring(0,1) /* Перша літера імені */}
              </div>
            )}
            <h3 style={nameStyle}>{testimonial.name}</h3>
            <p style={serviceStyle}>Послуга: {testimonial.service}</p>
            <blockquote style={textStyle}>"{testimonial.text}"</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 