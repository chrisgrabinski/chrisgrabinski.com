import styled from "@emotion/styled";
import tw from "twin.macro";

import NextImage from "next/image";

export const Wrapper = styled.div`
  ${tw`
    grid
    gap-x-4
    min-h-screen
    pb-12
  `}

  grid-template-columns: auto repeat(6, minmax(0, 80px)) auto;
  grid-template-rows: 32px min-content 32px 32px 1fr;

  @media (min-width: 768px) {
    ${tw`
      items-center
      gap-x-8
      pb-0
    `}

    grid-template-columns: auto repeat(12, minmax(0, 64px)) auto;
    grid-template-rows: initial;
  }
`;

export const Figure = styled.figure`
  grid-column: 2 / span 4;
  grid-row: 2;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-column: 8 / span 6;
    grid-row: 1;
    order: 9999;
  }

  > * {
    vertical-align: middle;
  }
`;

export const Image = styled(NextImage)``;

export const Body = styled.div`
  ${tw`
    relative
    z-10
  `}

  grid-column: 2 / span 6;
  grid-row: 4 / -1;

  @media (min-width: 768px) {
    grid-column: 2 / span 6;
    grid-row: 1;
  }
`;

export const Title = styled.h1`
  ${tw`
    leading-none
    text-5xl
  `}

  padding-top: 3px;

  @media (min-width: 768px) {
    ${tw`
      pt-0
    `}
  }
`;

export const Description = styled.p`
  ${tw`
    mt-4
    text-lg
    text-prussian-dark
  `}

  max-width: 40ch;
`;

export const Companies = styled.dl`
  ${tw`
    col-gap-8
    flex
    flex-wrap
    mt-16
  `}
`;

export const CompaniesTitle = styled.dt`
  ${tw`
    mb-2
    text-prussian-dark
    text-xs
    w-full
  `}
`;

export const Company = styled.dd``;

export const TextureContainer = styled.div`
  ${tw`
    overflow-hidden
    relative
  `}

  grid-column: 4 / -1;
  grid-row: 1 / 5;

  @media (min-width: 768px) {
    ${tw`
      h-full
    `}

    grid-column: 10 / -1;
    grid-row: 1;
  }

  > * {
    ${tw`
      absolute!
      inset-0
    `}
  }
`;

export const Texture = styled(NextImage)`
  ${tw`
    absolute
    h-full
    inset-0
    object-cover
    w-full
  `}
`;
