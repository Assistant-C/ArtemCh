import { useState } from 'react'
import './App.css'
import logo from './assets/images/logo.png'
import coding from './assets/images/coding.jpg'
import jquery from './assets/images/jquery.svg'
import html from './assets/images/html.svg'
import css from './assets/images/css.svg'
import javascript from './assets/images/javascript.svg'
import react from './assets/images/react.svg'
import figma from './assets/images/figma.svg'
import github from './assets/images/github.svg'
import boldo from './assets/images/boldo.png'
import coffee from './assets/images/coffee.png'
import englishfull from './assets/images/englishfull.png'
import furnica from './assets/images/furnica.png'
import furniture from './assets/images/furniture.png'
import globalwork from './assets/images/globalwork.png'
import saveukraine from './assets/images/saveukraine.png'
import tiffany from './assets/images/tiffany.png'


function App() {


  return (
    <>
      <div className="box">
        <nav>
          <img className='logo' src={logo} />
          <a href="#aboutme">
            <button className="nav_item">About Me</button>
          </a>
          <a href="#skills">
          <button className="nav_item">Hard Skills</button>
          </a>
          <a href="#soft_skills">
            <button className="nav_item">Soft Skills</button>
          </a>
          <a href="#myworks">
            <button className="nav_item">My works</button>
          </a>
        </nav>
        <header>
          <div className="header_text">
            <h3 className="hi">Привіт. Я — Артем Черненко</h3>
            <p className='header_text_text'>
              Frontend-розробник і UI/UX-ентузіаст.<br></br>Cтворюю адаптивні, інтерактивні веб<br></br>інтерфейси з використанням React, HTML, CSS та <br></br>JavaScript.
            </p>
            <h4>
              Зосереджений на створенні адаптивних і динамічних<br></br> користувацьких інтерфейсів з використанням React, <br></br>HTML, CSS та JavaScript. Вміло перетворюю макети з Figma<br></br>на чистий, масштабований код. Захоплююсь розробкою<br></br>інтуїтивно зрозумілих і високопродуктивних вебдодатків.
            </h4>
          </div>
          <img className='header_img' src={coding} />
        </header>
        <div className="aboutme" id='aboutme'>
          <h1 className='aboutme_h1'>Про мене</h1>
          <div className="allinfo">
            <div className="info">
              <h2>Основна інфа:</h2>
              <ul>
                <li><b>Ім'я:</b> Артем Черненко</li>
                <li><b>День народження:</b>5 січня 2013</li>
                <li><b>Кривий Ріг, Україна</b></li>
                <li><b>Мови:</b> Українська, Русский, English</li>
              </ul>
            </div>
            <div className="contacts">
              <h2>Контактна інфа</h2>
              <ul>
                <li><b>Пошта:</b> artemcernenko145@gmail.com</li>
                <li><b>Діскорд:</b> artem123_666</li>
                <li><b>Телеграм:</b> @u553rn4m3</li>
                <li><b>Номер:</b> +380964218182</li>
              </ul>
            </div>
            <div className="description">
              <h4>Про мене: Я — фронтенд-розробник-початківець,<br /> спеціалізуюсь на створенні сучасних і адаптивних<br /> вебсайтів. Використовую HTML, CSS, JavaScript та<br /> React, а також працюю у Figma для розробки<br /> інтерфейсів.</h4>
            </div>
          </div>
        </div>
        <div className="skills" id="skills">
          <h2 className='skills_text'>Hard Skills</h2>
          <div className="skills_list">
            <div className="skill">
              <img className='hardskills' src={jquery} />
              JQuery
            </div>
            <div className="skill">
              <img className='hardskills' src={html} />
              HTML5
            </div>
            <div className="skill">
              <img className='hardskills' src={css} />
              CSS3
            </div>
            <div className="skill">
              <img className='hardskills' src={javascript} />
              JavaScript
            </div>
            <div className="skill">
              <img className='hardskills' src={react} />
              React
            </div>
            <div className="skill">
              <img className='hardskills' src={figma} />
              Figma
            </div>
            <div className="skill">
              <img className='hardskills' src={github} />
              GitHub
            </div>
          </div>
        </div>
        <div className="soft_skills" id='soft_skills'>
          <h2 className='skills_text'>Soft Skills</h2>
        </div>
        <div className="softskills_list">
          <div className="softskills1">
            <ul>
              <li>Самоорганізація — я самостійно займаюся веброзробкою, навчаюся React і відстежую свій прогрес.</li>
              <li>Відповідальність — послідовно працюю над власними проєктами й завжди прагну їх покращити.</li>
              <li>Здатність швидко навчатися — швидко освоїв шлях від HTML до React і постійно вивчаю нове.</li>
              <li>Відкритість до нових технологій — активно досліджую нові інструменти та підходи у розробці.</li>
            </ul>
          </div>
          <div className="softskills2">
            <ul>
              <li>Орієнтація на результат — чітко формулюю завдання і доводжу їх до завершення.</li>
              <li>Самостійність у прийнятті рішень — сам обираю підходи до задач, теми, структуру й оформлення проєктів.</li>
              <li>Критичне мислення — не приймаю інформацію наосліп, завжди аналізую та перепровiряю.</li>
            </ul>
          </div>
          <div className="softskills3">
            <ul>
              <li>Вміння працювати з фідбеком — враховую зауваження та прошу зворотний зв’язок для покращення.</li>
              <li>Вміння розв’язувати проблеми — шукаю рішення навіть у складних ситуаціях, наприклад, при багах.</li>
              <li>Гнучкість (адаптивність до змін) — адаптую дизайн під новий логотип і підлаштовуюся під технічні обмеження.</li>
              <li>Самокритичність — об’єктивно оцінюю результати своєї роботи і завжди бачу, що можна вдосконалити.</li>
            </ul>
          </div>
        </div>
        <div className="my_works" id='myworks'>
          <p className="myworks">My Works</p>
          <div className="works">
            <div className="work">
              <img className="work_img1" src={boldo} />
              <div className="work_text">
                <h1>Boldo</h1>
              </div>
            </div>
            <div className="work">
              <div className="work_text">
                <h1>Coffee</h1>
              </div>
              <img className="work_img2" src={coffee} />
            </div>
            <div className="work">
              <img className="work_img3" src={englishfull} />
              <div className="work_text">
                <h1>English Full</h1>
              </div>
            </div>
            <div className="work">
              <div className="work_text">
                <h1>Furnica</h1>
              </div>
              <img className="work_img4" src={furnica} />
            </div>
            <div className="work">
              <img className="work_img1" src={furniture} />
              <div className="work_text">
                <h1>Furniture</h1>
              </div>
            </div>
            <div className="work">
              <div className="work_text">
                <h1>Global Work</h1>
              </div>
              <img className="work_img1" src={globalwork} />
            </div>
            <div className="work">
              <img className="work_img1" src={saveukraine} />
              <div className="work_text">
                <h1>Save Ukraine</h1>
              </div>
            </div>
            <div className="work">
              <div className="work_text">
                <h1>Tiffany</h1>
              </div>
              <img className="work_img1" src={tiffany} />
            </div>
          </div>
        </div>
        <div className="footer">
          <h1>Дякую за увагу! Якщо у вас є запитання або пропозиції — звертайтесь.</h1>
        </div>
      </div>
    </>
  )
}

export default App
