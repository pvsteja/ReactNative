import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function AddTodo({ addItem }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={{ marginBottom: 20, borderBottomWidth: 1, paddingTop: 30 }}
        placeholder="add here"
        onChangeText={changeHandler}
      />
      <Button title="Add Todo" onPress={() => addItem(text)} />
    </View>
  );
}
