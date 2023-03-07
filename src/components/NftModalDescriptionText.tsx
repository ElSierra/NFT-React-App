import { HStack, Box, Text, Tag, TagLabel } from "@chakra-ui/react";


export default function NftModalDescriptionText({
  icon,
  title,
  content,
}: {
  title: string;
  content: string;
  icon: JSX.Element;
}) {
  return (
    <Box mt="10px">
      <HStack>
        <HStack w="25%">
          <Box>{icon}</Box>
          <Text fontSize={'12px'}>{title}</Text>
        </HStack>
        <Tag w="75%" size="sm" colorScheme="red" borderRadius="full">
          <TagLabel>{content}</TagLabel>
        </Tag>
      </HStack>
    </Box>
  );
}
