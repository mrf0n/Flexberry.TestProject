import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  adress: DS.attr('string'),
  name: DS.attr('string'),
  sellers: DS.hasMany('i-i-s-test-project-seller', { inverse: 'shop', async: false })
});

export let ValidationRules = {
  adress: {
    descriptionKey: 'models.i-i-s-test-project-shop.validations.adress.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-test-project-shop.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  sellers: {
    descriptionKey: 'models.i-i-s-test-project-shop.validations.sellers.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ShopE', 'i-i-s-test-project-shop', {
    name: attr('Название', { index: 0 }),
    adress: attr('Адрес', { index: 1 }),
    sellers: hasMany('i-i-s-test-project-seller', 'Продавцы', {
      role: attr('Роль', { index: 0 }),
      фИО: attr('ФИО', { index: 1 })
    })
  });

  modelClass.defineProjection('ShopL', 'i-i-s-test-project-shop', {
    name: attr('Название', { index: 0 }),
    adress: attr('Адрес', { index: 1 })
  });
};
