import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SearchBar } from '../SearchBar';
import CityCard from './CityCard';

const CitiesList = ({ cities }) => {
  const [query, setQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    setFilteredCities(cities);
  }, [cities]);

  //Cancelar e limpar busca
  function cancelSearch() {
    setQuery('');
    setFilteredCities(cities);
  }

  //Filtrar lista
  function handleChangeText(text) {
    setQuery(text);

    let textAux = text.toLowerCase();
    let filteredName = cities.filter((item) => {
      if (typeof item.city === 'string' && item.city) {
        if (item.city.toLowerCase().includes(textAux)) {
          return item;
        }
      }
    });

    if (!textAux || textAux === '') {
      setFilteredCities(cities);
    } else if (Array.isArray(filteredName)) {
      setFilteredCities(filteredName);
    }
  }

  return (
    <>
      <SearchBar
        value={query}
        onChangeText={(text) => handleChangeText(text)}
        placeholder="Buscar cidade..."
        afterCancel={cancelSearch}
        cleanText={cancelSearch}
      />
      <FlatList
        style={{
          padding: 20,
        }}
        data={filteredCities}
        renderItem={({ item }) => (
          <CityCard
            city={item.city ? item.city : 'Demais cidades'}
            confirmed={item.confirmed}
            deaths={item.deaths}
          />
        )}
        keyExtractor={(_, index) => index}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </>
  );
};

export default CitiesList;
