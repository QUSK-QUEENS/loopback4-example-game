"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const character_model_1 = require("./character.model");
const uuid_1 = require("uuid");
let Weapon = class Weapon extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
        default: () => (0, uuid_1.v4)(),
    }),
    tslib_1.__metadata("design:type", String)
], Weapon.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Weapon.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Weapon.prototype, "attack", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Weapon.prototype, "defence", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => character_model_1.Character),
    tslib_1.__metadata("design:type", String)
], Weapon.prototype, "characterId", void 0);
Weapon = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Weapon);
exports.Weapon = Weapon;
//# sourceMappingURL=weapon.model.js.map