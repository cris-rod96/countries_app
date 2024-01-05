import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./About.module.css";
import { faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Contact } from "../../components/Contact/Contact";
import { useState } from "react";
import { Toast } from "../../components/Toast/Toast";
export const About = () => {
  const [showContact, setShowContact] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState({
    type: "",
    message: "",
  });

  const handleContact = () => {
    setShowContact(!showContact);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };
  return (
    <div className={`${styled.containerAbout}`}>
      {showContact && (
        <Contact
          handleContact={handleContact}
          setToast={setToast}
          handleToast={handleToast}
        />
      )}
      <Toast toast={toast} showToast={showToast} />
      <div
        className={`${styled.aboutProject} ${showContact ? styled.d_none : ""}`}
      >
        <h1 className={styled.title}>Wiki Countries</h1>
        <div className={styled.cards}>
          <div className={styled.card}>
            <div className={styled.cardHeader}>
              <img src="/countries.jpg" alt="" className={styled.background} />
            </div>
            <div className={styled.cardBody}>
              <h3 className={styled.cardTitle}>Banderas</h3>
              <p>
                Bienvenido a nuestra plataforma, donde explorarás la riqueza y
                diversidad de nuestro mundo a través de sus banderas e
                información detallada de cada país.
              </p>
              <p>
                Sumérgete en un viaje visual mientras descubres las vibrantes y
                simbólicas banderas que representan naciones de todos los
                rincones del planeta. Cada bandera cuenta una historia única,
                reflejando la historia, cultura y valores de su país de origen.
              </p>
              <p>
                Además, proporcionamos datos esenciales de cada nación, desde
                datos demográficos hasta información histórica. Ya sea por
                curiosidad o investigación, nuestro sitio es tu ventana a la
                globalidad, donde las fronteras se desvanecen y la comprensión
                se amplía. ¡Explora el mundo con nosotros!
              </p>
            </div>
          </div>
          <div className={styled.card}>
            <div className={styled.cardHeader}>
              <img src="/activities.png" alt="" className={styled.background} />
            </div>
            <div className={styled.cardBody}>
              <h3 className={styled.cardTitle}>Actividades</h3>
              <p>
                Explora nuestra plataforma única, donde no solo planificas tu
                viaje, sino que también registras las actividades turísticas que
                realizarás en distintos países. Aquí, los usuarios tienen el
                poder de elegir destinos y personalizar sus experiencias
                turísticas de manera única.
              </p>
              <p>
                Imagina explorar las maravillas de cada país y compartir tus
                planes de actividades, desde emocionantes excursiones hasta
                momentos culturales inolvidables. Registra cada detalle de tus
                aventuras, crea tu itinerario personalizado y descubre nuevas
                oportunidades para explorar el mundo.
              </p>

              <p>
                Esta plataforma te ofrece la libertad de planificar y compartir
                tus experiencias turísticas, conectándote con otros entusiastas
                viajeros. Tu próximo viaje está a punto de convertirse en una
                experiencia única y personalizada. ¡Únete a nosotros y comienza
                a crear recuerdos inolvidables!
              </p>
            </div>
          </div>
          <div className={styled.card}>
            <div className={styled.cardHeader}>
              <img
                src="/full_stack.webp"
                alt=""
                className={styled.background}
              />
              <img src="/perfil.jpg" alt="" className={styled.profile} />
            </div>
            <div className={styled.cardBody}>
              <h3 className={styled.cardTitle}>Sobre mi</h3>
              <p>
                Hola, les habla Cristhian Rodríguez, soy un desarrollador Full
                Stack apasionado y listo para colaborar en proyectos
                innovadores. Con experiencia en front-end, back-end y bases de
                datos, estoy preparado para aportar mis habilidades y contribuir
                al éxito de tu proyecto. ¡Vamos a trabajar juntos para lograr
                grandes resultados!
              </p>
              <p>
                Para contactarte conmigo puedes enviarme un{" "}
                <span className={styled.sendEmail} onClick={handleContact}>
                  email
                </span>{" "}
                donde responderé a cualquier duda, sugerencia o futura
                colaboración.
              </p>
              <p>
                Tambien conecta conmigo a través de{" "}
                <a
                  href="https://www.linkedin.com/in/cristhian-rodriguez-659779205"
                  target="_blank"
                  className={styled.linkLinkedIn}
                >
                  LinkedIn
                </a>{" "}
                o revisa algunos de mis proyectos en mi perfil de{" "}
                <a
                  href="https://github.com/cris-rod96"
                  target="_blank"
                  className={styled.linkGithub}
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
