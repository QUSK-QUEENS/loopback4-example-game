"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CharacterController = class CharacterController {
    constructor(characterRepository) {
        this.characterRepository = characterRepository;
    }
    async create(character) {
        return this.characterRepository.create(character);
    }
    async count(where) {
        return this.characterRepository.count(where);
    }
    async find(filter) {
        return this.characterRepository.find(filter);
    }
    async updateAll(character, where) {
        return this.characterRepository.updateAll(character, where);
    }
    async findById(id, filter) {
        return this.characterRepository.findById(id, filter);
    }
    async updateById(id, character) {
        await this.characterRepository.updateById(id, character);
    }
    async replaceById(id, character) {
        await this.characterRepository.replaceById(id, character);
    }
    async deleteById(id) {
        await this.characterRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/characters'),
    (0, rest_1.response)(200, {
        description: 'Character model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Character) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Character, {
                    title: 'NewCharacter',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharacterController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/characters/count'),
    (0, rest_1.response)(200, {
        description: 'Character model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Character)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharacterController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/characters'),
    (0, rest_1.response)(200, {
        description: 'Array of Character model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Character, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Character)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharacterController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/characters'),
    (0, rest_1.response)(200, {
        description: 'Character PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Character, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Character)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Character, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharacterController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/characters/{id}'),
    (0, rest_1.response)(200, {
        description: 'Character model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Character, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Character, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CharacterController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/characters/{id}'),
    (0, rest_1.response)(204, {
        description: 'Character PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Character, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Character]),
    tslib_1.__metadata("design:returntype", Promise)
], CharacterController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/characters/{id}'),
    (0, rest_1.response)(204, {
        description: 'Character PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Character]),
    tslib_1.__metadata("design:returntype", Promise)
], CharacterController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/characters/{id}'),
    (0, rest_1.response)(204, {
        description: 'Character DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CharacterController.prototype, "deleteById", null);
CharacterController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CharacterRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CharacterRepository])
], CharacterController);
exports.CharacterController = CharacterController;
//# sourceMappingURL=character.controller.js.map