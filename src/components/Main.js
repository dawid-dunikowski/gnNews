import { Routes, Route } from 'react-router-dom';
import Home from './News/Home';
import Country from './News/Country';

const Main = () => {

    return ( 
            <main className="grid-content mx-3 me-md-0 ms-md-4">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/country/:id" element={<Country />} />
              </Routes>
            </main>
          );
}
 
export default Main;