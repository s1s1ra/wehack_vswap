import React from 'react'
import {styled} from '@mui/material/styles'
import { Paper, Box, Grid } from '@mui/material';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Groups3Icon from '@mui/icons-material/Groups3';
import ThreePIcon from '@mui/icons-material/ThreeP';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Popup from 'reactjs-popup';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Profile = () => {
    const [flip, setFlip] = useState(false);
    const [flip2, setFlip2] = useState(false);
    const [flip3, setFlip3] = useState(false);
    const [flip4, setFlip4] = useState(false);
    const [flip5, setFlip5] = useState(false);
    const [flip6, setFlip6] = useState(false);

    const genders = [
        {value:'Agender'},
        {value:'Bigender'},
        {value:'Cisgender'},
        {value:'GenderFluid'},
        {value:'GenderQueer'},
        {value:'Mx'},
        {value:'Non-Binary'},
        {value:'Passing'},
        {value:'Third Gender'},
        {value:'Transgender'},
        {value:'Two Spirit'},
        {value:'Ze/Hir'},
    ]

    const sex = [
        'Lesbian',
        'Gay',
        'Bisexual',
        'Transgender',
        'Question/Queer',
        'Intersex',
        'Asexual'
    ]

    const sexualities = [
        {value:'Lesbian'},
        {value:'Gay'},
        {value:'Bisexual'},
        {value:'Transgender'},
        {value:'Questioning/Queer'},
        {value:'Intersex'},
        {value:'Asexual'},
    ]

    const handleClick = () => {
        setFlip(!flip);
    }

    const data = [
        {
        'fname':'Erica',
        'lname':'Matthews',
        'gender' : 'Non Binary',
        'pronouns': 'They/Them',
        'age': '20',
        'sexOrientation': 'Bisexual',
        'ethnicity' : 'Asian',
        'religion' : 'Christian'
        }
    ]
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  return (
    <div className = 'App'>
        <div className = 'card_profile'>
            <Paper sx ={{elevation: 2, margin:10, marginBottom: 5, borderRadius: 10}}>
                <Box style ={{background: 'linear-gradient(90deg, rgba(30,36,0,1) 0%, rgba(77,9,121,1) 35%, rgba(255,0,33,1) 100%)', height: 130, padding: 20}}>
                    <div className = 'profile-pic'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEdOGWCl2XyCAxD_pzARX98Swdft2_XB2zT-dCU4V8ovseWC5d5EVEi1bW4LHonanbIU&usqp=CAU" alt=""/>
                    </div>
                </Box>
                <Popup trigger ={<Button style={{marginLeft: '90%', borderRadius: '10%', backgroundColor:'#e3e3e3'}} >
                    <EditIcon/>
                    </Button>} modal>
                    <div style={{backgroundColor:'#e3e3e3', width:'800px', height: '500px', padding: 20}}>
                        <Paper elevation={2} sx={{padding: 5}}>
                            <div style={{paddingBottom:30}}>
                                Update Details
                            </div>
                            <div>
                                <TextField
                                id="firstName"
                                label="FirstName"
                                defaultValue={data[0].fname}
                                sx={{margin: 2}}
                                />

                                <TextField
                                id="lastName"
                                label="Last Name"
                                defaultValue={data[0].lname}
                                sx={{margin: 2}}
                                />

                                {/* <Dropdown options={sex} value={data[0].sexOrientation} placeholder="Select an option" />; */}

                                <TextField
                                    id="outlined-select-gender"
                                    select
                                    label="Genders"
                                    defaultValue={data.gender}
                                    helperText="Please select your gender"
                                    sx={{margin: 2}}
                                    >
                                    {genders.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    id="outlined-select-gender"
                                    select
                                    label="Sex Orientation"
                                    defaultValue={data.sexOrientation}
                                    helperText="Please select your gender"
                                    sx={{margin: 2}}
                                    >
                                    {sexualities.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                id="pronouns"
                                label="Pronouns"
                                defaultValue={data[0].pronouns}
                                sx={{margin: 2}}
                                /> 
                                <div style={{margin: 2}}>
                                    <div>Age</div>
                                    <Slider
                                    sx={{width: 170, margin: 2}}
                                    size="small"
                                    defaultValue={data[0].age}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                    />
                                </div>
                            </div>
                        </Paper>
                    </div>
                
                </Popup>
                <Box sx={{paddingTop: 10}}>
                    <div className='profile-content' style={{fontSize: 50, paddingBottom: 5}}>
                        {data[0].fname} {data[0].lname}
                    </div>
                </Box>  
                <Box sx={{padding: 4}} style={{fontSize: 50}}>
                    <Grid container spacing = {4}>
                        <Grid item xs={3}>
                            <div style={{fontSize:15}}>Gender</div>
                            <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                                <Item onClick={() => setFlip(!flip)} style={{height: 45, justifyContent:'center', alignItems:'center'}}>
                                    <Groups3Icon sx={{fontSize: 50}}/>
                                </Item>
                                <Item onClick={() => setFlip(!flip)} style={{height: 45, fontSize: 30, textAlign:'center'}}>
                                    {data[0].gender}
                                </Item>
                            </ReactCardFlip>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{fontSize:15}}>Pronouns</div>
                            <ReactCardFlip isFlipped={flip2} flipDirection="vertical">
                                <Item onClick={() => setFlip2(!flip2)} style={{height: 45, justifyContent:'center', alignItems:'center'}}>
                                    <ThreePIcon sx={{fontSize: 50}}/>
                                </Item>
                                <Item onClick={() => setFlip2(!flip2)} style={{height: 45, fontSize: 30, textAlign:'center'}}>
                                    {data[0].pronouns}
                                </Item>
                            </ReactCardFlip>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{fontSize:15}}>Age</div>
                            <ReactCardFlip isFlipped={flip3} flipDirection="vertical">
                                <Item onClick={() => setFlip3(!flip3)} style={{height: 45, justifyContent:'center', alignItems:'center'}}>
                                    <ChildCareIcon sx={{fontSize: 50}}/>
                                </Item>
                                <Item onClick={() => setFlip3(!flip3)} style={{height: 45, fontSize: 30, textAlign:'center'}}>
                                    {data[0].age} years
                                </Item>
                            </ReactCardFlip>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{fontSize:15}}>Sexuality</div>
                            <ReactCardFlip isFlipped={flip4} flipDirection="vertical">
                                <Item onClick={() => setFlip4(!flip4)} style={{height: 45, justifyContent:'center', alignItems:'center'}}>
                                    <Diversity1Icon sx={{fontSize: 50}}/>
                                </Item>
                                <Item onClick={() => setFlip4(!flip4)} style={{height: 45, fontSize: 30, textAlign:'center'}}>
                                    {data[0].sexOrientation}
                                </Item>
                            </ReactCardFlip>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{fontSize:15}}>Ethnicity</div>
                            <ReactCardFlip isFlipped={flip5} flipDirection="vertical">
                                <Item onClick={() => setFlip5(!flip5)} style={{height: 45, justifyContent:'center', alignItems:'center'}}>
                                    <Diversity3Icon sx={{fontSize: 50}}/>
                                </Item>
                                <Item onClick={() => setFlip5(!flip5)} style={{height: 45, fontSize: 30, textAlign:'center'}}>
                                    {data[0].ethnicity}
                                </Item>
                            </ReactCardFlip>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{fontSize:15}}>Religion</div>
                            <ReactCardFlip isFlipped={flip6} flipDirection="vertical">
                                <Item onClick={() => setFlip6(!flip6)} style={{height: 45, justifyContent:'center', alignItems:'center'}}>
                                    <AccountBalanceIcon sx={{fontSize: 50}}/>
                                </Item>
                                <Item onClick={() => setFlip6(!flip6)} style={{height: 45, fontSize: 30, textAlign:'center'}}>
                                    {data[0].religion}
                                </Item>
                            </ReactCardFlip>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            {/* <Paper>

            </Paper> */}
        </div> 
    </div>
  )
}

export default Profile
