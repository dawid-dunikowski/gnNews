import {countries} from '../data/dataApp';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
const Nav = () => {
  const country = useSelector(store =>store.news.country);
  
    const list = countries.map((item,index)=> {
      let  active = '';
      if(item.symbol === country) active = 'active';
      return  <Link key={index} to={`country/${item.symbol}`} className={`nav-linklist-group-item list-group-item-action p-3 border-0 ${active}`}> <i className={`${item.flag} flag`}></i>{item.name}</Link>
    })

    return ( 
        <nav className="d-flex flex-column flex-shrink-0 p-3 bg-light grid-Nav mx-3 ms-md-0 me-3 me-md-4" >
          <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <span className="fs-4">News</span>
          </div>
          <hr/>
          <div className="list-group list-group-light">
          {list}
          </div>
          
        </nav>
     );
}
 
export default Nav;