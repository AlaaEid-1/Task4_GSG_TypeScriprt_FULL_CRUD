import { DbEntity } from "./DbEntity ";
import { Repository } from "./Repository";

export class BaseRepository<T extends DbEntity> implements Repository<T> {
  public items: T[];

  constructor(data: T[]) {
    this.items = data;
  }

  async showAllData(): Promise<T[]> {
    return this.items;
  }

  async findById(id: number): Promise<T | undefined> {
    return this.items.find(item => item.id === id);
  }

  async createItem(item: T): Promise<T> {
    this.items.push(item);
    return item;
  }

  async updateItem(id: number, item: Partial<T>): Promise<T | undefined> {
    const index =
     this.items.findIndex(i => i.id === id);
    if (index === -1) 
      return undefined;

    this.items[index] = { ...this.items[index], ...item };
    return this.items[index];
  }

  async deleteById(id: number): Promise<string> {
    const index = this.items.findIndex(i => i.id === id);
    if (index === -1) return 'Item not found';
    this.items.splice(index, 1);
    return 'The item is successfully deleted.';
  }

 async findBy(filter: Partial<T>): Promise<T[]> {
  return this.items.filter(item => {
    for (const key in filter) {
      if (filter[key] !== item[key]) {
        return false; }}
    return true; 
  });}
}
