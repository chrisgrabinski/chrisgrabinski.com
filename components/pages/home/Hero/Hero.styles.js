import styled from "@emotion/styled";
import tw from "twin.macro";

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
  `}
`;

export const Body = styled.div`
  ${tw`
    gap-16
    grid
    relative
    z-10
  `}
`;

export const Heading = styled.div``;

export const Title = styled.h1`
  ${tw`
    leading-none
    text-6xl
  `}
`;

export const Description = styled.p`
  ${tw`
    mt-8
    text-xl
    opacity-75
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
    opacity-75
    text-xs
    tracking-wide
    uppercase
    w-full
    mb-4
  `}
`;

export const Company = styled.dd``;

export const BackgroundImage = styled.img`
  ${tw`
    absolute
    w-1/2
    top-0
    right-0
    object-cover
    h-screen
  `}
`;
