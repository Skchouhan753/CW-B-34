import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import SignupNavbar from "../../Components/Signup/SignupNavbar";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupTall = () => {
  const navigate = useNavigate();
  return (
    <>
      <SignupNavbar />
      <Box className="signupWrapper">
        <Box className="insideBox" h="fit-content" p="20px">
          <Box className="tallSubBox">
            <Heading fontSize="20px" mb="10px">
              How tall are you?
            </Heading>
            <Flex gap="15px">
              <InputGroup>
                <Input placeholder="Enter height (feet)" w="265px" />
                <InputRightElement />
              </InputGroup>
              <InputGroup>
                <Input placeholder="Enter height (inches)" w="265px" />
                <InputRightElement />
              </InputGroup>
            </Flex>
          </Box>

          <Box className="tallSubBox">
            <Heading fontSize="20px" mb="10px">
              How much do you weigh?
            </Heading>
            <Text color="#A0A0A0" mb="10px">
              Its OK to estimate. You can update this later.
            </Text>
            <InputGroup>
              <Input placeholder="Enter weight (kg)" w="550px" />
              <InputRightElement />
            </InputGroup>
          </Box>

          <Box className="tallSubBox">
            <Heading fontSize="20px" mb="10px">
              Whats your goal weight?
            </Heading>
            <Text color="#A0A0A0" mb="10px">
              Dont worry. This doesnt affect your daily calorie goal and you
              can always change it later.
            </Text>
            <InputGroup>
              <Input placeholder="Enter weight (kg)" w="550px" />
              <InputRightElement />
            </InputGroup>
          </Box>

          <Flex gap="20px">
            <Button
              colorScheme="blue"
              variant="outline"
              w="150px"
              fontSize="18px"
              onClick={() => navigate("/signupActivity")}
            >
              BACK
            </Button>
            <Button
              bg="#0066EE"
              color="white"
              w="150px"
              fontSize="18px"
              onClick={() => navigate("/signupWeekly")}
            >
              NEXT
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default SignupTall;

// /signupTall
