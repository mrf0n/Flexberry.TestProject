import {
  defineNamespace,
  defineProjections,
  Model as SellerMixin
} from '../mixins/regenerated/models/i-i-s-test-project-seller';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(SellerMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
