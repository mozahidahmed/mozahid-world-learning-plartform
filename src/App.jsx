
import { useEffect, useState } from 'react';
import CircleLoader
  from "react-spinners/CircleLoader";
import Home from './components/home/Home';
import Footer from './components/shared/Footer';



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
          <Home /><Footer/>
        </div>
      )}
    </div>
  );
}

export default App;