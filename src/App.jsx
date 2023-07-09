
import { useEffect, useState } from 'react';
import CircleLoader
  from "react-spinners/CircleLoader";



function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 2000);
  },[])


  return (
    <div className="" >

{
  loading?
<div className="h-screen grid justify-center items-center">
            <CircleLoader

              color={"#2874f0"}
              loading={loading}
              size={150}
              className='h-screen'

            />
            
</div>
          :
         <>
           
            <h1 className='text-5xl font-bold'>mozahid world</h1>
            
              
         </>

}

    </div>
  );
}

export default App;