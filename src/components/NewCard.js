import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Card,
  Divider,
  Text,
  Button,
  ButtonGroup,
} from "@ui-kitten/components";

const NewCard = ({
  Jobtitle,
  Location,
  City,
  Salary,
  Duration,
  avatarUrl,
  emptype,
}) => {
  return (
    <Card style={styles.Cardinfo}>
      <View>
        <View style={styles.flextype}>
          <Avatar
            style={styles.avatar}
            size="tiny"
            source={{ uri: avatarUrl }}
          />
          <View>
            <Text category="h4">{Jobtitle}</Text>
            <Text category="p1">Company Name</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: "1%" }}>
          <Divider />
          <Text style={{ marginBottom: 2 }} category="p1">
            {Location}
          </Text>
          <Text style={{ marginBottom: 2 }} category="p1">
            {City}
          </Text>
          <Text
            style={{ color: "#2CCFA1", fontWeight: "bold", marginBottom: 2 }}
            category="p1"
          >
            Rs: {Salary}/= (Per Day)
          </Text>
          <Text category="p2" style={{ paddingVertical: 2, marginBottom: 5 }}>
            {Duration} Hours
          </Text>
          <Button
            style={{ marginHorizontal: 19, justifyContent: "center" }}
            status="success"
            appearance="outline"
          >
            {emptype}
          </Button>
        </View>
      </View>
    </Card>
  );
};

export default NewCard;

const styles = StyleSheet.create({
  Cardinfo: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  avatar: {
    padding: 32,
    width: 50,
    height: 50,
    marginRight: 15,
    marginLeft: 1,
  },
  flextype: {
    paddingVertical: 10,
    alignItems: "left",
    justifyContent: "left",
    flexDirection: "row",
  },
});
