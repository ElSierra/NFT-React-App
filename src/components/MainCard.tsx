import { Box, useDisclosure } from "@chakra-ui/react";

import NftTag from "./NftTag";

import NFTModal from "./Modal";
import { nftProps } from "./NFTModalContent";
import CardContent from "./CardContent";
import MainCardTitle from "./MainCardTitle";
import ReactPlayer from "react-player/youtube";

export default function MainCard({
  nftImage,
  authorImage,
  authorName,
  desc,
  address,
  topBid,
  saleEnds,
  nftLink,
  nftTitle,
  youtubeLink
}: nftProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NFTModal
        nftTitle={nftTitle}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        nftImage={nftImage}
        authorImage={authorImage}
        authorName={''}
        desc={desc}
        address={address}
        topBid={topBid}
        saleEnds={saleEnds}
        nftLink={nftLink}
      />
      <Box
        onClick={onOpen}
        mt="100px"
        className="animate__animated animate__pulse"
        padding="10px"
        _hover={{
          backgroundImage: "linear-gradient(to right, #ff8a00, #da1b60);",
        }}
        cursor="pointer"
        height={"400px"}
        border={"1px solid rgba(255,255,255,0.2)"}
        bg={"rgb(30, 30, 30, 0.5)"}
        borderRadius="2xl"
        backdropFilter={"blur(10px)"}
        position={"relative"}
      >
        <Box borderRadius={"12px 12px 20px 20px"} h="70%" w="100%">
          <ReactPlayer
            style={{ borderRadius: "20px" }}
            url={youtubeLink}
            height={"100%"}
            width={"100%"}
      
            playing
            loop
          />
        </Box>

        <MainCardTitle isHome saleEnds={nftTitle} topBid={topBid} />
      </Box>
    </>
  );
}
