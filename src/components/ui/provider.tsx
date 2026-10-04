// import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

// export function Provider(props: React.ComponentProps<typeof ChakraProvider>) {
//   return (
//     <ChakraProvider value={defaultSystem}>{props.children}</ChakraProvider>
//   );
// }
import { ChakraProvider } from "@chakra-ui/react";

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
