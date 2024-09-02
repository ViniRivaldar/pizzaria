import { CHAVE_API } from '../config/variaveis'
import axios from 'axios';

const getData = axios.create({
  baseURL: CHAVE_API,
});


export default getData