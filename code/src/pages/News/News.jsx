import React from "react";
import "./news.scss";
import NewsCard from "../../components/NewsCard/NewsCards";

function News() {
   const newsPosts = [
     {imgUrl: "https://images.unsplash.com/photo-1618602500188-876e52298659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlzbmVzcyUyMGFuYWx5c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      date: "15-декабря, 2021",
      title: "АНТИКРИЗИСНЫЙ ПЛАН ЗА 3 ДНЯ",
      post: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время.",
      likes: "120",
      comment: "25",
      share: "15"
      },
     {imgUrl: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      date: "20-ноября, 2021",
      title: "Бизнесс коучинг",
      post: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время.",
      likes: "60",
      comment: "35",
      share: "20"
      },
     {imgUrl: "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=",
      date: "12-октября, 2021",
      title: "Последние  бизнесс новости",
      post: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время.",
      likes: "100",
      comment: "60",
      share: "35"
      },
     {imgUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      date: "10-сентября, 2021",
      title: "АНТИКРИЗИСНЫЙ ПЛАН ЗА 3 ДНЯ",
      post: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время.",
      likes: "33",
      comment: "21",
      share: "10"
      },
     {imgUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      date: "5-августа, 2021",
      title: "АНТИКРИЗИСНЫЙ ПЛАН ЗА 3 ДНЯ",
      post: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время.",
      likes: "90",
      comment: "35",
      share: "10"
      },
     {imgUrl: "https://images.unsplash.com/photo-1618602500188-876e52298659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlzbmVzcyUyMGFuYWx5c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      date: "15-июля, 2021",
      title: "АНТИКРИЗИСНЫЙ ПЛАН ЗА 3 ДНЯ",
      post: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время.",
      likes: "100",
      comment: "25",
      share: "20"
      }

   ]

  return (
    <div className="news">
     <div className="container">
       <div className="news-heading">
         <h1>Последние новости</h1>
       <p>Интервью, статьи и публикации наших экспертов.</p>
       </div>
    <div className="news-wrap">
      {newsPosts.map((newsPost, idx) => {
        return (
          <NewsCard
          newsImg={newsPost.imgUrl}
          newsDate={newsPost.date}
          newsTitle={newsPost.title}
          newsPost={newsPost.post}
          newsLikes={newsPost.likes}
          newsComments={newsPost.comment}
          newsShare={newsPost.share}
          key={idx}
           />
        );
      })} 
      
    </div>
    </div>
    </div>
  );
}

export default News;
