import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  role: DS.attr('i-i-s-test-project-t-role'),
  фИО: DS.attr('string'),
  shop: DS.belongsTo('i-i-s-test-project-shop', { inverse: 'sellers', async: false })
});

export let ValidationRules = {
  role: {
    descriptionKey: 'models.i-i-s-test-project-seller.validations.role.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-test-project-seller.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shop: {
    descriptionKey: 'models.i-i-s-test-project-seller.validations.shop.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SellerE', 'i-i-s-test-project-seller', {
    role: attr('Роль', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    shop: belongsTo('i-i-s-test-project-shop', '', {

    }, { index: 2 })
  });

  modelClass.defineProjection('SellerL', 'i-i-s-test-project-seller', {
    role: attr('Роль', { index: 0 }),
    фИО: attr('ФИО', { index: 1 })
  });
};
