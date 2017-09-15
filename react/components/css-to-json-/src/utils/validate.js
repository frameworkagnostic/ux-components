
// Return `true` for an AST node with { type: 'rule' } and valid selectors
export function isValidRule (rule) {
  return !!(rule.type === 'rule' && rule.selectors && rule.selectors.length);
}

// Return `true` for an AST node with { type: 'declaration' } and any property
export function isValidDeclaration (declaration) {
  return !!(declaration.type === 'declaration' && declaration.property && declaration.property.length);
}
