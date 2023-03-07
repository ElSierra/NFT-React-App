import { Box, Center, Flex, Spacer, Text , Image} from "@chakra-ui/react";
import logo from '../assets/img/logo.png'
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <Box
      position="fixed"
      display={"block"}
      w="100%"
   
      padding={0}
      marginTop={"30px"}
      zIndex={"10"}
    >
      <Flex
        pt="10px"
        pb="10px"
        ml='50px'
        mr='50px'
        border={"1px solid rgba(255,255,255,0.2)"}
        bg={"rgb(30, 30, 30, 0.5)"}
        borderRadius="2xl"
        height={"fit-content"}
        backdropFilter={"blur(10px)"}
      >
        <Center ml="30px">
        <Image h='40px' src={logo}/>
        </Center>
        <Spacer />
        <Center mr="30px">
        <SearchBar/>
        </Center>
      </Flex>
    </Box>
  );
}
