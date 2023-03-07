import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import NFTModalContent, { nftProps } from "./NFTModalContent";

interface nftModalProps extends nftProps {
  onOpen: any;
  isOpen: boolean;
  onClose: () => void;
}
export default function NFTModal({
  onOpen,
  isOpen,
  onClose,
  nftImage,
  authorImage,
  authorName,
  desc,
  address,
  topBid,
  saleEnds,
  nftTitle,
  nftLink,
}: nftModalProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          height={"500px"}
          borderRadius="10px"
          border={"1px solid rgba(255,255,255,0.2)"}
          background={"rgba(0,0,0,0.5)"}
          backdropFilter={"blur(10px)"}
        >
          <ModalCloseButton />
          <ModalBody>
            <NFTModalContent
              nftLink={nftLink}
              nftImage={nftImage}
              authorImage={authorImage}
              authorName={authorName}
              desc={desc}
              address={address}
              topBid={topBid}
              saleEnds={saleEnds}
              nftTitle={nftTitle}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
