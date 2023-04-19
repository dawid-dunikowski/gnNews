import { useSelector } from "react-redux";
import Clock from "./Clock";

const Footer = () => {
  const {  news } = useSelector(store =>store.news);

    return ( 
        <footer className="d-flex flex-wrap justify-content-between align-items-center px-3 px-xl-5 py-3 mt-4 border-top grid-footer">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-md-0 text-body-secondary"><strong  className="me-2">Bieżący czas: <Clock/></strong></span>
          
          </div>
          <div className="col-md-4 justify-content-end d-flex align-items-center">
            <span className="text-body-secondary"><strong  className="me-2">Liczba artykułów:</strong>{news.length}</span>
          </div>
           
        </footer>
     );
}
 
export default Footer;