import { useState } from "react";
import { 
  Box, 
  Button, 
  Checkbox, 
  Container, 
  Flex, 
  Heading, 
  HStack, 
  IconButton, 
  Input, 
  List, 
  ListItem, 
  Spacer, 
  VStack 
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="2xl">Todo App</Heading>
        <HStack width="100%">
          <Input 
            placeholder="Add a new todo" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <Button colorScheme="teal" onClick={handleAddTodo}>Add</Button>
        </HStack>
        <List spacing={3} width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} p={3} shadow="md" borderWidth="1px" borderRadius="md">
              <Flex align="center">
                <Checkbox 
                  isChecked={todo.completed} 
                  onChange={() => handleToggleComplete(index)} 
                  mr={3}
                />
                <Box as="span" flex="1" textDecoration={todo.completed ? "line-through" : "none"}>
                  {todo.text}
                </Box>
                <Spacer />
                <IconButton 
                  aria-label="Delete todo" 
                  icon={<FaTrash />} 
                  colorScheme="red" 
                  onClick={() => handleDeleteTodo(index)} 
                />
              </Flex>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;