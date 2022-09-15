import React, { useState } from 'react'
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Register() {

    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setConfirmShowPass] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [picLoading, setPicLoading] = useState(false);
    const toast = useToast();
    const handlePassClick = () => setShowPass(!showPass);
    const handleConPassClick = () => setConfirmShowPass(!showConfirmPass);
    const navigate = useNavigate();

    return (
        <VStack spacing="5px">
            <FormControl id="first-name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={showPass ? "text" : "password"}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" variant="ghost" onClick={handlePassClick}>
                        {showPass ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                </InputRightElement> */}
                </InputGroup>
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type={showConfirmPass ? "text" : "password"}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    {/* <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" variant="ghost" onClick={handleConPassClick}>
                        {showConfirmPass ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                </InputRightElement> */}
                </InputGroup>
            </FormControl>
            <FormControl id="pic">
                <FormLabel>Upload your Picture</FormLabel>
                <Input
                    type="file"
                    p={1.5}
                    accept="image/*"
                // onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>
            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                // onClick={submitHandler}
                isLoading={picLoading}
            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default Register
