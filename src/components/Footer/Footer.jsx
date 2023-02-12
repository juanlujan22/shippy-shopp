import { HStack, Link, Flex, Heading, Box } from "@chakra-ui/react";
import Logo from "/logo.png";
const Footer = () => {
  return (
    <>
      <Flex
        pl="30px"
        borderTopRadius="30px"
        alignItems="center"
        justifyContent="flex-start"
        background={"#FBC252"}
        height={"fit"}
      >
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <img src={Logo} style={{ height: "50px" }} alt={"logo"} />
          <Heading as="b" fontSize="2xl" p="4">
            {" "}
            Shippy Shop{" "}
          </Heading>
        </Box>
        <HStack ml="40px" justifyContent="start" flexWrap="wrap">
          <Link p="4"> mens's clothig </Link>
          <Link p="4"> women's clothig </Link>
          <Link p="4"> jewelery </Link>
          <Link p="4"> electronics </Link>
        </HStack>
      </Flex>
    </>
  );
};
export default Footer;
