import React from 'react'
import style from './Worth.module.css'
import logo from '../../../assets/img/aboutLogo.svg'
import almaz from '../../../assets/img/almaz.svg'
import rost from '../../../assets/img/rost.png'
import comanda from '../../../assets/img/comanda.png'

const Worth = () => {
  return (
    <section id={style.worth}>
      <div className="container">
        <div className={style.title}>
          <h1>Наши ценности</h1>
          <img
            src={logo}
            alt="title"
          />
        </div>
        <div className={style.content}>
          <div className={style.card}>
            <div className={style.flex__items__center}>
              <img
                src={almaz}
                alt=""
              />
              <h3>Стабильность</h3>
            </div>

            <p>
              Сохранность капитала клиентов приоритетнее доходности - каждое
              решение взвешено, обдумано и оценено.
            </p>
          </div>

          <div className={style.card}>
            <div className={style.flex__items__center}>
              <img
                src={rost}
                alt=""
              />
              <h3>Устойчивость</h3>
            </div>

            <p>
              Устойчивое развитие — основа нашей бизнес-модели. Начиная с поиска
              и оценки предоставившихся возможностей для бизнеса до
              последовательного развития наших проектов и реаллокации капитала в
              новые возможности.
            </p>
          </div>

          <div className={style.card}>
            <div className={style.flex__items__center}>
              <img
                src={comanda}
                alt=""
              />
              <h3>Команда</h3>
            </div>

            <p>
              Команда Fonte Capital LTD – основа успеха. Каждый сотрудник
              Компании – это ценный актив в рабочем процессе фонда. Наша цель –
              создание такой рабочей атмосферы и условий, которые позволят
              максимально раскрыть потенциал каждого сотрудника для достижения
              максимального результата.
            </p>
          </div>

          <div className={style.card}>
            <div className={style.flex__items__center}>
              <img
                src={almaz}
                alt=""
              />
              <h3>Репутация</h3>
            </div>

            <p>
              Ответственность и этика – основа нашей деятельности. Деятельность
              в рамках лучших практик (Корпоративный Кодекс этики и стандарты
              профессионального поведения) позволяет предлагать клиентам более
              качественные инвестиционные продукты, отвечающие высоким
              требованиям и ожиданиям самых требовательных клиентов.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Worth
