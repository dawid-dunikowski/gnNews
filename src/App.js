import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import { fetchNews } from './features/newsStore';
import './App.scss';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchNews());

  },[]);
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
