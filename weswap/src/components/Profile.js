import React from 'react'
import "../styles.css";
<<<<<<< HEAD
import {useState, useEffect } from 'react';
import axios from "axios";
import {Button} from '@mui/material';
=======
import { Button } from '@mui/material';
import axios from "axios";
>>>>>>> 232bc542134842e2f8dcfd54440eb63a82de9966


const data2 = [{'name':'Prachi','gender':'female','age':'23','pronouns':'she/her','profession':'student','religion':'hindu','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb_V_Ha4XAl47doWf_2lF-actuld60ssYew&usqp=CAU'},
{'name':'Akshata','gender':'female','age':'22','pronouns':'she/her','profession':'Dr','religion':'christian','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU'},
{'name':'Sisira','gender':'female','age':'23','pronouns':'she/her','profession':'farmer','religion':'hindu','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'},
{'name':'Vishal','gender':'male','age':'21','pronouns':'he/him','profession':'lawyer','religion':'jain','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'},
{'name':'Prachi','gender':'female','age':'23','pronouns':'she/her','profession':'It professional','religion':'hindu','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb_V_Ha4XAl47doWf_2lF-actuld60ssYew&usqp=CAU'},
{'name':'Akshata','gender':'female','age':'22','pronouns':'she/her','profession':'Professor','religion':'christian','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU'},
{'name':'Sisira','gender':'female','age':'23','pronouns':'she/her','profession':'Student','religion':'hindu','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'},
{'name':'Vishal','gender':'male','age':'21','pronouns':'he/him','profession':'Unemployed','religion':'jain','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'},
];

const state = {
  data : [],
  per: 9,
  page: 1,
  total_pages: null
};



const Profile = () => {
<<<<<<< HEAD
  const [data, setData] =  useState([]);
=======
  const handleRequest = async(r_id) => {
    const data = {'sender_id' : 1, 'receiver_id': r_id}
    const sendRequest = async()=> {
      const response = await axios.post('http://localhost:8080/', data);
      console.log(response);
    }

    sendRequest().catch(console.error);
  }

>>>>>>> 232bc542134842e2f8dcfd54440eb63a82de9966
  const uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  useEffect(() => {
    const getUserData = async() => {
      const response = await axios.get('http://localhost:8080/users');
      const data = response.data;
      console.log(data);
      setData(data);
    }
    getUserData().catch(console.error);
  },[])
  const handleRequest = async(r_id) => {
    console.log(r_id);
    const data = {'senderId': 4, 'receiverId': r_id}
    const sendRequest = async() => {
      const response = await axios.post('http://localhost:8080/requests/', data);
      console.log(response);
    }
    sendRequest().catch(console.error);
  }
  return (
    <>
    <div className="App">
      <div className="container">
      <div className="clearfix">
        <div className="row">
          {/*{this.dataset.map(dataset => (*/}
<<<<<<< HEAD
          {Array.from({ length: data.length }).map((_, i) => {
            const key = i;
          return(
            <div className="col-md-4 animated fadeIn" key={i}>
=======
          {Array.from({ length: data.length }).map((_, i) => (
            <div className="col-md-4 animated fadeIn" key={data[i].id}>
>>>>>>> 232bc542134842e2f8dcfd54440eb63a82de9966
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data2[i].image}
                      className="card-img-top"
                      alt=""
          />
                  </div>
                  <h5 className="card-title">
                  {data[i].firstName +
                      " " +
                      data[i].lastName}
                    </h5>
                  <p className="card-text">
                    {data[i].pronouns 
                    +
                      ", " +
                      data[i].profession
                      }
                    <br />
<<<<<<< HEAD
                    <button onClick={() => {handleRequest(key)}}>
                        Send Request
                    </button>
=======
                    <span className="phone">{uppercase(data[i].profession)}</span>
                    <span>
                    <Button id={data[i].id}  onClick={handleRequest(this.id)}>
                      Send Request
                    </Button>
                    </span>
>>>>>>> 232bc542134842e2f8dcfd54440eb63a82de9966
                  </p>
                </div>
              </div>
            </div>)})}
            {/*))}*/}
        </div>
        <button
          className="btn btn-light btn-block w-50 mx-auto"
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More Users
        </button>
        
      </div>
      </div>
    </div>
    {/*<div class="container" style={{paddingTop:20}}>
    <Row className='g-4' xxl={"auto"}>
      {Array.from({ length: data.length }).map((_, i) => (
        <Col style={{paddingInline:20}}>
          <Card sx={{ maxWidth: 350 }} style={{backgroundColor:'#D5E3F0'}}>
            <CardMedia
              sx={{ height: 250 }}
              image={data[i].image}
              title={data[i].name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data[i].name}
              </Typography>
              <Typography variant="body2">
                  <Grid container spacing={2} padding={1}>
                    <Grid item xs={4}><Item>{data[i].gender}</Item></Grid>
                    <Grid item xs={4}><Item>{data[i].age}</Item></Grid>
                    <Grid item xs={4}><Item>{data[i].pronouns}</Item></Grid>
                    </Grid>
                  <Grid container spacing={2} padding={1}>
                    <Grid item xs={6}><Item>{data[i].ehtnicity}</Item></Grid>
                    <Grid item xs={6}><Item>{data[i].religion}</Item></Grid>
                  </Grid>                               
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="auto" style={{color:'#fff',backgroundColor: '#78A2CC'}}>Chat</Button>
            </CardActions>
          </Card>
        </Col>
      ))}
    </Row>
      </div>*/}
    </>
  )
}

export default Profile