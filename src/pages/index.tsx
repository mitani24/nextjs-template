import { Flex } from "@chakra-ui/react";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <LoginForm />
    </Flex>
  );
}
