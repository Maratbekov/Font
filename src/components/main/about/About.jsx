import style from './About.module.css'
import logo from '../../../assets/img/aboutLogo.svg'
import aboutImg from '../../../assets/img/aboutImg.png'
import { FaFileAlt } from "react-icons/fa";

const About = () => {
  return (
    <section id={style.about}>
      <div className="container">
        <div className={style.title}>
          <h1>О нас</h1>
          <img
            src={logo}
            alt="title"
          />
        </div>
        <div className={style.content}>
          <div className={style.img}>
            <img
              src={aboutImg}
              alt=""
            />
          </div>

          <div className={style.desc}>
            <p>
              Наша Команда успешно осуществляет деятельность на нескольких
              рынках инвестиций. Богатство выбора инструментов этих рынков
              позволяет Нам успешно сохранять и преумножать капитал клиентов.
            </p>

            <p>
              Вступить в партнерство с Fonte могут как профессиональные
              инвестора, так и частные лица, только начинающие открывать для
              себя новые перспективы. Наша юрисдикция - Международный финансовый
              центр «Астана» (МФЦА). Комфортные налоговые условия и регуляторные
              политики обеспечивают необходимые свободы и преимущества для
              достижения целей инвестиций.
            </p>

            <p>
              В партнерстве с Fonte Capital LTD, инвесторы имеют возможность
              воспользоваться не только проверенными стратегиями, но и смогут
              совместно разработать персональные инвестиционные решения.
            </p>

            <a href="#" className={style.file}> <FaFileAlt/> Лицензии</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
