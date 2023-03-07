import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Ethereum, Global, User } from "iconsax-react";
import AuthorModal from "./AuthorModal";
import AlturaButton from "./Button";
import CardContent from "./CardContent";
import NftModalDescriptionText from "./NftModalDescriptionText";

export interface nftProps {
  nftImage: string;
  authorImage: string;
  authorName: string;
  desc: string;
  address: string;
  topBid: string;
  saleEnds: string;
  nftTitle: string;
  nftLink: string;
}
export default function NFTModalContent({
  nftImage,
  authorImage,
  authorName,
  desc,
  address,
  topBid,
  saleEnds,
  nftLink,
  nftTitle,
}: nftProps) {
  return (
    <Box mt="40px">
      <Flex justifyContent={"center"} flexDirection="column">
        <HStack
          flexDirection={"row"}
          padding="10px"
          backgroundImage="linear-gradient(to right, #ff8a00, #da1b60);"
          borderRadius={"20px"}
        >
          <Box
            borderRadius={"12px 12px 20px 20px"}
            backgroundImage={nftImage}
            h="200px"
            w="200px"
            backgroundSize={"cover"}
          ></Box>
          <Box>
            <Text fontSize={"xl"} textAlign="left">
              {nftTitle}
            </Text>
            <AuthorModal
              authorName={authorName}
              authorImg={authorImage}
              nftTitle={nftTitle}
            />

            <CardContent isHome={false} saleEnds={saleEnds} topBid={topBid} />
          </Box>
        </HStack>

        <NftModalDescriptionText
          title={"Owner"}
          content={address}
          icon={<User size="15" color="#FF8A65" />}
        />
        <NftModalDescriptionText
          title={"Network"}
          content={"Ethereum"}
          icon={<Global size="15" color="#FF8A65" />}
        />
        <NftModalDescriptionText
          title={"Price"}
          content={topBid}
          icon={<Ethereum size="15" color="#FF8A65" />}
        />
        <Box mt='10px'>
        <Text fontSize={'14px'}>{desc}</Text></Box>
        <AlturaButton buttonText="Purchase" link={nftLink} />
      </Flex>
    </Box>
  );
}
