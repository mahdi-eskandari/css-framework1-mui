import { Container, Grid, TextField, Typography, Button } from '@mui/material'
import React from 'react'

export default function GridTextFields() {
    return (

        <Container>
            <form>

                <Grid container spacing={1}>
                    <Grid sm={12} xs={12} fullWidth>
                        <Typography color='text.primary' variant='h4' sx={{ textAlign: 'center', marginY: '15px' }}>
                            Create Your Account
                        </Typography>
                    </Grid>

                    <Grid item sm={4} xs={12}>
                        <TextField label="Full Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <TextField label="Username" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <TextField label="Age" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField label="Email" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField label="Password" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item sm={12} xs={12}>



                        <TextField
                            label="Bio"

                            //
                            multiline
                            rows={3}
                            //

                            fullWidth
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type='submit' sx={{ maxWidth: { xs: '90%', sm: '400px' }, marginTop: '15px', backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.light', color: 'black' } }} variant='contained' fullWidth>SIGN UP</Button>
                    </Grid>


                </Grid>
            </form>
        </Container>

    )
}
