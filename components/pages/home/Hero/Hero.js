import React from "react";
import PropTypes from "prop-types";

import { Container } from "@components/ui";
import { Typeform, Unbabel } from "./companies";

import {
  Wrapper,
  Media,
  MediaImage,
  Body,
  Heading,
  Title,
  Description,
  Actions,
  Companies,
  CompaniesTitle,
  Company,
  BackgroundImageWrapper,
  BackgroundImage,
} from "./Hero.styles";

export default function Hero({ description, title }) {
  return (
    <Container>
      <Wrapper>
        <Media>
          <MediaImage
            src="/images/chris-grabinski.jpg"
            width={1088}
            height={1088}
            alt=""
          />
        </Media>
        <Body>
          <Heading>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Heading>
          <Actions>
            <a href="/2020-grabinski-christopher.pdf" download>
              Download CV
            </a>
          </Actions>
          <Companies>
            <CompaniesTitle>Previously worked with</CompaniesTitle>
            <Company>
              <a
                href="https://www.typeform.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Typeform />
              </a>
            </Company>
            <Company>
              <a
                href="https://unbabel.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Unbabel />
              </a>
            </Company>
          </Companies>
        </Body>
      </Wrapper>
      <BackgroundImageWrapper>
        <BackgroundImage
          src="/images/textures/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg"
          alt=""
          width={2000}
          height={3000}
        />
      </BackgroundImageWrapper>
    </Container>
  );
}

Hero.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
