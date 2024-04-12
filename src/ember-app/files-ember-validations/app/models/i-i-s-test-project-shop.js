import {
  defineNamespace,
  defineProjections,
  Model as ShopMixin
} from '../mixins/regenerated/models/i-i-s-test-project-shop';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ShopMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
