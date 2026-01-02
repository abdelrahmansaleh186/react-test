import Nav from "../useable-componants/nav";
import "../styles/header.css";
import Footer from "../useable-componants/footer";
import animedata from "../backend-data/animedata.json";
import "../styles/animations.css";
import { useState } from "react";
import SEO from "../useable-componants/seo.jsx";
import Content from "../useable-componants/content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, EffectCoverflow } from "swiper/modules";

export default function Home({ username }) {
  const [animeData, setAnimeData] = useState(animedata.anime);
  return (
    <>
      <SEO
        description="Anime homepage with trending shows and updates"
        title="Anime Hub - Home"
      />
      <Nav />
      <section className="hero">
        <h1>Modern Web Templates</h1>
        <p>Fast, responsive websites built with Vite & React.</p>
        <button>Get {username} Started</button>
      </section>

      <section className="features">
        <div>⚡ Fast</div>
        <div>🎨 Modern</div>
        <div>📱 Responsive</div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a frontend developer creating clean and modern UI experiences.
        </p>
      </section>

      <section className="projects">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 1,
            depth: 200
            ,
            modifier: 1,
            slideShadows: false,
          }}
        >
          {animeData.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <h3>{item.title}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer />
    </>
  );
}
