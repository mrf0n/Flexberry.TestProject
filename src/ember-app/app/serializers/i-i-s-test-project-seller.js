import { Serializer as SellerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-project-seller';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SellerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
