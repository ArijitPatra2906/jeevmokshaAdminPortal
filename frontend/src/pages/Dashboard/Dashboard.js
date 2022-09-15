import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Dashboard.css"

function Dashboard() {
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className="dashboardContainer">
                <Navbar />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid className='dashboard_container' item xs={12}>
                            <Typography>Dashboard</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Dashboard
