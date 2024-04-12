import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ShopMixin
} from '../mixins/regenerated/models/i-i-s-test-project-shop';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ShopMixin, Validations, {
});

defineProjections(Model);

export default Model;
