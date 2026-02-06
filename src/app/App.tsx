import { Outlet } from "react-router-dom";
import NavBar from "./layout/NavBar";
import { CharactersProvider } from '@/entities/provider/CharactersProvider';
import { setupDI } from './setupApp'


const di = setupDI()

export function App() {

  return (
    <CharactersProvider
      serviceRepository={di.characterService}
      serviceStore={di.characterStore}
    >
      <div className="min-h-screen">
        <NavBar />
        <main className="container mx-auto">
          <Outlet />
        </main>
      </div>
    </CharactersProvider>
  );
}