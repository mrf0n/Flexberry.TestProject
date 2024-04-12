import { Serializer as ShopSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-project-shop';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ShopSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
