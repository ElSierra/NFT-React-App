import { Box, useDisclosure } from "@chakra-ui/react";

import NftTag from "./NftTag";

import NFTModal from "./Modal";
import { nftProps } from "./NFTModalContent";
import CardContent from "./CardContent";

export default function NFT({
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
        authorName={authorName}
        desc={desc}
        address={address}
        topBid={topBid}
        saleEnds={saleEnds}
        nftLink={nftLink}
      />
      <Box
        onClick={onOpen}
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
        <Box
          borderRadius={"12px 12px 20px 20px"}
          backgroundImage={nftImage}
          h="60%"
          w="100%"
          backgroundSize={"cover"}
        >
          {" "}
        </Box>
        <Box
          margin={"0 auto"}
          position={"absolute"}
          left="20px"
          right={"20px"}
          top={210}
        >
          {" "}
          <NftTag
            authorName={authorName}
            authorImg={authorImage}
            nftTitle={nftTitle}
          />
        </Box>
        <CardContent isHome saleEnds={saleEnds} topBid={topBid} />
      </Box>
    </>
  );
}
