"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armor = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const character_model_1 = require("./character.model");
const uuid_1 = require("uuid");
let Armor = class Armor extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
        dafence: () => (0, uuid_1.v4)(),
    }),
    tslib_1.__metadata("design:type", String)
], Armor.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Armor.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Armor.prototype, "attack", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Armor.prototype, "dafence", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => character_model_1.Character),
    tslib_1.__metadata("design:type", String)
], Armor.prototype, "characterId", void 0);
Armor = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Armor);
exports.Armor = Armor;
//# sourceMappingURL=armor.model.js.map