import React, { useState } from 'react'
import { Stack, Button, Container } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export default function AlignedButtons() {
    const [disable, setDisable] = useState(false)

    return (
        <>
            <Container>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1 }} sx={{ justifyContent: { sm: 'space-around' }, alignItems: { xs: 'center' }, marginTop: '50px' }} >
                    <Button sx={{ width: "300px" }} variant='text' onClick={() => setDisable(true)} disabled={disable}>disabled</Button>


                    <Button startIcon={<AddLocationAltIcon />} sx={{ width: "300px" }} variant='contained'>click me</Button>


                    <Button onClick={() => window.open('https://mui.com/', '_blank')} sx={{ width: "300px" }} variant='outlined'>open the Mui</Button>


                </Stack>
            </Container>
        </>
    )
}
