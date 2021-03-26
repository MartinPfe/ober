import CSSReset from "@chakra-ui/css-reset";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { addDecorator } from "@storybook/react";
import * as React from "react";

export const Chakra = ({ children }) => (
  <ChakraProvider>
    <CSSReset />
    <Box p={5}>{children}</Box>
  </ChakraProvider>
);

addDecorator((StoryFn) => (
  <Chakra>
    <StoryFn />
  </Chakra>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
