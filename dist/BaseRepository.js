export class BaseRepository {
    items;
    constructor(data) {
        this.items = data;
    }
    async showAllData() {
        return this.items;
    }
    async findById(id) {
        return this.items.find(item => item.id === id);
    }
    async createItem(item) {
        this.items.push(item);
        return item;
    }
    async updateItem(id, item) {
        const index = this.items.findIndex(i => i.id === id);
        if (index === -1)
            return undefined;
        this.items[index] = { ...this.items[index], ...item };
        return this.items[index];
    }
    async deleteById(id) {
        const index = this.items.findIndex(i => i.id === id);
        if (index === -1)
            return 'Item not found';
        this.items.splice(index, 1);
        return 'The item is successfully deleted.';
    }
    async findBy(filter) {
        return this.items.filter(item => {
            for (const key in filter) {
                if (filter[key] !== item[key]) {
                    return false;
                }
            }
            return true;
        });
    }
}
