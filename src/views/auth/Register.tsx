import React, {Component} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import './Register.css';
import {Stack} from "@mui/material";

type RegisterProps = {}
type RegisterState = { 
    firstName: string,
    lastName: string,
    email: string, 
    password: string, 
    repeatedPassword: string,
  }
 
class Register extends Component<RegisterProps, RegisterState> {

    constructor(props: RegisterProps){
        super(props);
        this.state = {
            firstName: 'John', 
            lastName: 'Doe', 
            email : 'john@gmail.com', 
            password: '******', 
            repeatedPassword: '******', 
        }
    }

    render(){
        return (
            <form className="register-form">
                <Stack spacing={2}>
                    <TextField 
                        onChange={e => this.setState({firstName: e.target.value})} 
                        variant="outlined"  
                        label="Nombre"
                        size="small"
                        value={this.state.firstName}
                    />
                    <TextField
                        onChange={e => this.setState({lastName: e.target.value})} 
                        variant="outlined"  
                        label="Apellido"
                        size="small"
                        value={this.state.lastName} />
                    <TextField
                        onChange={e => this.setState({email: e.target.value})} 
                        variant="outlined" 
                        label="Email"
                        size="small"
                        value={this.state.email}/>
                    <TextField
                        onChange={e => this.setState({password: e.target.value})}  
                        variant="outlined" 
                        label="Password" 
                        type="password"
                        size="small"
                        value={this.state.password}/>
                    <TextField
                        onChange={e => this.setState({repeatedPassword: e.target.value})} 
                        variant="outlined" 
                        label="Repetir password" 
                        type="password"
                        size="small"
                        value={this.state.repeatedPassword}/>
                    <Button fullWidth color="primary" variant="contained" onClick={()=>this.registerHandler()}>
                        CONFIRMAR
                    </Button>
                </Stack>
            </form>
            )
    }
   
    async registerHandler(){
        const email = this.state.email
        const password = this.state.password
        const repeatedPassword = this.state.repeatedPassword
        if(password.length < 6){
            alert('Password should have at least 6 characters')
            return
        }
        if(password != repeatedPassword){
            alert('Passwords are not the same')
            return
        }
        const firstName = this.state.firstName
        const lastName = this.state.lastName
        const URL = "http://localhost:8080/api/v1/users/register";
        const body = {
            mail: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            type: "BACKOFFICE_USER"
        }
        try {
            const response = await fetch(URL, 
            { 
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body) 
            })
            if(response.status === 200) {
                alert('User created successfully')
            } else {
                alert('An error has ocurred')
            }
        } catch {
            alert('No response from server')
        }
    }

}

const themeButton = createTheme({
    palette: {
      primary: {
        main: '#FF385C',
      },
    },
  });



export default Register;
