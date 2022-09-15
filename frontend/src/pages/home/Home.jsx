import React, { useEffect, useState } from 'react'
import "./Home.css"
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import { useNavigate } from 'react-router-dom'
import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";

function Home() {

    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) {
            navigate("/dashboard");
        }
    }, [navigate]);

    return (
        <Container maxW="xl">
            <Box
                d="flex"
                justifyContent="center"
                bg={"white"}
                w="100%"
                m="20px 0 10px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Text fontSize="4xl" fontFamily="work sans" textAlign="center">
                    Jeevmoksha Yoga
                </Text>
            </Box>
            <Box bg="white" w="100%" p={3} borderRadius="lg" color="black" borderWidth="1px">
                <Tabs variant="soft-rounded">
                    <TabList mb="5px">
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Register />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Home
