/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Resul, Imagens} from './src/layouts/App3';
import App from './src/layouts/App';
import Principal from './src/layouts/Principal';
import {name as appName} from './app.json';
import PizzaTranslator from './PizzaTranslator';
import ListaFlat from './src/layouts/ListaFlat';

// AppRegistry.registerComponent(appName, () => Resul, Imagens);
AppRegistry.registerComponent(appName, () => App);