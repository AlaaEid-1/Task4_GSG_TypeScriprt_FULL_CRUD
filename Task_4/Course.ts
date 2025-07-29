import { DbEntity } from "./DbEntity ";
import { BaseRepository } from "./BaseRepository";

export interface Course extends DbEntity{
    Name_Cource: string;
    organization:string;
    description: string;
}

export class CourseRepository extends BaseRepository<Course> {
  constructor() {
    super([
      { id: 1, Name_Cource: "NodeJS_Developer",organization:'Gaza Sky Geeks', description: "This Course is NodeJS_Developer" },
      { id: 2, Name_Cource: "React",organization:'GGetway', description: "This Course is React" },
      { id: 3, Name_Cource: "Data Structure",organization:'Unit one', description: "This Course is Data Structure" }
    ]);
  }
}