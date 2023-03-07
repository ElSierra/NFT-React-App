import { Box, SimpleGrid } from "@chakra-ui/react";
import NFT from "../../components/Card";

import { nftCollection } from "../../data/test";
import Header from "../../components/Header";

export default function Nft() {
  return (
    <>
      <Header />
      <Box h="100vh" w="100%" padding={"10"}>
        <SimpleGrid
          mt={"60px"}
          width={"100%"}
          columns={{ sm: 2, md: 2, lg: 3, xl: 3, xll: 4, big: 4 }}
          spacing={"40px"}
          p="30px"
        >
          {nftCollection.map((nft, index) => {
            return <NFT {...nft} key={index} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
