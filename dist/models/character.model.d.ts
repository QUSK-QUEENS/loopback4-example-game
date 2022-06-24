import { Entity } from '@loopback/repository';
import { Armor } from "./armor.model";
import { Skill } from "./skill.model";
import { Weapon } from "./weapon.model";
export declare class Character extends Entity {
    id?: string;
    name: string;
    level?: number;
    nextLevelExp?: number;
    currentExp?: number;
    maxHealth?: number;
    currentHealth?: number;
    maxMana?: number;
    currentMana?: number;
    attack?: number;
    defence?: number;
    armor?: Armor;
    weapon?: Weapon;
    skill?: Skill;
    constructor(data?: Partial<Character>);
}
export interface CharacterRelations {
}
export declare type CharacterWithRelations = Character & CharacterRelations;
