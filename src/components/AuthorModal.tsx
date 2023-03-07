import {
  Avatar,
  Circle,
  HStack,
  Box,
  Text,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
interface props {
  authorName: string;
  authorImg: string;
  nftTitle: string;
}
export default function AuthorModal({
  authorName,
  authorImg,
  nftTitle,
}: props) {
  return (
    <Tag size="lg" colorScheme="red" borderRadius="full">
      <Avatar src={authorImg} size="xs" name={authorName} ml={-1} mr={2} />
      <TagLabel>{authorName}</TagLabel>
    </Tag>
  );
}
