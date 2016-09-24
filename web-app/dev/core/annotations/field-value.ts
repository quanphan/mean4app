declare var Symbol: any;


/**
 * Annotation Factory that allows HTML style boolean attributes. For example,
 * a field declared like this:

 * @Directive({ selector: 'component' }) class MyComponent {
 *   @Input() @BooleanFieldValueFactory() myField: boolean;
 * }
 *
 * You could set it up this way:
 *   <component myField>
 * or:
 *   <component myField="">
 */
function booleanFieldValueFactory() {
  return function booleanFieldValueMetadata(target: any, key: string): void {
    const defaultValue = target[key];

    // Use a fallback if Symbol isn't available.
    const localKey = Symbol ? Symbol(key) : `__md_private_symbol_${key}`;
    target[localKey] = defaultValue;

    Object.defineProperty(target, key, {
      get() { return this[localKey]; },
      set(value: boolean) {
        this[localKey] = value != null && `${value}` !== 'false';
      }
    });
  };
}


export { booleanFieldValueFactory as BooleanFieldValue };
