import { Avatar, Circle, HStack, Box, Text } from "@chakra-ui/react";
import { Link1 } from "iconsax-react";
interface props {
  authorName: string;
  authorImg: string;
  nftTitle: string;
}
export default function NftTag({ authorName, authorImg, nftTitle }: props) {
  return (
    <HStack
      padding={"10px"}
      borderRadius="60px"
      w="100%"
      background={"rgba(0,0,0,0.5)"}
      backdropFilter={"blur(10px)"}
    >
      <Avatar src={authorImg} mr="20px" />
      <Box>
        <Text fontSize={"14px"} fontWeight={"extrabold"} textAlign={"left"}>
          {nftTitle}
        </Text>
        <HStack>
          <Link1 size="20" color="#FF8A65" />
          <Text fontSize="10px" textAlign={"left"}>{` ${authorName}`}</Text>
        </HStack>
      </Box>
    </HStack>
  );
}
