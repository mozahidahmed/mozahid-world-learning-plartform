
import { useEffect, useState } from 'react';
import CircleLoader from "react-spinners/CircleLoader";
import Home from './components/home/Home';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import HtmlContent from "./components/pages/html/HtmlContent";
import Careers from './components/pages/careers/Careers';
import NotFoundPage from './components/shared/NotFoundPage';



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
            <Route path="/html" element={<HtmlContent />}></Route>
            <Route path="/careers" element={<Careers />}></Route>
            <Route path="/*" element={<NotFoundPage />}></Route>
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;