import "./home.scss";
import "./Banner/Banner";
import Banner from "./Banner/Banner";
import HomeServices from "./HomeServices/Homeservices";
import Form from "./Form/Form";
import Adverd from "./Adverd/Adverd";

function Home() {
  const cards = [
    {
      title: "Бизнес консультирование",

      imgUrl: "/assets/images/card-img1.jpg",

      description:
        "Наша консалтинговая компания на протяжении многих лет занимается оказанием правовых и консалтинговых услуг коммерческим организациям и индивидуальным предпринимателям в любых сферах деятельности. Наши специалисты смогут решить любые проблемы, связанные с консалтингом .Все наши клиенты получают полный комплекс мероприятий юридического сопровождения самого высокого уровня. Вне зависимости от формы вашей организации (ООО,ОАО, ИП), мы всегда стремимся поддержать Ваше дело, чтобы Вы могли спокойно его развивать и достигать благополучия.",
    },
    {
      title: "Финансовый анализ",

      imgUrl: "/assets/images/Billy52.png",

      description:
        "Эксперты компании Орион помогут вашему финансовому директору провести финансовый анализ предприятия, анализ денежного потока, анализ финансовой отчётности, анализ финансовой устойчивости, оценку инвестиционных проектов а также провести операции с финансовыми активами, которые осуществляются в интересах третьих лиц за собственный счет или за счет этих лиц, а в случаях предусмотренных законодательством ,и за счёт привлечённых от других лиц финансовых активов целью получения прибыли или сохранения реальной стоимости финансовых активов. В ходе работы с заказчиками центр финансового консалтинга Орион решает задачи по ведению финансового учёта и предоставляет услуги финансового консалтинга аутсорсинга и аудита.",
    },
    {
      title: "Глобальный бизнес",

      imgUrl: "/assets/images/card-img2.jpg",

      description:
        "Глобальный бизнес-анализ направлен на местные компании, которые хотят добиться международного присутствия. Целью глобальных бизнес-аналитиков является оказание помощи этим организациям, помогая им воспользоваться возможностями, предоставляемыми глобализацией, что облегчает компаниям осуществление их бизнеса в других странах. Прежде чем компания выйдет на международную арену, она обязательно должна получить всесторонний глобальный бизнес-анализ, чтобы она могла принимать правильные решения и устранять любые потенциальные подводные камни.В процессе глобального бизнес-анализа аналитики проводят оценку компании, типов товаров или услуг, которые она предлагает, а также другие виды аналитических исследований с целью выявления осуществимости бизнеса на международном уровне. Если компания нуждается в реструктуризации, прежде чем она сможет перейти к международной торговле, аналитики сделают предложение такой компании на основе результатов исследования. Например, некоторые компании могут быть финансово не готовы к открытию филиалов или дочерних компаний в других странах. Предложение может включать в себя предложения стратегий, которые позволят компании преодолеть такие препятствия, используя имеющиеся ресурсы в своей среде.",
    },
    {
      title: "Бизнес коучинг",

      imgUrl: "/assets/images/card-img3.jpg",

      description:
        "Что есть коучинг для бизнеса и зачем Коучинг - это одна из самых эффективных методик личностного роста, которая активно развивается в мире на протяжении последних 40 лет. Это, пожалуй, единственная методика личностного роста, заточенная под бизнес нужды. Добиться изменений невозможно, не изменившись самому. С помощью коучинга, Вы запустите такой процесс изменений в себе или Вашей команде, который позволит Вам добиться прорыва и достичь больших результатов в жизни, профессиональной деятельности и бизнесе",
    },
    {
      title: "Развитие бизнеса",

      imgUrl: "/assets/images/card-img4.jpg",

      description:
        "Мы готовы помогать малым и средним предприятиям развиваться, добиваться успеха и развиваться дальше, и тем самым вносить значительный вклад в местную, а затем и в региональную экономику. Мы помогаем клиентам из разных отраслей найти высококвалифицированных местных консультантов и международных экспертов, способных качественно преобразовать их бизнес. Наша сеть опытных практиков, аналитиков и консультантов поможет перейти на другой уровень и начать мыслить масштабно всем нашим клиентам - как небольшим, но стремящимся к росту компаниям, так и тем, кто уже выходит на международный уровень.",
    },
    {
      title: "Финансовый советник",

      imgUrl: "/assets/images/card-img5.jpg",

      description:
        "Финансовый советник - является обученным специалистом, который оказывает людям квалифицированную помощь в вопросах инвестиций и финансового планирования. Услуги финансового консультанта могут включать планирование индивидуальной пенсии, консультации относительно покупки ценных бумаг, налоговое планирование и т.п. Услуги финансового советника могут оплачиваться в виде комиссионных или в виде фиксированной суммы за каждую проводимую операцию. Очень часто финансовые советники выполняют функции брокера по отношению к своим клиентам. В то время как оба предлагают профессиональные финансовые консультации, брокер обычно имеет дело только с инвестициями, в то время как финансовый консультант может также предложить консультации по поводу осуществления сбережений, создания бюджета и работе с долговыми обязательствами.",
    },
  ];
  return (
    <div className="home">
      <Banner />
      <div className="home__title-first">
        <hr />
        <h1> НАШИ ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ</h1>
      </div>
      <span className="home__second-title"><p>Мы готовы предоставить профессиональные услуги по разработке бизнес плана любого уровня сложности. Наши решения для бизнеса помогут решить любые задачи.</p></span>
      <div className="home__cards">
        {cards.map((card, idx) => {
          return (
            <HomeServices
              cardTitle={card.title}
              cardImg={card.imgUrl}
              cardDescription={card.description}
              key={idx}
            />
          );
        })}
      </div>

      <Adverd />


      <Form/>
    </div>
  );
}
export default Home;
