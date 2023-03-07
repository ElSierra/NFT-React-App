import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";

export default function AlturaButton({
  buttonText,
  link,
}: {
  buttonText: string;
  link: string;
}) {
  return (
    <Link to={link}>
      <Button
        w="100%"
        mt="10px"
        fontSize="sm"
        fontWeight="500"
        borderRadius="70px"
        backgroundColor={"black"}
        px="24px"
        py="5px"
        border={"1px solid rgba(255,255,255,0.2)"}
      >
        {buttonText}
      </Button>
    </Link>
  );
}
