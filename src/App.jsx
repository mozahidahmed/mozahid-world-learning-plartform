
import { useEffect, useState } from 'react';
import CircleLoader from "react-spinners/CircleLoader";
import Home from './components/home/Home';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import PageHtml from './components/pages/html/html';
import Careers from './components/pages/careers/Careers';



function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 2000);
  },[])


  return (
    <div className="">
      {loading ? (
        <div className="h-screen grid justify-center items-center">
          <CircleLoader
            color={"#2874f0"}
            loading={loading}
            size={150}
            className="h-screen"
          />
        </div>
      ) : (
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/html" element={<PageHtml />}></Route>
            <Route path="/careers" element={<Careers />}></Route>
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;