
export class CharactersStore {

    constructor(store) {
        this.store = store
    }

    setFavorites(id) {
        return this.store.setFavorites(id)
    }
    getFavorites() {
        return this.store.getFavorites()
    }

    addFavorite(id) {
        return this.store.addFavorite(id)
    }

    removeFavorite(id) {
        return this.store.removeFavorite(id)
    }

    clearFavorites() {
        return this.store.clearFavorites()
    }
}
