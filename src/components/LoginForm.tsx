import { Button, Flex, Heading, Input } from "@chakra-ui/react";

export default function LiginForm() {
  return (
    <Flex direction="column" background="gray.100" p={12} rounded={6}>
      <Heading mb={6}>Log in</Heading>
      <Input
        placeholder="j.smith@example.com"
        variant="filled"
        mb={3}
        type="email"
      />
      <Input placeholder="********" variant="filled" mb={6} type="password" />
      <Button colorScheme="teal" type="submit">
        Log in
      </Button>
    </Flex>
  );
}
