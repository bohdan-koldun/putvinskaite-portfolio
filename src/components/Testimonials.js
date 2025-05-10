import * as React from 'react';
import Slider from "react-slick";

// Імпорт CSS для react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Імпорт зображень для аватарів
import avatar1 from '../../src/images/review/a1.jpg';
import avatar2 from '../../src/images/review/a2.jpg';
import avatar3 from '../../src/images/review/a3.jpg';
import avatar4 from '../../src/images/review/a4.jpg';
import avatar5 from '../../src/images/review/a5.jpg';
import avatar6 from '../../src/images/review/a6.jpg';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Діана М.",
      text: "Дуже задоволена фотосесією! Юстина справжній професіонал, допомогла розслабитися і зловила найкращі моменти. Фотографії вийшли неймовірні!",
      avatar: avatar2,
      service: "Портретна фотосесія"
    },
    {
      id: 3,
      name: "Олександр Г.",
      text: "Фотографії для будинків на продаж вийшли просто чудово. Юстина тонко відчула стиль і допомогла з ракурсами. Дуже дякую!",
      avatar: avatar6,
      service: "Предметна фотозйомка"
    },
    // Додайте більше відгуків, якщо потрібно, для кращого ефекту слайдера
    {
      id: 4,
      name: "Маргарита Д.",
      text: "Фотосесія пройшла легко та невимушено. Результатом дуже задоволена, якісні та живі фото!",
      avatar: avatar5,
      service: "Індивідуальна фотосесія"
    },
    {
      id: 5,
      name: "Констянтин С.",
      text: "Юстина - справжня чарівниця! Фотографії вийшли настільки живими та емоційними, що я не можу на них надивитися. Обов'язково звернуся ще!",
      avatar: avatar4,
      service: "Сімейна фотосесія"
    },
    {
      id: 7,
      name: "Христина К.",
      text: "Фотосесія вагітності пройшла чудово! Юстина дуже тактовна та професійна. Фотографії вийшли ніжними та зворушливими, саме такими, як я хотіла.",
      avatar: avatar1,
      service: "Фотосесія вагітності"
    },
    {
      id: 2,
      name: "Віталій та Віка С.",
      text: "Замовляли репортажну зйомку нашого весілля. Результат перевершив усі очікування! Жоден важливий момент не був пропущений. Рекомендуємо!",
      avatar: avatar3,
      service: "Весільна фотозйомка"
    },
  ];

  const settings = {
    dots: true, // Показувати точки навігації
    infinite: true, // Безкінечна прокрутка
    speed: 500, // Швидкість анімації
    slidesToShow: 2, // Кількість видимих слайдів одночасно
    slidesToScroll: 1, // Кількість слайдів для прокрутки за раз
    autoplay: true, // Автоматична прокрутка
    autoplaySpeed: 4000, // Час між автоматичною прокруткою
    pauseOnHover: true, // Зупиняти автопрокрутку при наведенні
    responsive: [
      {
        breakpoint: 768, // Для екранів менше 768px
        settings: {
          slidesToShow: 1, // Показувати 1 слайд
          slidesToScroll: 1,
        }
      }
    ]
  };

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

  const testimonialCardStyle = {
    backgroundColor: "#fff",
    padding: "25px",
    margin: "0 15px", // Додаємо відступи між картками в слайдері
    borderRadius: "var(--border-radius, 6px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex !important", // Важливо для правильного відображення в slick
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    minHeight: "320px", // Задамо мінімальну висоту для карток
    justifyContent: 'space-between',
  };

  const avatarStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#ccc", // Заповнювач, якщо немає фото
    marginBottom: "15px",
    objectFit: "cover",
    display: 'flex', 
    justifyContent:'center', 
    alignItems:'center', 
    fontSize: '2em', 
    color: '#fff'
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
    flexGrow: 1, // Щоб текст займав доступний простір
    marginBottom: '15px',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Що кажуть мої клієнти</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id}> {/* Slick вимагає обгортку для кожного слайда */} 
            <div style={testimonialCardStyle}>
              {testimonial.avatar ? (
                <img src={testimonial.avatar} alt={testimonial.name} style={{...avatarStyle, backgroundImage: 'none' /* Скидаємо фон, якщо є img */}} />
              ) : (
                <div style={avatarStyle}>
                  {testimonial.name.substring(0,1)}
                </div>
              )}
              <h3 style={nameStyle}>{testimonial.name}</h3>
              <p style={serviceStyle}>Послуга: {testimonial.service}</p>
              <blockquote style={textStyle}>"{testimonial.text}"</blockquote>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials; 