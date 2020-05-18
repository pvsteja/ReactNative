import React, { Component } from "react";
import { Text, View, Button, CheckBox } from "react-native";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.item.marked) {
      return (
        <View>
          <Text
            style={{
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
            }}
          >
            {" "}
            {this.props.item.name}{" "}
          </Text>
          <CheckBox
            onChange={() => this.props.markItem(this.props.item.name)}
          />
          <Button
            title="Delete"
            onPress={() => this.props.deleteItem(this.props.item.name)}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{ flexDirection: "row", paddingBottom: 20, paddingTop: 15 }}
        >
          <Text>{this.props.item.name}</Text>
          <CheckBox
            onChange={() => this.props.markItem(this.props.item.name)}
          />
          <Button
            title="Delete"
            onPress={() => this.props.deleteItem(this.props.item.name)}
          />
        </View>
      );
    }
  }
}
