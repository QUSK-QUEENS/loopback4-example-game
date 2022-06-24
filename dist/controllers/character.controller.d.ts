import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Character } from '../models';
import { CharacterRepository } from '../repositories';
export declare class CharacterController {
    characterRepository: CharacterRepository;
    constructor(characterRepository: CharacterRepository);
    create(character: Omit<Character, 'id'>): Promise<Character>;
    count(where?: Where<Character>): Promise<Count>;
    find(filter?: Filter<Character>): Promise<Character[]>;
    updateAll(character: Character, where?: Where<Character>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Character>): Promise<Character>;
    updateById(id: string, character: Character): Promise<void>;
    replaceById(id: string, character: Character): Promise<void>;
    deleteById(id: string): Promise<void>;
}
