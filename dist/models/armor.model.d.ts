import { Entity } from '@loopback/repository';
export declare class Armor extends Entity {
    id?: string;
    name: string;
    attack: number;
    dafence: number;
    characterId: string;
    constructor(data?: Partial<Armor>);
}
export interface ArmorRelations {
}
export declare type ArmorWithRelations = Armor & ArmorRelations;
