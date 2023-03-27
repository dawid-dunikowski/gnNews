import { useSelector } from "react-redux";

import "./main.scss";
import NewsPopup from "./Modal/NewsPopup";
const Main = () => {

  const {  
    loading,
    news,
    viewGridNews,
    error
  } = useSelector(store =>store.news);

const style = !viewGridNews?{width: '10%', minWidth: '400px'}:{};
const card = !viewGridNews? 'card card--list d-flex flex-row':'card';

const list = news
.map(item =>{
  const newitem = {...item};
  newitem.publishedAt = new Date(item.publishedAt).toUTCString();
  return newitem;
})
.map((item,index)=> (
      <div key={index}>
        <div className={card}>
          {item.urlToImage && <img src={item.urlToImage} className="card-img-top" style={style} alt="..."/>}
          <div className="card-body">
          <h3 className="card-subtitle mb-2 text-body-secondary fs-5">{item.title}</h3>
            <p className="card-text">Source: {item.source.name}</p>
            <p className="card-text">Source: {item.publishedAt}</p>
            <NewsPopup title={item.title} source={item.source.name} content={item.content} url={item.url}/>
          </div>
        </div>
      </div>
))

const grid = `${viewGridNews?'grid-layout':'grid-layout--list'}`
    return ( 
            <main className="container">
              <div className={grid}>
                {list}    
              </div>
            </main>
          );
}
 
export default Main;