import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  Text,
} from 'native-base';
import {StyleSheet} from 'react-native';
import ModalData from './Modal';

const Item = props => {
  return (
    <>
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square
              source={{
                uri:
                  props.image != null
                    ? props.image
                    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=',
              }}
            />
          </Left>
          <Body>
            <Text style={style.titleStyle} numberOfLines={2}>
              {props.title}
            </Text>
            <Text numberOfLines={1}>{props.desc}</Text>
            <Text note>{props.source}</Text>
            <Text note>{props.date}</Text>
          </Body>
          <Right>
            <ModalData
              desc={props.desc}
              title={props.title}
              date={props.date}
              image={props.image}
            />
          </Right>
        </ListItem>
      </List>
    </>
  );
};

const style = StyleSheet.create({
  titleStyle: {
    color: '#f4511e',
    fontWeight: '600',
    fontSize: 20,
  },
});

export default Item;
