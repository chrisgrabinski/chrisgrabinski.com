import styled from "@emotion/styled";
import tw from "twin.macro";

import Image from "next/image";

export const Wrapper = styled.div`
  ${tw`
    gap-8
    grid
    items-center
    md:gap-16
    md:grid-cols-2
    min-h-screen
  `}
`;

export const Media = styled.div`
  ${tw`
    md:order-last
    md:w-full
    relative
    w-2/3
    z-10
    pt-4
    md:pt-0
  `}
`;

export const MediaImage = styled(Image)``;

export const Body = styled.div`
  ${tw`
    gap-16
    grid
    relative
    z-10
    pb-8
    md:pt-8
  `}
`;

export const Heading = styled.div``;

export const Title = styled.h1`
  ${tw`
    text-5xl
    leading-none
  `}
`;

export const Description = styled.p`
  ${tw`
    mt-4
    text-xl
    text-prussian-dark
  `}

  max-width: 40ch;
`;

export const Actions = styled.div``;

export const Companies = styled.dl`
  ${tw`
    col-gap-8
    flex
    flex-wrap
  `}
`;

export const CompaniesTitle = styled.dt`
  ${tw`
    font-semibold
    text-prussian-dark
    text-xs
    w-full
    mb-2
  `}
`;

export const Company = styled.dd``;

export const BackgroundImageWrapper = styled.div`
  ${tw`
    absolute
    w-1/2
    top-0
    right-0
    h-screen
    overflow-hidden
  `}
`;

export const BackgroundImage = styled(Image)`
  ${tw`
    w-full
    h-full
    object-cover
  `}
`;
