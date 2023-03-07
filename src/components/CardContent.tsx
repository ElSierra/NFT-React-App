import { Center, Text, Progress, HStack, Box } from "@chakra-ui/react";
import { Ethereum } from "iconsax-react";
import React from "react";

export default function CardContent({
  saleEnds,
  topBid,
  isHome,
}: {
  saleEnds: string;
  topBid: string;
  isHome: boolean;
}) {
  return (
    <>
      <Box justifyContent={"center"} marginTop={isHome ? "60px" : "10px"}>
        <Text textAlign={'center'} fontSize={"2xl"} fontWeight="extrabold">
          {saleEnds}
        </Text>
      </Box>
      <Progress
        colorScheme="pink"
        value={20}
        borderRadius="10px"
        size={"sm"}
        ml={isHome ? "30px" : "0px"}
        mr={isHome ? "30px" : "0px"}
      />
      <Center>
        <HStack>
          <Text>Top Bid</Text>

          <Box>
            <HStack>
              <Ethereum size="20" color="#FF8A65" />
              <Text>{topBid}</Text>
            </HStack>
          </Box>
        </HStack>
      </Center>
    </>
  );
}
