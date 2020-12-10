import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import { Typeform, Unbabel } from "./companies";

import {
  Wrapper,
  Figure,
  Body,
  Title,
  Description,
  Companies,
  CompaniesTitle,
  Company,
  TextureContainer,
} from "./Hero.styles";

export default function Hero({ description, title }) {
  return (
    <Wrapper>
      <Figure>
        <Image
          alt=""
          height={480}
          priority
          src="/images/chris-grabinski.jpg"
          width={480}
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
        <Image
          alt=""
          layout="fill"
          objectFit="cover"
          src="/images/textures/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg"
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
