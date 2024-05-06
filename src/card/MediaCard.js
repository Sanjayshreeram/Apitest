import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Api } from '../options/Api';
import { useState,useEffect } from 'react';
import { Box } from '@mui/material';



export default function MediaCard({ ev }) {

  const navigate=useNavigate();
 

  const handleClick = () => {
    navigate(`/${ev.data.id}`);
    
  }


  return (
    <Box sx={{backgroundColor:'black',width:'100%',height:'100%'}}>
        <Card sx={{ maxWidth: 345, backgroundColor: 'yellowgreen', minWidth: 325 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {ev.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{ev.data.id}</Button>
        <Button size="small" onClick={handleClick}>learn more</Button>
      </CardActions>
    </Card>

    </Box>
  
  );
}
