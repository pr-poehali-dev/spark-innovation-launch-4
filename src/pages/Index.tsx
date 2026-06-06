export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="https://cdn.poehali.dev/files/738e8eba-2cc2-4129-bb31-d15a24b9c675.png" alt="Кофе Фокс" style={{ height: "52px", width: "52px", objectFit: "contain" }} />
          <span style={{ fontSize: "20px", letterSpacing: "-1px" }}>КОФЕ ФОКС</span>
        </div>
        <nav>
          <a href="#menu">Меню</a>
          <a href="#about">О нас</a>
          <a href="#promo">Акции</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <button className="btn-cta">Забрать кофе</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p style={{ fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "3px", color: "var(--primary)", marginBottom: "12px" }}>
              Хвост не помеха, когда есть кофе
            </p>
            <h1 className="hero-title">
              КОФЕ
              <br />
              <span>ФОКС</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Тёплое место для учёбы, работы и вкусного кофе. Розетки, Wi-Fi, честные цены и лиса Фокси, которая согреет тебя в сессию.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="#menu">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Смотреть меню
                </button>
              </a>
              <button className="btn-cta" style={{ background: "white" }}>
                Забрать с собой
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              СКИДКА
              <br />
              30% СО СВОИМ
              <br />
              СТАКАНОМ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #КОФЕФОКС
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              🦊 ФОКСИ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; 🦊 КОФЕ ФОКС * ЛАТТЕ-АРТ ЛИСА * РОЗЕТКИ У КАЖДОГО СТОЛА * WI-FI БЕЗ ПАРОЛЕЙ * ОВСЯНОЕ МОЛОКО БЕСПЛАТНО * КАЖДОЕ 5-Е КОФЕ В ПОДАРОК * РЯДОМ С ЮУРГУ * 🦊 КОФЕ ФОКС * ЛАТТЕ-АРТ ЛИСА * РОЗЕТКИ У КАЖДОГО СТОЛА * WI-FI БЕЗ ПАРОЛЕЙ * ОВСЯНОЕ МОЛОКО БЕСПЛАТНО * КАЖДОЕ 5-Е КОФЕ В ПОДАРОК * РЯДОМ С ЮУРГУ
          </div>
        </div>

        <section className="section-padding" id="menu">
          <div className="section-header">
            <h2 className="section-title">ЧТО У НАС ЕСТЬ?</h2>
            <span
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё свежее
            </span>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Авторский</span>
              <img
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Рыжий Лис"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Рыжий Лис</h3>
                  <span className="price">180 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Карамель + корица. Согревает с первого глотка, как объятия лисы в снегопад.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Хит
              </span>
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Капучино с лисой"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Капучино Фокси</h3>
                  <span className="price">150 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Нежный капучино с фирменным латте-артом в виде лисы. Не хочется пить — хочется смотреть.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Новинка
              </span>
              <img
                src="https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Лавандовый хвост"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Лавандовый Хвост</h3>
                  <span className="price">180 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Латте с лавандой — нежный, ароматный и фиолетовый. Идеально для фото.
                </p>
              </div>
            </div>
          </div>

          {/* Полное меню */}
          <div style={{ marginTop: "60px" }}>
            <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "24px", fontWeight: 800, textTransform: "uppercase", marginBottom: "30px", borderBottom: "var(--border)", paddingBottom: "15px" }}>
              Классика
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
              {[
                { name: "Американо", price: "120 ₽" },
                { name: "Капучино", price: "150 ₽" },
                { name: "Латте", price: "170 ₽" },
                { name: "Раф", price: "170 ₽" },
                { name: "Флэт уайт", price: "150 ₽" },
                { name: "Фокс-какао", price: "150 ₽" },
              ].map((item) => (
                <div key={item.name} style={{ border: "var(--border)", padding: "14px 18px", background: "white", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700 }}>
                  <span>{item.name}</span>
                  <span style={{ color: "var(--primary)", fontFamily: "Playfair Display, serif", fontSize: "18px" }}>{item.price}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "24px", fontWeight: 800, textTransform: "uppercase", marginBottom: "30px", borderBottom: "var(--border)", paddingBottom: "15px" }}>
              Перекусы
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
              {[
                { name: "Сырники без муки", price: "120 ₽" },
                { name: "Батончик без сахара", price: "80 ₽" },
                { name: "Сэндвич «Фокс-тост»", price: "130 ₽" },
                { name: "Круассан классический", price: "90 ₽" },
                { name: "Круассан шоколадный", price: "90 ₽" },
                { name: "Печенье овсяное", price: "60 ₽" },
                { name: "Пицца с ветчиной и сыром", price: "110 ₽" },
                { name: "Сырный треугольник", price: "100 ₽" },
              ].map((item) => (
                <div key={item.name} style={{ border: "var(--border)", padding: "14px 18px", background: "white", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700 }}>
                  <span>{item.name}</span>
                  <span style={{ color: "var(--primary)", fontFamily: "Playfair Display, serif", fontSize: "18px" }}>{item.price}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "var(--accent)", border: "var(--border)", padding: "24px 30px", boxShadow: "var(--shadow)" }}>
              <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "20px", fontWeight: 800, textTransform: "uppercase", marginBottom: "16px", color: "var(--dark)" }}>
                🔥 Комбо-предложения
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ background: "white", border: "var(--border)", padding: "12px 20px", fontWeight: 800 }}>Капучино + Круассан = <span style={{ color: "var(--primary)" }}>199 ₽</span></div>
                <div style={{ background: "white", border: "var(--border)", padding: "12px 20px", fontWeight: 800 }}>Американо + Сырники = <span style={{ color: "var(--primary)" }}>200 ₽</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe" id="about">
          <div>
            <h2 className="vibe-title">НЕ ПРОСТО КОФЕЙНЯ.</h2>
            <p className="vibe-text">
              Мы открылись рядом с ЮУрГУ, чтобы у студентов было место, где можно спокойно поучить конспекты, зарядить ноутбук и выпить качественный кофе, не считая каждую копейку. Никаких скрытых наценок, никакого «извините, розетки только у барной стойки». Можешь сидеть с одной чашкой два часа — и никто тебя не попросит уйти.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
              {["🔌 Розетки у каждого стола", "📶 Wi-Fi без паролей", "🥛 Растительное молоко бесплатно", "♻️ Скидка 30% за свой стакан", "📚 Сиди хоть весь день"].map((feat) => (
                <span key={feat} style={{ background: "rgba(255,255,255,0.2)", border: "2px solid white", padding: "6px 14px", fontSize: "13px", fontWeight: 700 }}>{feat}</span>
              ))}
            </div>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        {/* Акции */}
        <section className="section-padding" id="promo">
          <div className="section-header">
            <h2 className="section-title">ЛИСЬИ ХИТРОСТИ</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { icon: "♻️", title: "Свой стакан — скидка 30%", text: "Принеси термокружку — платишь меньше. Или купи нашу фирменную «Фокси» и пользуйся скидкой всегда." },
              { icon: "🥛", title: "Растительное молоко бесплатно", text: "Овсяное, миндальное, соевое — цена одна. Потому что забота о здоровье не должна быть роскошью." },
              { icon: "🦊", title: "Карта «Лисий хвост»", text: "Каждое 5-е кофе в подарок. А в день рождения — любой напиток за улыбку." },
              { icon: "🌅", title: "Утренний Лис", text: "С 8:00 до 10:00 — американо всего 90 ₽ для тех, кто идёт на первую пару." },
            ].map((promo) => (
              <div key={promo.title} style={{ border: "var(--border)", padding: "28px", background: "white", boxShadow: "var(--shadow)", transition: "0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translate(-4px, -4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "12px 12px 0 var(--dark)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow)"; }}>
                <div style={{ fontSize: "40px", marginBottom: "14px" }}>{promo.icon}</div>
                <h3 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "16px", textTransform: "uppercase", marginBottom: "10px" }}>{promo.title}</h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6 }}>{promo.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Отзывы */}
        <section className="section-padding" style={{ background: "var(--dark)", color: "white" }}>
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center", color: "white" }}>
            ЧТО ГОВОРЯТ ГОСТИ?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { text: "Я здесь написала курсовую. Кофе не остыл, ноутбук не разрядился, а на капучино нарисовали лису. Спасибо, Фокси!", name: "Алина", uni: "ЮУрГУ" },
              { text: "Скидка за свою кружку — лучшая эко-акция. А овсяное молоко без доплаты — ваще космос.", name: "Саша", uni: "ЧелГУ" },
              { text: "Наконец-то кофейня, где не смотрят косо, если ты сидишь час с одним американо и учишь билеты.", name: "Костя", uni: "Политех" },
            ].map((review) => (
              <div key={review.name} style={{ border: "3px solid rgba(255,255,255,0.2)", padding: "28px", background: "rgba(255,255,255,0.05)" }}>
                <p style={{ fontSize: "15px", lineHeight: 1.7, marginBottom: "20px", color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}>«{review.text}»</p>
                <div style={{ fontWeight: 800, color: "var(--accent)" }}>— {review.name}, {review.uni}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Галерея */}
        <section className="section-padding" style={{ paddingBottom: 0 }}>
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @COFFEE_FOX_CHEL
          </h2>
        </section>
        <div className="social-grid">
          <div className="social-item">
            <img
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Кофе с латте-артом"
            />
          </div>
          <div className="social-item">
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Атмосфера кофейни"
            />
          </div>
          <div className="social-item">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Капучино"
            />
          </div>
          <div className="social-item">
            <img
              src="https://cdn.poehali.dev/files/276636b4-bf7c-4e0c-9c1c-337d5ed4acac.png"
              alt="Работа в кофейне"
            />
          </div>
        </div>
      </main>

      <footer id="contacts">
        <div>
          <div className="footer-logo">🦊 КОФЕ ФОКС</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Кофе Фокс — тепло, которое не жжёт карман.<br />
            Рядом с ЮУрГУ, Челябинск.
          </p>
          <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://t.me/coffeefox" style={{ border: "var(--border)", padding: "8px 16px", fontWeight: 800, fontSize: "13px", textDecoration: "none", color: "var(--dark)", background: "var(--accent)" }}>Telegram</a>
            <a href="#" style={{ border: "var(--border)", padding: "8px 16px", fontWeight: 800, fontSize: "13px", textDecoration: "none", color: "var(--dark)", background: "white" }}>TikTok</a>
            <a href="#" style={{ border: "var(--border)", padding: "8px 16px", fontWeight: 800, fontSize: "13px", textDecoration: "none", color: "var(--dark)", background: "white" }}>ВКонтакте</a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#menu" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#about" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#promo" style={{ color: "inherit", textDecoration: "none" }}>Акции</a></li>
            <li><a href="#contacts" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Ежедневно: 8:00 – 22:00</li>
            <li style={{ color: "var(--primary)", fontWeight: 700, marginTop: "8px" }}>За час до закрытия — скидка 20% навынос</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2026 КОФЕ ФОКС</span>
          <span>ХВОСТ НЕ ПОМЕХА</span>
          <span>Челябинск, рядом с ЮУрГУ</span>
        </div>
      </footer>
    </>
  );
}