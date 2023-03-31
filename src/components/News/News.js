import { useSelector } from "react-redux";
import NewsPopup from "../Modal/NewsPopup";

import "./news.scss";

const News = () => {

    const {  
        loading,
        news,
        viewGridNews,
        error
      } = useSelector(store =>store.news);
    
   
    const card = !viewGridNews? 'card card--list':'card card-cascade';
    const grid = `${viewGridNews?'grid-layout':'grid-layout--list'}`;
    
    const list = news
    .map(item =>{
      const newitem = {...item};
      newitem.publishedAt = new Date(item.publishedAt).toUTCString();
      return newitem;
    })
    .map((item,index)=> (
          <article key={index} className={card}>
            <div className={!viewGridNews?'d-md-flex flex-row':''}>
              {item.urlToImage && <img src={item.urlToImage} className="card-img-top img-fluid"  alt="..."/>}
              <div className={!viewGridNews?'card-body ':'card-body card-body-cascade text-center'}>
                <h3 className="card-title mb-2 text-body-secondary fs-5">{item.title}</h3>
                <p className="card-text">Source: {item.source.name}</p>
                <p className="card-text">Source: {item.publishedAt}</p>
                <NewsPopup title={item.title} source={item.source.name} content={item.content} url={item.url}/>
              </div>
            </div>
          </article>
    ))
    
    return ( 
        <section>
          <h2>Lista of news</h2>
          {loading && <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
          
          {!loading && news.length ?(
            <div className={grid}> 
                {list}
              </div> 
            ) :null 
          } 
          
          {!loading && error? <div className="danger"><div className="d-flex justify-content-center fs-5 alert alert-danger" >Error: {error}</div></div>:null}  
        </section>
     );
}
 
export default News;