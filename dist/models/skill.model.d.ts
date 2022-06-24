import { Entity } from '@loopback/repository';
export declare class Skill extends Entity {
    id?: string;
    name: string;
    attack: number;
    cost: number;
    characterId: string;
    constructor(data?: Partial<Skill>);
}
export interface SkillRelations {
}
export declare type SkillWithRelations = Skill & SkillRelations;
