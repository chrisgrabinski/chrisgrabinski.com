import React from "react";
import PropTypes from "prop-types";

import { Container } from "@components/ui";
import { Typeform, Unbabel } from "./companies";

import {
  Wrapper,
  Figure,
  Image,
  Body,
  Title,
  Description,
  Companies,
  CompaniesTitle,
  Company,
  TextureContainer,
  Texture,
} from "./Hero.styles";

export default function Hero({ description, title }) {
  return (
    <Wrapper>
      <Figure>
        <Image
          src="/images/chris-grabinski.jpg"
          width={480}
          height={480}
          alt=""
        />
      </Figure>
      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
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
      <TextureContainer>
        <Texture
          src="/images/textures/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg"
          alt=""
          width={680}
          height={1020}
        />
      </TextureContainer>
    </Wrapper>
  );
}

Hero.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
