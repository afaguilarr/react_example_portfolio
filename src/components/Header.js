import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const headerHeight = 66;

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState("up")

  useEffect(
    () => {
      let lastScrollY = window.pageYOffset;

      const handleScroll = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up"
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  );

  const handleClick = (anchor) => {
    const id = `${anchor.target.id}-section`;
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      element.scrollIntoView({
        //behavior: "smooth",
        block: "start",
      });
    }
  };

  const socialMediaLinks = () => {
    return socials.map(link => (
      <a key={link.url} href={link.url}>
        <FontAwesomeIcon icon={link.icon} size="2x" />
      </a>
    ));
  }

  const internalLinks = () => {
    return (
      <>
        <a id="projects" href="/#projects" onClick={handleClick}>Projects</a>
        <a id="contactme" href="/#contact-me" onClick={handleClick}>Contact Me</a>
      </>
    );
  }

  return (
    <Box
      id="header"
      position="fixed"
      height={headerHeight}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transform={scrollDirection === "up" ? "translateY(0px)" : "translateY(-200px)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={5}>
              {socialMediaLinks()}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {internalLinks()}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
