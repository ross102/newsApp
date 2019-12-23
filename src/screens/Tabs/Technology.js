import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Text,
  Button,
  Spinner,
  Content,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';

import {SafeAreaView, FlatList} from 'react-native';
import news from '../api/news';
import Item from '../../components/Item';
const uuid = require('uuid/v4');

const Technology = () => {
  const [noNews, setnoNews] = useState([]);
  const [err, setErr] = useState('');

  let isMounted = false;
  const getNews = async () => {
    isMounted = true;
    if (isMounted) {
      try {
        const response = await news.get('/top-headlines', {
          params: {
            category: 'technology',
            country_code: 'ng',
          },
        });
        setnoNews(response.data.articles);
        console.log(noNews);
      } catch (error) {
        if (error) setErr('Something Went wrong');
      }
    }
    isMounted = false;
  };

  useEffect(() => {
    getNews();
  }, []);

  let allData =
    noNews.length > 1 ? (
      <FlatList
        err={err}
        data={noNews}
        renderItem={({item}) => (
          <Item
            title={item.title}
            desc={item.description}
            source={item.source.name}
            image={item.urlToImage}
            date={item.publishedAt}
          />
        )}
        keyExtractor={item => (item.author = uuid().toString())}
      />
    ) : (
      <Spinner color="blue" />
    );
  return (
    <SafeAreaView>
      {err ? <Text style={{color: 'red'}}>{err}</Text> : allData}
    </SafeAreaView>
  );
};

export default Technology;
