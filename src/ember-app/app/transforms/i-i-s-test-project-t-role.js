import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tRoleEnum from '../enums/i-i-s-test-project-t-role';

export default FlexberryEnum.extend({
  enum: tRoleEnum,
  sourceType: 'IIS.TestProject.tRole'
});
