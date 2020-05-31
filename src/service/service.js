import { useState } from 'react';
import Session from '../session';
import { states } from '../utils/arrays';
import api from './api';

/* Recuperar casos confirmados e mortes dos Estados: */
export const useLoadCasesStates = () => {
  const [stateError, setStateError] = useState(null);
  async function loadCases() {
    for (var x = 0; x < states.length; x++) {
      try {
        const response = await api.get('caso/data', {
          params: {
            state: states[x].key,
            place_type: 'state',
          },
        });
        if (
          !Session.shared().getSatateList() ||
          Session.shared().getSatateList().length < states.length
        ) {
          let state = response.data.results.slice(0, 14);
          state = state.reverse();

          const confirmedCases = [];
          const deaths = [];
          const dates = [];

          state.map((indicators, index) => {
            confirmedCases.push(indicators.confirmed);
            deaths.push(indicators.deaths);
            dates.push(indicators.date);
          });

          const lastPosition = state.length - 1;

          const stateObject = {
            state: state[0].state,
            confirmedCases: confirmedCases,
            deaths: deaths,
            dates: dates,
            currentDate: state[lastPosition].date,
            currentConfirmedCases: state[lastPosition].confirmed,
            currentDeaths: state[lastPosition].deaths,
          };

          Session.shared().setStatesList(stateObject);
        }
      } catch (err) {
        setStateError(err);
      }
    }
  }

  return [loadCases, stateError];
};

/* Recuperar casos confirmados e mortes dos municípios
   referentes a cada Estado selecionado: */
export function useLoadCasesStateCities() {
  const [cityError, setCityError] = useState(null);
  async function loadCasesCities() {
    for (var x = 0; x < states.length; x++) {
      try {
        const response = await api.get('caso/data', {
          params: {
            is_last: 'True',
            state: states[x].key,
          },
        });

        if (
          !Session.shared().getCitiesList() ||
          Session.shared().getCitiesList().length === 0
        ) {
          let stateAux = {
            state: response.data.results[0].state,
            cities: response.data.results,
          };

          Session.shared().setCitiesList(stateAux);
        }
      } catch (err) {
        setCityError(err);
      }
    }
  }

  return [loadCasesCities, cityError];
}
