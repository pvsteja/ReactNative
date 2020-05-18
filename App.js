import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      name: "first",
      marked: false,
      created: new Date(),
    },
    {
      name: "second",
      marked: false,
      created: new Date(),
    },
    {
      name: "third",
      marked: false,
      created: new Date(),
    },
  ]);

  const deleteItem = (itemName) => {
    setTodos((newTodos) => {
      return newTodos.filter((todo) => todo.name != itemName);
    });
  };
  const addItem = (itemName) => {
    setTodos((newTodos) => {
      return [
        ...newTodos,
        { name: itemName, marked: false, created: new Date() },
      ];
    });
  };
  const markItem = (itemName) => {
    console.log("check box clicked");
    setTodos((newTodos) => {
      newTodos.filter((todo) => {
        if (todo.name === itemName) {
          todo.marked = true;
        }
        return todo;
      });
      return newTodos;
    });
  };
  return (
    <View style={styles.container}>
      <Text>My Todo List</Text>
      {/*Heading, Add todo, list of todo, delete button  */}
      <AddTodo addItem={addItem} />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* {<markTodo markItem={markItem} />} */}
      {console.log("flatlist")}
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} deleteItem={deleteItem} markItem={markItem} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
