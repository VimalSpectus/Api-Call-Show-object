import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const ViewObj = () => {
    
    const location:any = useLocation();
    const answer = location.state;
    console.log(answer);

    let navigate = useNavigate();
    const btnhandle = () => {
      navigate(`/`);  
    };

  return (
    <div>
    { JSON.stringify(answer)  }

    <p>
        <Button variant="contained"  onClick={() => {
        btnhandle();
        }}>Back</Button></p>
    </div>
  )
}

export default ViewObj