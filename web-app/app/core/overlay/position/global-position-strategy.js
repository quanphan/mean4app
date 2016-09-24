System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GlobalPositionStrategy;
    return {
        setters:[],
        execute: function() {
            /**
             * A strategy for positioning overlays. Using this strategy, an overlay is given an
             * explicit position relative to the browser's viewport.
             */
            class GlobalPositionStrategy {
                constructor() {
                    this._cssPosition = 'absolute';
                    this._top = '';
                    this._bottom = '';
                    this._left = '';
                    this._right = '';
                    /** Array of individual applications of translateX(). Currently only for centering. */
                    this._translateX = [];
                    /** Array of individual applications of translateY(). Currently only for centering. */
                    this._translateY = [];
                }
                /** Sets the element to usee CSS position: fixed */
                fixed() {
                    this._cssPosition = 'fixed';
                    return this;
                }
                /** Sets the element to usee CSS position: absolute. This is the default. */
                absolute() {
                    this._cssPosition = 'absolute';
                    return this;
                }
                /** Sets the top position of the overlay. Clears any previously set vertical position. */
                top(value) {
                    this._bottom = '';
                    this._translateY = [];
                    this._top = value;
                    return this;
                }
                /** Sets the left position of the overlay. Clears any previously set horizontal position. */
                left(value) {
                    this._right = '';
                    this._translateX = [];
                    this._left = value;
                    return this;
                }
                /** Sets the bottom position of the overlay. Clears any previously set vertical position. */
                bottom(value) {
                    this._top = '';
                    this._translateY = [];
                    this._bottom = value;
                    return this;
                }
                /** Sets the right position of the overlay. Clears any previously set horizontal position. */
                right(value) {
                    this._left = '';
                    this._translateX = [];
                    this._right = value;
                    return this;
                }
                /**
                 * Centers the overlay horizontally with an optional offset.
                 * Clears any previously set horizontal position.
                 */
                centerHorizontally(offset = '0px') {
                    this._left = '50%';
                    this._right = '';
                    this._translateX = ['-50%', offset];
                    return this;
                }
                /**
                 * Centers the overlay vertically with an optional offset.
                 * Clears any previously set vertical position.
                 */
                centerVertically(offset = '0px') {
                    this._top = '50%';
                    this._bottom = '';
                    this._translateY = ['-50%', offset];
                    return this;
                }
                /** Apply the position to the element. */
                apply(element) {
                    element.style.position = this._cssPosition;
                    element.style.top = this._top;
                    element.style.left = this._left;
                    element.style.bottom = this._bottom;
                    element.style.right = this._right;
                    // TODO(jelbourn): we don't want to always overwrite the transform property here,
                    // because it will need to be used for animations.
                    let tranlateX = this._reduceTranslateValues('translateX', this._translateX);
                    let translateY = this._reduceTranslateValues('translateY', this._translateY);
                    // It's important to trim the result, because the browser will ignore the set operation
                    // if the string contains only whitespace.
                    element.style.transform = `${tranlateX} ${translateY}`.trim();
                    return Promise.resolve();
                }
                /** Reduce a list of translate values to a string that can be used in the transform property */
                _reduceTranslateValues(translateFn, values) {
                    return values.map(t => `${translateFn}(${t})`).join(' ');
                }
            }
            exports_1("GlobalPositionStrategy", GlobalPositionStrategy);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9wb3NpdGlvbi9nbG9iYWwtcG9zaXRpb24tc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUdBOzs7ZUFHRztZQUNIO2dCQUFBO29CQUNVLGlCQUFZLEdBQVcsVUFBVSxDQUFDO29CQUNsQyxTQUFJLEdBQVcsRUFBRSxDQUFDO29CQUNsQixZQUFPLEdBQVcsRUFBRSxDQUFDO29CQUNyQixVQUFLLEdBQVcsRUFBRSxDQUFDO29CQUNuQixXQUFNLEdBQVcsRUFBRSxDQUFDO29CQUU1QixzRkFBc0Y7b0JBQzlFLGdCQUFXLEdBQWEsRUFBRSxDQUFDO29CQUVuQyxzRkFBc0Y7b0JBQzlFLGdCQUFXLEdBQWEsRUFBRSxDQUFDO2dCQTRGckMsQ0FBQztnQkExRkMsbURBQW1EO2dCQUNuRCxLQUFLO29CQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRUQsNEVBQTRFO2dCQUM1RSxRQUFRO29CQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO29CQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRUQseUZBQXlGO2dCQUN6RixHQUFHLENBQUMsS0FBYTtvQkFDZixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRUQsNEZBQTRGO2dCQUM1RixJQUFJLENBQUMsS0FBYTtvQkFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVELDRGQUE0RjtnQkFDNUYsTUFBTSxDQUFDLEtBQWE7b0JBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVELDZGQUE2RjtnQkFDN0YsS0FBSyxDQUFDLEtBQWE7b0JBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRDs7O21CQUdHO2dCQUNILGtCQUFrQixDQUFDLE1BQU0sR0FBRyxLQUFLO29CQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRDs7O21CQUdHO2dCQUNILGdCQUFnQixDQUFDLE1BQU0sR0FBRyxLQUFLO29CQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCx5Q0FBeUM7Z0JBQ3pDLEtBQUssQ0FBQyxPQUFvQjtvQkFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDM0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFFbEMsaUZBQWlGO29CQUNqRixrREFBa0Q7b0JBQ2xELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM1RSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFFN0UsdUZBQXVGO29CQUN2RiwwQ0FBMEM7b0JBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsU0FBUyxJQUFJLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUU5RCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELCtGQUErRjtnQkFDdkYsc0JBQXNCLENBQUMsV0FBbUIsRUFBRSxNQUFnQjtvQkFDbEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsV0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO1lBQ0gsQ0FBQztZQXZHRCwyREF1R0MsQ0FBQSIsImZpbGUiOiJjb3JlL292ZXJsYXkvcG9zaXRpb24vZ2xvYmFsLXBvc2l0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQb3NpdGlvblN0cmF0ZWd5fSBmcm9tICcuL3Bvc2l0aW9uLXN0cmF0ZWd5JztcblxuXG4vKipcbiAqIEEgc3RyYXRlZ3kgZm9yIHBvc2l0aW9uaW5nIG92ZXJsYXlzLiBVc2luZyB0aGlzIHN0cmF0ZWd5LCBhbiBvdmVybGF5IGlzIGdpdmVuIGFuXG4gKiBleHBsaWNpdCBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgYnJvd3NlcidzIHZpZXdwb3J0LlxuICovXG5leHBvcnQgY2xhc3MgR2xvYmFsUG9zaXRpb25TdHJhdGVneSBpbXBsZW1lbnRzIFBvc2l0aW9uU3RyYXRlZ3kge1xuICBwcml2YXRlIF9jc3NQb3NpdGlvbjogc3RyaW5nID0gJ2Fic29sdXRlJztcbiAgcHJpdmF0ZSBfdG9wOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfYm90dG9tOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfbGVmdDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3JpZ2h0OiBzdHJpbmcgPSAnJztcblxuICAvKiogQXJyYXkgb2YgaW5kaXZpZHVhbCBhcHBsaWNhdGlvbnMgb2YgdHJhbnNsYXRlWCgpLiBDdXJyZW50bHkgb25seSBmb3IgY2VudGVyaW5nLiAqL1xuICBwcml2YXRlIF90cmFuc2xhdGVYOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKiBBcnJheSBvZiBpbmRpdmlkdWFsIGFwcGxpY2F0aW9ucyBvZiB0cmFuc2xhdGVZKCkuIEN1cnJlbnRseSBvbmx5IGZvciBjZW50ZXJpbmcuICovXG4gIHByaXZhdGUgX3RyYW5zbGF0ZVk6IHN0cmluZ1tdID0gW107XG5cbiAgLyoqIFNldHMgdGhlIGVsZW1lbnQgdG8gdXNlZSBDU1MgcG9zaXRpb246IGZpeGVkICovXG4gIGZpeGVkKCkge1xuICAgIHRoaXMuX2Nzc1Bvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBlbGVtZW50IHRvIHVzZWUgQ1NTIHBvc2l0aW9uOiBhYnNvbHV0ZS4gVGhpcyBpcyB0aGUgZGVmYXVsdC4gKi9cbiAgYWJzb2x1dGUoKSB7XG4gICAgdGhpcy5fY3NzUG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIHRvcCBwb3NpdGlvbiBvZiB0aGUgb3ZlcmxheS4gQ2xlYXJzIGFueSBwcmV2aW91c2x5IHNldCB2ZXJ0aWNhbCBwb3NpdGlvbi4gKi9cbiAgdG9wKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ib3R0b20gPSAnJztcbiAgICB0aGlzLl90cmFuc2xhdGVZID0gW107XG4gICAgdGhpcy5fdG9wID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgbGVmdCBwb3NpdGlvbiBvZiB0aGUgb3ZlcmxheS4gQ2xlYXJzIGFueSBwcmV2aW91c2x5IHNldCBob3Jpem9udGFsIHBvc2l0aW9uLiAqL1xuICBsZWZ0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yaWdodCA9ICcnO1xuICAgIHRoaXMuX3RyYW5zbGF0ZVggPSBbXTtcbiAgICB0aGlzLl9sZWZ0ID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgYm90dG9tIHBvc2l0aW9uIG9mIHRoZSBvdmVybGF5LiBDbGVhcnMgYW55IHByZXZpb3VzbHkgc2V0IHZlcnRpY2FsIHBvc2l0aW9uLiAqL1xuICBib3R0b20odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RvcCA9ICcnO1xuICAgIHRoaXMuX3RyYW5zbGF0ZVkgPSBbXTtcbiAgICB0aGlzLl9ib3R0b20gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSByaWdodCBwb3NpdGlvbiBvZiB0aGUgb3ZlcmxheS4gQ2xlYXJzIGFueSBwcmV2aW91c2x5IHNldCBob3Jpem9udGFsIHBvc2l0aW9uLiAqL1xuICByaWdodCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGVmdCA9ICcnO1xuICAgIHRoaXMuX3RyYW5zbGF0ZVggPSBbXTtcbiAgICB0aGlzLl9yaWdodCA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENlbnRlcnMgdGhlIG92ZXJsYXkgaG9yaXpvbnRhbGx5IHdpdGggYW4gb3B0aW9uYWwgb2Zmc2V0LlxuICAgKiBDbGVhcnMgYW55IHByZXZpb3VzbHkgc2V0IGhvcml6b250YWwgcG9zaXRpb24uXG4gICAqL1xuICBjZW50ZXJIb3Jpem9udGFsbHkob2Zmc2V0ID0gJzBweCcpIHtcbiAgICB0aGlzLl9sZWZ0ID0gJzUwJSc7XG4gICAgdGhpcy5fcmlnaHQgPSAnJztcbiAgICB0aGlzLl90cmFuc2xhdGVYID0gWyctNTAlJywgb2Zmc2V0XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDZW50ZXJzIHRoZSBvdmVybGF5IHZlcnRpY2FsbHkgd2l0aCBhbiBvcHRpb25hbCBvZmZzZXQuXG4gICAqIENsZWFycyBhbnkgcHJldmlvdXNseSBzZXQgdmVydGljYWwgcG9zaXRpb24uXG4gICAqL1xuICBjZW50ZXJWZXJ0aWNhbGx5KG9mZnNldCA9ICcwcHgnKSB7XG4gICAgdGhpcy5fdG9wID0gJzUwJSc7XG4gICAgdGhpcy5fYm90dG9tID0gJyc7XG4gICAgdGhpcy5fdHJhbnNsYXRlWSA9IFsnLTUwJScsIG9mZnNldF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQXBwbHkgdGhlIHBvc2l0aW9uIHRvIHRoZSBlbGVtZW50LiAqL1xuICBhcHBseShlbGVtZW50OiBIVE1MRWxlbWVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSB0aGlzLl9jc3NQb3NpdGlvbjtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMuX3RvcDtcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSB0aGlzLl9sZWZ0O1xuICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gdGhpcy5fYm90dG9tO1xuICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSB0aGlzLl9yaWdodDtcblxuICAgIC8vIFRPRE8oamVsYm91cm4pOiB3ZSBkb24ndCB3YW50IHRvIGFsd2F5cyBvdmVyd3JpdGUgdGhlIHRyYW5zZm9ybSBwcm9wZXJ0eSBoZXJlLFxuICAgIC8vIGJlY2F1c2UgaXQgd2lsbCBuZWVkIHRvIGJlIHVzZWQgZm9yIGFuaW1hdGlvbnMuXG4gICAgbGV0IHRyYW5sYXRlWCA9IHRoaXMuX3JlZHVjZVRyYW5zbGF0ZVZhbHVlcygndHJhbnNsYXRlWCcsIHRoaXMuX3RyYW5zbGF0ZVgpO1xuICAgIGxldCB0cmFuc2xhdGVZID0gdGhpcy5fcmVkdWNlVHJhbnNsYXRlVmFsdWVzKCd0cmFuc2xhdGVZJywgdGhpcy5fdHJhbnNsYXRlWSk7XG5cbiAgICAvLyBJdCdzIGltcG9ydGFudCB0byB0cmltIHRoZSByZXN1bHQsIGJlY2F1c2UgdGhlIGJyb3dzZXIgd2lsbCBpZ25vcmUgdGhlIHNldCBvcGVyYXRpb25cbiAgICAvLyBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZS5cbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5sYXRlWH0gJHt0cmFuc2xhdGVZfWAudHJpbSgpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgLyoqIFJlZHVjZSBhIGxpc3Qgb2YgdHJhbnNsYXRlIHZhbHVlcyB0byBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGluIHRoZSB0cmFuc2Zvcm0gcHJvcGVydHkgKi9cbiAgcHJpdmF0ZSBfcmVkdWNlVHJhbnNsYXRlVmFsdWVzKHRyYW5zbGF0ZUZuOiBzdHJpbmcsIHZhbHVlczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdmFsdWVzLm1hcCh0ID0+IGAke3RyYW5zbGF0ZUZufSgke3R9KWApLmpvaW4oJyAnKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
