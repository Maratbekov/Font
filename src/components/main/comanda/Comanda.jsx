import style from './Comanda.module.css'
import logo from '../../../assets/img/aboutLogo.svg'
import personOne from '../../../assets/img/personOne.png'
import personTwo from '../../../assets/img/personTwo.png'

const Comanda = () => {
  return (
    <section id={style.comanda}>
      <div className="container">
        <div className={style.title}>
          <h1>Наша команда</h1>
          <img
            src={logo}
            alt="title"
          />
        </div>

        <p className={style.desc}>
          Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании –
          это ценный актив в рабочем процессе фонда. Наша цель – создание такой
          рабочей атмосферы и условий, которые позволят максимально раскрыть
          потенциал каждого сотрудника для достижения максимального результата.
        </p>

        <div className={style.comanda}>
          <div className={style.cards__peaple}>
            <div className={style.card}>
              <img
                src={personOne}
                alt="person"
              />
              <h4>Ержан Мусин CEO </h4>
            </div>

            <div className={style.card}>
              <img
                src={personTwo}
                alt="person"
              />
              <h4>Олжас Укенов CFO </h4>
            </div>

            <div className={style.card}>
              <img
                src={personOne}
                alt="person"
              />
              <h4>Ержан Мусин CEO </h4>
            </div>

            <div className={style.card}>
              <img
                src={personTwo}
                alt="person"
              />
              <h4>Олжас Укенов CFO </h4>
            </div>

            <div className={style.card}>
              <img
                src={personOne}
                alt="person"
              />
              <h4>Ержан Мусин CEO </h4>
            </div>

            <div className={style.card}>
              <img
                src={personTwo}
                alt="person"
              />
              <h4>Олжас Укенов CFO </h4>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comanda
