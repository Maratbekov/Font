import style from './Header.module.css'
import logo from '../../assets/img/logo.svg'

const Header = () => {
  return (
    <header id={style.header}>
      <div className="container">
        <div className={style.header}>
          <div className={style.logo}>
            <a href="#">
            <img
              src={logo}
              alt="logo"
            />
            </a>
          </div>
          <nav className={style.navbar}>
            <a href="#">О нас</a>
            <a href="#">Команда</a>
            <a href="#">Блог</a>
            <a href="#">Продукты</a>
            <a href="#">Контакты</a>
          </nav>

          <div className={style.header__btns}>
            <a href="#" className={style.btn}>Войти</a>
            <a href="#" className={style.btnTwo}>Рус</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
