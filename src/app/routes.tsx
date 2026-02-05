import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { CharactersPage } from "@/pages/CharactersPage";
import { FavoritesPage } from "@/pages/FavoritesPage";
import { NavPath } from './setupApp'

export const router = createBrowserRouter([
  {
    path: NavPath.CHARACTERS_PAGE,
    element: <App />,
    children: [
      { index: true, element: <CharactersPage /> },
      { path: NavPath.FAVORITES_PAGE, element: <FavoritesPage /> },
    ],
  },
]);
