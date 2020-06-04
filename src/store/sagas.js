import weatherSaga from './weather/saga';

export default function rootSaga() {
  return [
    weatherSaga,
  ]
}
