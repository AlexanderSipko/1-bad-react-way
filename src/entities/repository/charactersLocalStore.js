export class CharactersLocalStore {
    constructor(key = "favorite_characters") {
        this.key = key;
    }

    setFavorites(favorites) {
        try {
            const uniqueIds = [...new Set(favorites.map(id => Number(id)))];
            const jsonString = JSON.stringify(uniqueIds);
            localStorage.setItem(this.key, jsonString);
            return uniqueIds;
        } catch (error) {
            console.error('Ошибка при сохранении в localStorage:', error);
            return [];
        }
    }

    getFavorites() {
        try {
            const jsonString = localStorage.getItem(this.key);
            if (!jsonString) {
                return [];
            }
            const favorites = JSON.parse(jsonString);
            if (Array.isArray(favorites)) {
                return favorites
                    .map(id => Number(id))
                    .filter(id => !isNaN(id) && id > 0);
            }
            return [];
        } catch (error) {
            console.error('Ошибка при чтении из localStorage:', error);
            return [];
        }
    }

    addFavorite(id) {
        const favorites = this.getFavorites();
        const numericId = Number(id);
        if (isNaN(numericId) || numericId <= 0) {
            console.error('Неверный ID:', id);
            return favorites;
        }
        if (!favorites.includes(numericId)) {
            favorites.push(numericId);
            this.setFavorites(favorites);
        }
        
        return favorites;
    }

    removeFavorite(id) {
        const favorites = this.getFavorites();
        const numericId = Number(id);
        if (isNaN(numericId)) {
            console.error('Неверный ID для удаления:', id);
            return favorites;
        }
        const updatedFavorites = favorites.filter(favId => favId !== numericId);
        if (updatedFavorites.length !== favorites.length) {
            this.setFavorites(updatedFavorites);
        }
        
        return updatedFavorites;
    }

    clearFavorites() {
        localStorage.removeItem(this.key);
        return [];
    }
}