"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const uuid_1 = require("uuid");
const armor_model_1 = require("./armor.model");
const skill_model_1 = require("./skill.model");
const weapon_model_1 = require("./weapon.model");
let Character = class Character extends repository_1.Entity {
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
], Character.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Character.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 1,
    }),
    tslib_1.__metadata("design:type", Number)
], Character.prototype, "level", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 100,
    }),
    tslib_1.__metadata("design:type", Number)
], Character.prototype, "nextLevelExp", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 0,
    }),
    tslib_1.__metadata("design:type", Number)
], Character.prototype, "currentExp", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 100,
    }),
    tslib_1.__metadata("design:type", Number)
], Character.prototype, "maxHealth", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 100,
    }),
    tslib_1.__metadata("design:type", Number)
], Character.prototype, "currentHealth", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 50,
    }),
    tslib_1.__metadata("design:type", Number)
], Character.prototype, "maxMana", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 50,
    }),
    tslib_1.__metadata("design:type", Number)
], Character.prototype, "currentMana", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 20,
    }),
    tslib_1.__metadata("design:type", Number)
], Character.prototype, "attack", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        default: 5,
    }),
    tslib_1.__metadata("design:type", Number)
], Character.prototype, "defence", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => armor_model_1.Armor),
    tslib_1.__metadata("design:type", armor_model_1.Armor)
], Character.prototype, "armor", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => weapon_model_1.Weapon),
    tslib_1.__metadata("design:type", weapon_model_1.Weapon)
], Character.prototype, "weapon", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => skill_model_1.Skill),
    tslib_1.__metadata("design:type", skill_model_1.Skill)
], Character.prototype, "skill", void 0);
Character = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Character);
exports.Character = Character;
//# sourceMappingURL=character.model.js.map