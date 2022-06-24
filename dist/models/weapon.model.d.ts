import { Entity } from '@loopback/repository';
export declare class Weapon extends Entity {
    id?: string;
    name: string;
    attack: number;
    defence: number;
    characterId: string;
    constructor(data?: Partial<Weapon>);
}
export interface WeaponRelations {
}
export declare type WeaponWithRelations = Weapon & WeaponRelations;
