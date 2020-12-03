import styled from "@emotion/styled";
import tw from "twin.macro";

export const Page = styled.div`
  ${tw`
    bg-indigo-100
    flex
    flex-col
    min-h-screen
    text-indigo-900
  `}
`;

export const Main = styled.main`
  ${tw`
    flex-grow
  `}
`;
