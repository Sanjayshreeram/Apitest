import MediaCard from "./card/MediaCard";
import { Box } from "@mui/material";
import { Api } from "./options/Api";
import { useState } from 'react';
import { useEffect } from 'react';

//card ->id -> /3->id 

function App() {

  const [data, setData] =useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Api();
        setData(res.data);
         console.log("full file",res); // Log response data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

   console.log("name is ",data)

  return (
    <Box sx={{ display: 'flex',flexWrap:'wrap',padding:'40px', gap:'20px',width:'100%' }}>


      {
        data.map((s)=>(
             
          <MediaCard ev={s}/>

        ))
      }

  </Box>

   

  );
}

export default App;
