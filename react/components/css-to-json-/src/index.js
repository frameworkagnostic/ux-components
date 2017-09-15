'use strict;';


var css = require('css');
var camelCase = require('camelcase');


module.exports = function cssObjectLoader (source) {
  /* istanbul ignore next */
  this.cacheable && this.cacheable();
  // Step 1.
  var parsedStylesheet = getParsedStylesheet(source);
  // Step 2.
  var selectors = parsedStylesheet && parsedStylesheet.rules.reduce(reduceRulesToSelectors, {});
  return 'module.exports = ' + JSON.stringify(selectors) + ';';
};

// Parse the contents of the CSS file and get the resulting AST
function getParsedStylesheet (source) {
  return css.parse(source).stylesheet;
}

// Return `true` for an AST node with { type: 'rule' } and valid selectors
function isValidRule (rule) {
  return !!(rule.type === 'rule' && rule.selectors && rule.selectors.length);
}
// Return `true` for an AST node with { type: 'declaration' } and any property
function isValidDeclaration (declaration) {
  return !!(declaration.type === 'declaration' && declaration.property && declaration.property.length);
}

// Reduce a declaration node from the AST to a style object
function reduceDeclarationsToStyleObject (styleObj, declaration) {
  if (!isValidDeclaration(declaration)) {
    return styleObj;
  }
  var key = camelCase(declaration.property);
  var value = declaration.value;

  styleObj[key] = value;
  return styleObj;
}

// Reduce a rule to a collection of selectors
function reduceRulesToSelectors (selectors, rule) {

  if (!isValidRule(rule)) {
    return selectors;
  }
  var styleObject = rule.declarations.reduce(reduceDeclarationsToStyleObject, {});
  rule.selectors.forEach((selector) => {
    console.log('value>>>>>>>>>>>>>>>>>>>>>>>', selector);

    selectors[selector.replace(/^./, '')] = Object.assign({},
      selectors[selector.replace(/^./, '')],
      styleObject
    );
  });
  return selectors;
}
