import React from 'react';
import { StyleSheet } from 'react-native';
import {
	Container,
	Header,
	Text,
	Segment,
	Button,
	Content,
	Left,
	Body,
	Right,
	Title,
	Tab,
	Tabs,
	Subtitle
} from 'native-base';
import General from './Tabs/General';
import Business from './Tabs/Business';
import Technology from './Tabs/Technology';

const TabScreen = () => {
	return (
		<Container>
			<Header style={style.headerStyle} hasTabs>
				<Left />
				<Body>
					<Title style={style.textStyle}>Latest News</Title>
				</Body>
				<Right />
			</Header>
			<Tabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
				<Tab
					activeTabStyle={{ backgroundColor: 'blue' }}
					activeTextStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
					textStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
					tabStyle={{ backgroundColor: '#f4511e' }}
					heading="General"
				>
					<General />
				</Tab>
				<Tab
					activeTextStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
					textStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
					tabStyle={{ backgroundColor: '#f4511e' }}
					heading="Business"
				>
					<Business />
				</Tab>
				<Tab
					activeTextStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
					textStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
					tabStyle={{ backgroundColor: '#f4511e' }}
					heading="Technology"
				>
					<Technology />
				</Tab>
			</Tabs>
		</Container>
	);
};

const style = StyleSheet.create({
	headerStyle: {
		backgroundColor: '#f4511e',
		color: '#fff'
	},
	textStyle: {
		fontWeight: 'bold',
		fontSize: 26
	}
});

export default TabScreen;
