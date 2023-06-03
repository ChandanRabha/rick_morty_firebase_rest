import { useCallback, useEffect, useState } from 'react';
import './App.css'
import IResponseModel, { Result } from './models/IResponseModel';

function App() {
  const [data, setData] = useState<Result[]>();

  const fetchData = useCallback(async () => {
    console.log("Loading");

    try {
      const response = await fetch(`${import.meta.env.VITE_RICK_MORTY_API}/character`);

      const data = await response.json() as IResponseModel;

      setData(data.results);
    }
    catch (error) {
      console.error(error)
    }
    finally {
      console.log("Loading Done")
    }
  }, []);


  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    data?.length && console.log(data);
  }, [data])

  return (
    <div className='flex flex-col md:flex-row gap-5 p-5 sm:p-10 relative dark:bg-mainBG bg-cover bg-no-repeat bg-fixed'>
      <div className="text-xl sm:text-5xl text-center w-full sticky md:top-[calc(50%-6rem)] h-fit text-[#64ee44] flex flex-col">
        <label>
          RICK & MORTY
        </label>
        <label className='dark:text-white'>CHARACTERS</label>
      </div>
      <div className="flex flex-wrap justify-evenly gap-5 ">
        {data?.map(eachData =>
          <div className='drop-shadow-xl gap-2 flex flex-col'>
            <img src={eachData.image} alt={eachData.name} className='rounded-md' />
            <div className='flex flex-col dark:text-white drop-shadow-xl'>
              <label>{eachData.name}</label>
              <label>{eachData.species}</label>
              <label>{eachData.status}</label>
            </div>
          </div>)}
      </div>
    </div>

  )
}

export default App
