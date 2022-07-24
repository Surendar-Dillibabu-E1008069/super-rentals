import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rental/detailed-comp', 'Integration | Component | rental/detailed comp', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rental/detailed-comp}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rental/detailed-comp}}
      template block text
    {{/rental/detailed-comp}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
