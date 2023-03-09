import { Box, SimpleGrid } from "@chakra-ui/react";
import NFT from "../../components/Card";

import { nftCollection } from "../../data/test";
import Header from "../../components/Header";
import MainCard from "../../components/MainCard";

export default function Nft() {
  return (
    <>
      <Header />

      <Box h="100vh" w="100%" padding={"10"}>
        <MainCard
          nftImage={nftCollection[0].nftImage}
          authorImage={nftCollection[0].authorImage}
          authorName=""
          desc={nftCollection[0].desc}
          address={nftCollection[0].address}
          topBid={nftCollection[0].topBid}
          saleEnds={nftCollection[0].saleEnds}
          nftTitle={nftCollection[0].nftTitle}
          nftLink={nftCollection[0].nftLink}
          youtubeLink={nftCollection[0].youtubeLink}
        />
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
