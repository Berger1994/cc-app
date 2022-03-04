import React from 'react';

import { blue } from '@mui/material/colors';
import { Container, Paper, Box, Avatar, TextField, Button, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import SecurityIcon from '@mui/icons-material/Security';
import background from "./background.svg";

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            <Container maxWidth="md" sx={{ display: "flex", alignItems: "center", minHeight: "100vh", pt: 4, pb: 4 }}>
                <Paper elevation={3} sx={{ p: 4, pt: 8, pb: 8 }}>
                    <Grid container>
                        <Grid item xs={12} sm={6}  >
                            <Box sx={{ textAlign: "center" }}>
                                <img src={background} />
                            </Box>

                            <Typography variant="h5">
                                Welcome
                            </Typography>

                            <Typography variant="subtitle1">
                                A simplified software solution that effectively replaces all multi-party call center applications
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}  >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Avatar sx={{ bgcolor: blue[700], margin: "auto", mt: 4 }} >
                                    <SecurityIcon />
                                </Avatar>

                                <TextField fullWidth margin="normal" label="Username" {...register("username", { required: true })} error={!!errors.username} />
                                <TextField fullWidth margin="normal" label="Password" {...register("password", { required: true })} error={!!errors.password} type="password" />

                                <Button fullWidth variant="contained" type="submit" >Login</Button>
                            </form>
                        </Grid>
                    </Grid>

                </Paper>
            </Container>

            <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: -1, marginTop: "-10px", transform: "rotateX(180deg)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill={blue[300]} fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,96C384,107,480,181,576,202.7C672,224,768,192,864,176C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
            </Box>

            <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: -1, marginBottom: "-10px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill={blue[500]} fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,138.7C672,96,768,64,864,64C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </Box>
        </>
    )
}