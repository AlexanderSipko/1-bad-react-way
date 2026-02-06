import { CharacterApi } from '@/entities/repository/charactersApi'
import { CharactersMocApi } from '@/entities/repository/charactersMocApi';
import { CharactersLocalStore } from "@/entities/repository/charactersLocalStore"

import { CharacterService } from "@/entities/service/CharacterService";
import { CharactersStore } from '@/entities/service/CharacterStore';

export const NavPath = {
  CHARACTERS_PAGE:'/',
  FAVORITES_PAGE:'/favorites'
}

export const setupDI = () => {
  const repository = import.meta.env.VITE_USE_MOD === 'test' 
  ? new CharactersMocApi() 
  : new CharacterApi();

  console.log(import.meta.env.VITE_USE_MOD)
  const store = new CharactersLocalStore();

  const characterService = new CharacterService(repository);
  const characterStore = new CharactersStore(store);
  
  return {
    characterService,
    characterStore
  };
};
