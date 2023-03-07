import { Input, InputGroup, InputLeftElement, useMediaQuery } from "@chakra-ui/react";
import { SearchNormal } from "iconsax-react";

export default function SearchBar() {
    const[isMobile]= useMediaQuery('(max-width: 600px)')
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<SearchNormal />} />
      <Input type="text" w={isMobile? '50px':'400px'} placeholder="Search" borderRadius="xl" />
    </InputGroup>
  );
}
