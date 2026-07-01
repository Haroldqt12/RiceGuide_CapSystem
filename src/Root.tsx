import App from './routes/index';
import { FarmingProvider } from './context/FarmingContext';

export default function Root() {
  return (
    <FarmingProvider>
      <App />
    </FarmingProvider>
  );
}