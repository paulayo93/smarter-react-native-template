import React from 'react';
// tslint:disable-next-line: no-duplicate-imports
import { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator,View } from 'react-native';
import {Text} from '@components';

type DataItem = { title: string; releaseYear: string; id: string };

type State = {
  isLoading: boolean;
  dataSource?: DataItem[];
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson: { movies: any }) => {
        setIsLoading(false);
        setDataSource(responseJson.movies);
      })
      .catch((error) => {
        // tslint:disable-next-line: no-console
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: 'red' }}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <Text color='yellow' variant='sub' fontWeight='bold'>
            {item.title}, {item.releaseYear}
          </Text>
        )}
        keyExtractor={({ id }, index) => id}
      />
    </View>
  );
};

export default App;
