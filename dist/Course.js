import { BaseRepository } from "./BaseRepository";
export class CourseRepository extends BaseRepository {
    constructor() {
        super([
            { id: 1, Name_Cource: "NodeJS_Developer", organization: 'Gaza Sky Geeks', description: "This Course is NodeJS_Developer in Gaza Sky Geeks :)" },
            { id: 2, Name_Cource: "React", organization: 'GGetway', description: "This Course is React in GGetway :)" }
        ]);
    }
}
