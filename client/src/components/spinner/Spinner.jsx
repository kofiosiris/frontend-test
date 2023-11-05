import { Spinner } from "@chakra-ui/react";

function Loader() {
  return (
    <div>
      <Loader
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
}

export default Loader;
