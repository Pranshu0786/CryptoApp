import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      p={"4"}
      shadow={"base"}
      justifyContent={"space-evenly"}
      bgColor={"blackAlpha.900"}
    >
      <Button variant={"unstyled"} textTransform={"uppercase"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} textTransform={"uppercase"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} textTransform={"uppercase"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
