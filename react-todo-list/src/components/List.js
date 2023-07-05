import {
  Flex,
  Spacer,
  Box,
  Heading,
  StackDivider,
  VStack,
  Input,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import "./List.css";

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };

  const [filterVal, setFilterVal] = useState("");

  return (
    <VStack divider={<StackDivider borderColor="gray.200" className="list" />}>
      <Input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
        placeholder="Search Keyword"
        variant="filled"
      />
      {todos
        .filter((todo) => todo.content.indexOf(filterVal) !== -1)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <Card>
                <CardBody>
                  <Flex minWidth="max-content" alignItems="center" gap="2">
                    <Box p="1">
                      <Heading size="md">
                        <span>{todo.content}</span>
                      </Heading>
                    </Box>
                    <Spacer />
                    <button onClick={() => complete(todo.id)}>
                      <BsTrash />
                    </button>
                  </Flex>
                </CardBody>
              </Card>
            </div>
          );
        })}
    </VStack>
  );
};

export default List;
