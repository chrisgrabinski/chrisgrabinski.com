import styled from "@emotion/styled";
import tw from "twin.macro";

export const Page = styled.div`
  ${tw`
    bg-prussian-light
    flex
    flex-col
    font-sans
    min-h-screen
    text-prussian-dark
  `}
`;

export const Main = styled.main`
  ${tw`
    flex-grow
  `}
`;
