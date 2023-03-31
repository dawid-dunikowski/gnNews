import { useEffect } from "react";
import { useParams} from 'react-router-dom';
import { useDispatch,  useSelector} from 'react-redux';
import { fetchCountryNews, switchCountry } from '../../features/newsStore';

import News from "./News";

const Country = () => {
    const {id} = useParams();
  
    const dispatch = useDispatch();
    const news = useSelector(store =>store.news.news);
    
    useEffect(()=>{
      dispatch(switchCountry(id));
      dispatch(fetchCountryNews(id));
    },[id]);

    return (
        <>
        <News country={id}/>
        </>
     );
}
 
export default Country;