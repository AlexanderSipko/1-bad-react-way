

export class CharacterService {
  constructor(characterRepository) {
    this.characterRepository = characterRepository;
  }

  async getCharacters(config) {
    const response = await this.characterRepository.getCharacters(config);
    return response;
  }
  
  async searchCharacters(query) {
    const response = await this.characterRepository.searchCharacters(query);
    return response;
  }
}