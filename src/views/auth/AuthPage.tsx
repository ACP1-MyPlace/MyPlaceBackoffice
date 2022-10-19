import React, {useState} from "react";
import {
    BottomNavigation,
    BottomNavigationAction,
    Card,
    CardActions,
    CardContent,
    Stack,
    Typography
} from "@mui/material";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import {AccountLayoutAdmin} from "../../layouts/AccountLayoutAdmin";
import Login from "./Login";

function AuthPage() {
    
    const [actualTab, setActualTab] = useState<number>(0);
    
    return (
        <AccountLayoutAdmin>
            <Card sx={{ minWidth: '493px' }}>
                <CardContent>
                    <Stack mb={2}>
                        <Typography variant="h1" color="primary">
                            MY PLACE
                        </Typography>
                        <Typography variant="h4" color="primary">
                            (backoffice)
                        </Typography>
                    </Stack>

                    <Stack p={1}>
                        { (actualTab === 0) && <Login /> }
                    </Stack>
                </CardContent>
                
                <CardActions>
                    <BottomNavigation
                        showLabels
                        value={actualTab}
                        onChange={(event, newValue) => {
                            setActualTab(newValue);
                        }}
                        sx={{ width: '100%' }}
                    >
                        <BottomNavigationAction label="Iniciar Sesión" icon={<PersonRoundedIcon />} />
                        <BottomNavigationAction label="Registrarse" icon={<PersonAddAlt1RoundedIcon />} />
                    </BottomNavigation>
                </CardActions>
            </Card>
        </AccountLayoutAdmin>
    );
}

export default AuthPage;
