import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  role: DS.attr('i-i-s-test-project-t-role'),
  фИО: DS.attr('string')
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
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SellerE', 'i-i-s-test-project-seller', {
    role: attr('Роль', { index: 0 }),
    фИО: attr('ФИО', { index: 1 })
  });

  modelClass.defineProjection('SellerL', 'i-i-s-test-project-seller', {
    role: attr('Роль', { index: 0 }),
    фИО: attr('ФИО', { index: 1 })
  });
};
