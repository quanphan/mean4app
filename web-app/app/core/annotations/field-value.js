System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
        return function booleanFieldValueMetadata(target, key) {
            const defaultValue = target[key];
            // Use a fallback if Symbol isn't available.
            const localKey = Symbol ? Symbol(key) : `__md_private_symbol_${key}`;
            target[localKey] = defaultValue;
            Object.defineProperty(target, key, {
                get() { return this[localKey]; },
                set(value) {
                    this[localKey] = value != null && `${value}` !== 'false';
                }
            });
        };
    }
    return {
        setters:[],
        execute: function() {
            exports_1("BooleanFieldValue", booleanFieldValueFactory);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvYW5ub3RhdGlvbnMvZmllbGQtdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0E7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0g7UUFDRSxNQUFNLENBQUMsbUNBQW1DLE1BQVcsRUFBRSxHQUFXO1lBQ2hFLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVqQyw0Q0FBNEM7WUFDNUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyx1QkFBdUIsR0FBRyxFQUFFLENBQUM7WUFDckUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUVoQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0JBQ2pDLEdBQUcsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsR0FBRyxDQUFDLEtBQWM7b0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLEtBQUssT0FBTyxDQUFDO2dCQUMzRCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztZQUdvQyx3REFBaUIiLCJmaWxlIjoiY29yZS9hbm5vdGF0aW9ucy9maWVsZC12YWx1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIFN5bWJvbDogYW55O1xuXG5cbi8qKlxuICogQW5ub3RhdGlvbiBGYWN0b3J5IHRoYXQgYWxsb3dzIEhUTUwgc3R5bGUgYm9vbGVhbiBhdHRyaWJ1dGVzLiBGb3IgZXhhbXBsZSxcbiAqIGEgZmllbGQgZGVjbGFyZWQgbGlrZSB0aGlzOlxuXG4gKiBARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdjb21wb25lbnQnIH0pIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgQElucHV0KCkgQEJvb2xlYW5GaWVsZFZhbHVlRmFjdG9yeSgpIG15RmllbGQ6IGJvb2xlYW47XG4gKiB9XG4gKlxuICogWW91IGNvdWxkIHNldCBpdCB1cCB0aGlzIHdheTpcbiAqICAgPGNvbXBvbmVudCBteUZpZWxkPlxuICogb3I6XG4gKiAgIDxjb21wb25lbnQgbXlGaWVsZD1cIlwiPlxuICovXG5mdW5jdGlvbiBib29sZWFuRmllbGRWYWx1ZUZhY3RvcnkoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBib29sZWFuRmllbGRWYWx1ZU1ldGFkYXRhKHRhcmdldDogYW55LCBrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgLy8gVXNlIGEgZmFsbGJhY2sgaWYgU3ltYm9sIGlzbid0IGF2YWlsYWJsZS5cbiAgICBjb25zdCBsb2NhbEtleSA9IFN5bWJvbCA/IFN5bWJvbChrZXkpIDogYF9fbWRfcHJpdmF0ZV9zeW1ib2xfJHtrZXl9YDtcbiAgICB0YXJnZXRbbG9jYWxLZXldID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICBnZXQoKSB7IHJldHVybiB0aGlzW2xvY2FsS2V5XTsgfSxcbiAgICAgIHNldCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzW2xvY2FsS2V5XSA9IHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuXG5leHBvcnQgeyBib29sZWFuRmllbGRWYWx1ZUZhY3RvcnkgYXMgQm9vbGVhbkZpZWxkVmFsdWUgfTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
