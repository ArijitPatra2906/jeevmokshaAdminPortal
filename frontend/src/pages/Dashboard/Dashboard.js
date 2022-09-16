import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import "./Dashboard.css"

function Dashboard() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid className='dashboard_container' item xs={12}>
                    <Typography>Dashboard</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard
