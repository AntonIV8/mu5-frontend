import { Serializer as A3Serializer } from
  '../mixins/regenerated/serializers/i-i-s-mu5-a3';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(A3Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
