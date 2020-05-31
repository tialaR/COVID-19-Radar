import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import ChartsBox from '../../components/ChartsBox';
import CitiesList from '../../components/CitiesList';
import ErrorPage from '../../components/ErrorPage';
import HeaderTitle from '../../components/HeaderTitle';
import LoadingPage from '../../components/LoadingPage';
import Session from '../../session';
import { RowSpacing } from '../../styles/styles';
import { colors } from '../../utils/colors';
import { citySkeleton, stateSkeleton } from '../../utils/constants';
import dateFormat from '../../utils/dateFormat';

const Main = ({ route }) => {
  const [cities, setCities] = useState([]);
  const [state, setState] = useState(stateSkeleton);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  //Pegando dados dos estados e cidades do cache
  async function loadStates() {
    setLoading(true);
    let list = await Session.shared().getSatateList();
    let citiesAux = await Session.shared().getCitiesList(route.params.state);

    if (list.length > 0) {
      let stateAux = list[route.params.position];
      if (stateAux && stateAux.state === route.params.state) {
        setState(stateAux);
        citiesAux != null ? setCities(citiesAux.cities) : citySkeleton;
      } else {
        setErr(true);
      }
    }
    setLoading(false);
  }

  //Tornando a requisição sincrona
  useEffect(() => {
    setTimeout(() => loadStates(), 2000);
  }, []);

  return (
    <>
      {(state === stateSkeleton || loading || err) && <LoadingPage />}

      {state == null && !loading && <ErrorPage click={() => loadStates()} />}

      {state !== stateSkeleton && state != null && (
        <ScrollView
          style={{ backgroundColor: colors.background }}
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 40,
            backgroundColor: colors.background,
            flexGrow: 1,
          }}>
          <HeaderTitle
            title={dateFormat(state.currentDate)}
            label={state.state}
          />
          <RowSpacing />
          <ChartsBox
            numberOfCases={state.currentConfirmedCases}
            list={state.confirmedCases}
            dates={state.dates}
            desc="Casos confirmados"
          />
          <RowSpacing />
          <RowSpacing />
          <ChartsBox
            numberOfCases={state.currentDeaths}
            desc="Óbitos"
            dates={state.dates}
            list={state.deaths}
          />

          <RowSpacing />
          {cities && cities != null && cities !== citySkeleton && (
            <CitiesList cities={cities} />
          )}
        </ScrollView>
      )}
    </>
  );
};

export default Main;
