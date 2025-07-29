import { DbEntity } from "./DbEntity ";

export interface Repository<Type extends DbEntity> {
  showAllData(): Promise<Type[]>;
  findById(id: Type['id']): Promise <Type | undefined>;
  createItem(payload: Type):Promise<Type>;
  updateItem(id: Type['id'],payload: Partial<Type>):Promise<Type | undefined>;
  deleteById(id: Type['id']): Promise<string>;
  findBy(filter: Partial<Type>): Promise<Type[]>;
}
