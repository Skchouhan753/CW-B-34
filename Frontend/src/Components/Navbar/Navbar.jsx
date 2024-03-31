import { Box, Button, Stack, Text, HStack } from "@chakra-ui/react";

function Navbar() {
  return (
    <div>
      <Box bg="#0066EE" h={50}>
        <Stack
          direction="row"
          spacing={4}
          align="center"
          justify="flex-end"
          h="100%"
          px={8}
        >
          <Button colorScheme="teal" variant="solid">
            LogIN
          </Button>
          <Button colorScheme="teal" variant="outline">
            SingUP
          </Button>
        </Stack>
      </Box>
      <Box bg="#0066EE" h={50}>
        <HStack marginLeft={120} h="100%" spacing={8}>
          <Text color="white">FOOD</Text>
          <Text color="white">EXERCISE</Text>
          <Text color="white">APPS</Text>
          <Text color="white">COMMUNITY</Text>
          <Text color="white">BLOG</Text>
          <Text color="white">PREMIUM</Text>
        </HStack>
      </Box>
    </div>
  );
}

export default Navbar;
