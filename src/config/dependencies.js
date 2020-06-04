import Api from '../services/api';
export default function configureDeps() {
  const api = new Api();
  return { api };
}