import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ciclas-listas', 'Integration | Component | ciclas listas', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ciclas-listas}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ciclas-listas}}
      template block text
    {{/ciclas-listas}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
