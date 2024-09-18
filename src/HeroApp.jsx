import { UserProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const HeroApp = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
};
