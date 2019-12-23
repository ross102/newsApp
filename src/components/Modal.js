import React, {useState, useEffect} from 'react';
import {
  Modal,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {Header, Left, Title, Right, Body, Icon, Button} from 'native-base';

const ModalData = props => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={style.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View>
          <Header style={{backgroundColor: '#f4511e'}}>
            <Left>
              <Button onPress={() => setModalVisible(false)} transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Top News</Title>
            </Body>
            <Right />
          </Header>
          <View style={style.container}>
            <Image
              style={style.imageStyle}
              source={{
                uri:
                  props.image != null
                    ? props.image
                    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=',
              }}
            />
            <Text style={style.titleStyle}>{props.title}</Text>
            <Text style={style.descStyle}>{props.desc}</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={style.btnStyle}> Back </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={style.btnStyle}>Read More</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginLeft: 15,
    textAlign: 'center',
  },
  imageStyle: {
    marginTop: 20,
    width: 350,
    height: 350,
  },
  titleStyle: {
    color: '#f4511e',
    fontWeight: '600',
    fontSize: 20,
  },
  btnStyle: {
    color: 'blue',
  },
  descStyle: {
    fontSize: 18,
  },
});

export default ModalData;
