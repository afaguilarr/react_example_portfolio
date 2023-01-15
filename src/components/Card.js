import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      textAlign="left"
      alignItems="left"
      background="white"
      textColor="black"
      borderRadius={10}
    >
      <Image src={imageSrc} borderRadius={10}/>
      <Heading
        as="h1"
        paddingLeft={3}
        paddingRight={3}
        fontSize="20"
      >
        {title}
      </Heading>
      <Text
        paddingLeft={3}
        paddingRight={3}
      >
        {description}
      </Text>
      <a href="https://www.google.com">
        See more
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </a>
    </VStack>
  );
};

export default Card;
