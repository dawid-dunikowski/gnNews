import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../../features/newsStore';
import News from "./News";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(fetchNews());
  
    },[]);
    return ( 
        <>
        <News q="a"/>
        </>
     );
}
 
export default Home;