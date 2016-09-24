System.register(['angular2/testing', './global-position-strategy'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, global_position_strategy_1;
    function main() {
        testing_1.describe('GlobalPositonStrategy', () => {
            let element;
            let strategy;
            testing_1.beforeEach(() => {
                element = document.createElement('div');
                strategy = new global_position_strategy_1.GlobalPositionStrategy();
            });
            testing_1.it('should set explicit (top, left) position to the element', fakeAsyncTest(() => {
                strategy.top('10px').left('40%').apply(element);
                testing_1.flushMicrotasks();
                testing_1.expect(element.style.top).toBe('10px');
                testing_1.expect(element.style.left).toBe('40%');
                testing_1.expect(element.style.bottom).toBe('');
                testing_1.expect(element.style.right).toBe('');
            }));
            testing_1.it('should set explicit (bottom, right) position to the element', fakeAsyncTest(() => {
                strategy.bottom('70px').right('15em').apply(element);
                testing_1.flushMicrotasks();
                testing_1.expect(element.style.top).toBe('');
                testing_1.expect(element.style.left).toBe('');
                testing_1.expect(element.style.bottom).toBe('70px');
                testing_1.expect(element.style.right).toBe('15em');
            }));
            testing_1.it('should overwrite previously applied positioning', fakeAsyncTest(() => {
                strategy.centerHorizontally().centerVertically().apply(element);
                testing_1.flushMicrotasks();
                strategy.top('10px').left('40%').apply(element);
                testing_1.flushMicrotasks();
                testing_1.expect(element.style.top).toBe('10px');
                testing_1.expect(element.style.left).toBe('40%');
                testing_1.expect(element.style.bottom).toBe('');
                testing_1.expect(element.style.right).toBe('');
                testing_1.expect(element.style.transform).not.toContain('translate');
                strategy.bottom('70px').right('15em').apply(element);
                testing_1.flushMicrotasks();
                testing_1.expect(element.style.top).toBe('');
                testing_1.expect(element.style.left).toBe('');
                testing_1.expect(element.style.bottom).toBe('70px');
                testing_1.expect(element.style.right).toBe('15em');
                testing_1.expect(element.style.transform).not.toContain('translate');
            }));
            testing_1.it('should center the element', fakeAsyncTest(() => {
                strategy.centerHorizontally().centerVertically().apply(element);
                testing_1.flushMicrotasks();
                testing_1.expect(element.style.top).toBe('50%');
                testing_1.expect(element.style.left).toBe('50%');
                testing_1.expect(element.style.transform).toContain('translateX(-50%)');
                testing_1.expect(element.style.transform).toContain('translateY(-50%)');
            }));
            testing_1.it('should center the element with an offset', fakeAsyncTest(() => {
                strategy.centerHorizontally('10px').centerVertically('15px').apply(element);
                testing_1.flushMicrotasks();
                testing_1.expect(element.style.top).toBe('50%');
                testing_1.expect(element.style.left).toBe('50%');
                testing_1.expect(element.style.transform).toContain('translateX(-50%)');
                testing_1.expect(element.style.transform).toContain('translateX(10px)');
                testing_1.expect(element.style.transform).toContain('translateY(-50%)');
                testing_1.expect(element.style.transform).toContain('translateY(15px)');
            }));
            testing_1.it('should default the element to position: absolute', fakeAsyncTest(() => {
                strategy.apply(element);
                testing_1.flushMicrotasks();
                testing_1.expect(element.style.position).toBe('absolute');
            }));
            testing_1.it('should make the element position: fixed', fakeAsyncTest(() => {
                strategy.fixed().apply(element);
                testing_1.flushMicrotasks();
                testing_1.expect(element.style.position).toBe('fixed');
            }));
        });
    }
    exports_1("main", main);
    function fakeAsyncTest(fn) {
        return testing_1.inject([], testing_1.fakeAsync(fn));
    }
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (global_position_strategy_1_1) {
                global_position_strategy_1 = global_position_strategy_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9wb3NpdGlvbi9nbG9iYWwtcG9zaXRpb24tc3RyYXRlZ3kuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBWUE7UUFDRSxrQkFBUSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksT0FBb0IsQ0FBQztZQUN6QixJQUFJLFFBQWdDLENBQUM7WUFFckMsb0JBQVUsQ0FBQztnQkFDVCxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsUUFBUSxHQUFHLElBQUksaURBQXNCLEVBQUUsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUVILFlBQUUsQ0FBQyx5REFBeUQsRUFBRSxhQUFhLENBQUM7Z0JBQzFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFaEQseUJBQWUsRUFBRSxDQUFDO2dCQUVsQixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFSixZQUFFLENBQUMsNkRBQTZELEVBQUUsYUFBYSxDQUFDO2dCQUM5RSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENB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RSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRUosWUFBRSxDQUFDLGtEQUFrRCxFQUFFLGFBQWEsQ0FBQztnQkFDbkUsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFeEIseUJBQWUsRUFBRSxDQUFDO2dCQUVsQixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFSixZQUFFLENBQUMseUNBQXlDLEVBQUUsYUFBYSxDQUFDO2dCQUMxRCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVoQyx5QkFBZSxFQUFFLENBQUM7Z0JBRWxCLGdCQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWhHRCx1QkFnR0MsQ0FBQTtJQUVELHVCQUF1QixFQUFjO1FBQ25DLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLEVBQUUsRUFBRSxtQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQyIsImZpbGUiOiJjb3JlL292ZXJsYXkvcG9zaXRpb24vZ2xvYmFsLXBvc2l0aW9uLXN0cmF0ZWd5LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBpdCxcbiAgZGVzY3JpYmUsXG4gIGV4cGVjdCxcbiAgYmVmb3JlRWFjaCxcbiAgaW5qZWN0LFxuICBmYWtlQXN5bmMsXG4gIGZsdXNoTWljcm90YXNrcyxcbn0gZnJvbSAnYW5ndWxhcjIvdGVzdGluZyc7XG5pbXBvcnQge0dsb2JhbFBvc2l0aW9uU3RyYXRlZ3l9IGZyb20gJy4vZ2xvYmFsLXBvc2l0aW9uLXN0cmF0ZWd5JztcblxuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcbiAgZGVzY3JpYmUoJ0dsb2JhbFBvc2l0b25TdHJhdGVneScsICgpID0+IHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgbGV0IHN0cmF0ZWd5OiBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5O1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzdHJhdGVneSA9IG5ldyBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHNldCBleHBsaWNpdCAodG9wLCBsZWZ0KSBwb3NpdGlvbiB0byB0aGUgZWxlbWVudCcsIGZha2VBc3luY1Rlc3QoKCkgPT4ge1xuICAgICAgc3RyYXRlZ3kudG9wKCcxMHB4JykubGVmdCgnNDAlJykuYXBwbHkoZWxlbWVudCk7XG5cbiAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICBleHBlY3QoZWxlbWVudC5zdHlsZS50b3ApLnRvQmUoJzEwcHgnKTtcbiAgICAgIGV4cGVjdChlbGVtZW50LnN0eWxlLmxlZnQpLnRvQmUoJzQwJScpO1xuICAgICAgZXhwZWN0KGVsZW1lbnQuc3R5bGUuYm90dG9tKS50b0JlKCcnKTtcbiAgICAgIGV4cGVjdChlbGVtZW50LnN0eWxlLnJpZ2h0KS50b0JlKCcnKTtcbiAgICB9KSk7XG5cbiAgICBpdCgnc2hvdWxkIHNldCBleHBsaWNpdCAoYm90dG9tLCByaWdodCkgcG9zaXRpb24gdG8gdGhlIGVsZW1lbnQnLCBmYWtlQXN5bmNUZXN0KCgpID0+IHtcbiAgICAgIHN0cmF0ZWd5LmJvdHRvbSgnNzBweCcpLnJpZ2h0KCcxNWVtJykuYXBwbHkoZWxlbWVudCk7XG5cbiAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICBleHBlY3QoZWxlbWVudC5zdHlsZS50b3ApLnRvQmUoJycpO1xuICAgICAgZXhwZWN0KGVsZW1lbnQuc3R5bGUubGVmdCkudG9CZSgnJyk7XG4gICAgICBleHBlY3QoZWxlbWVudC5zdHlsZS5ib3R0b20pLnRvQmUoJzcwcHgnKTtcbiAgICAgIGV4cGVjdChlbGVtZW50LnN0eWxlLnJpZ2h0KS50b0JlKCcxNWVtJyk7XG4gICAgfSkpO1xuXG4gICAgaXQoJ3Nob3VsZCBvdmVyd3JpdGUgcHJldmlvdXNseSBhcHBsaWVkIHBvc2l0aW9uaW5nJywgZmFrZUFzeW5jVGVzdCgoKSA9PiB7XG4gICAgICBzdHJhdGVneS5jZW50ZXJIb3Jpem9udGFsbHkoKS5jZW50ZXJWZXJ0aWNhbGx5KCkuYXBwbHkoZWxlbWVudCk7XG4gICAgICBmbHVzaE1pY3JvdGFza3MoKTtcblxuICAgICAgc3RyYXRlZ3kudG9wKCcxMHB4JykubGVmdCgnNDAlJykuYXBwbHkoZWxlbWVudCk7XG4gICAgICBmbHVzaE1pY3JvdGFza3MoKTtcblxuICAgICAgZXhwZWN0KGVsZW1lbnQuc3R5bGUudG9wKS50b0JlKCcxMHB4Jyk7XG4gICAgICBleHBlY3QoZWxlbWVudC5zdHlsZS5sZWZ0KS50b0JlKCc0MCUnKTtcbiAgICAgIGV4cGVjdChlbGVtZW50LnN0eWxlLmJvdHRvbSkudG9CZSgnJyk7XG4gICAgICBleHBlY3QoZWxlbWVudC5zdHlsZS5yaWdodCkudG9CZSgnJyk7XG4gICAgICBleHBlY3QoZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0pLm5vdC50b0NvbnRhaW4oJ3RyYW5zbGF0ZScpO1xuXG4gICAgICBzdHJhdGVneS5ib3R0b20oJzcwcHgnKS5yaWdodCgnMTVlbScpLmFwcGx5KGVsZW1lbnQpO1xuXG4gICAgICBmbHVzaE1pY3JvdGFza3MoKTtcblxuICAgICAgZXhwZWN0KGVsZW1lbnQuc3R5bGUudG9wKS50b0JlKCcnKTtcbiAgICAgIGV4cGVjdChlbGVtZW50LnN0eWxlLmxlZnQpLnRvQmUoJycpO1xuICAgICAgZXhwZWN0KGVsZW1lbnQuc3R5bGUuYm90dG9tKS50b0JlKCc3MHB4Jyk7XG4gICAgICBleHBlY3QoZWxlbWVudC5zdHlsZS5yaWdodCkudG9CZSgnMTVlbScpO1xuICAgICAgZXhwZWN0KGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtKS5ub3QudG9Db250YWluKCd0cmFuc2xhdGUnKTtcbiAgICB9KSk7XG5cbiAgICBpdCgnc2hvdWxkIGNlbnRlciB0aGUgZWxlbWVudCcsIGZha2VBc3luY1Rlc3QoKCkgPT4ge1xuICAgICAgc3RyYXRlZ3kuY2VudGVySG9yaXpvbnRhbGx5KCkuY2VudGVyVmVydGljYWxseSgpLmFwcGx5KGVsZW1lbnQpO1xuXG4gICAgICBmbHVzaE1pY3JvdGFza3MoKTtcblxuICAgICAgZXhwZWN0KGVsZW1lbnQuc3R5bGUudG9wKS50b0JlKCc1MCUnKTtcbiAgICAgIGV4cGVjdChlbGVtZW50LnN0eWxlLmxlZnQpLnRvQmUoJzUwJScpO1xuICAgICAgZXhwZWN0KGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtKS50b0NvbnRhaW4oJ3RyYW5zbGF0ZVgoLTUwJSknKTtcbiAgICAgIGV4cGVjdChlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSkudG9Db250YWluKCd0cmFuc2xhdGVZKC01MCUpJyk7XG4gICAgfSkpO1xuXG4gICAgaXQoJ3Nob3VsZCBjZW50ZXIgdGhlIGVsZW1lbnQgd2l0aCBhbiBvZmZzZXQnLCBmYWtlQXN5bmNUZXN0KCgpID0+IHtcbiAgICAgIHN0cmF0ZWd5LmNlbnRlckhvcml6b250YWxseSgnMTBweCcpLmNlbnRlclZlcnRpY2FsbHkoJzE1cHgnKS5hcHBseShlbGVtZW50KTtcblxuICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG5cbiAgICAgIGV4cGVjdChlbGVtZW50LnN0eWxlLnRvcCkudG9CZSgnNTAlJyk7XG4gICAgICBleHBlY3QoZWxlbWVudC5zdHlsZS5sZWZ0KS50b0JlKCc1MCUnKTtcbiAgICAgIGV4cGVjdChlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSkudG9Db250YWluKCd0cmFuc2xhdGVYKC01MCUpJyk7XG4gICAgICBleHBlY3QoZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0pLnRvQ29udGFpbigndHJhbnNsYXRlWCgxMHB4KScpO1xuICAgICAgZXhwZWN0KGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtKS50b0NvbnRhaW4oJ3RyYW5zbGF0ZVkoLTUwJSknKTtcbiAgICAgIGV4cGVjdChlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSkudG9Db250YWluKCd0cmFuc2xhdGVZKDE1cHgpJyk7XG4gICAgfSkpO1xuXG4gICAgaXQoJ3Nob3VsZCBkZWZhdWx0IHRoZSBlbGVtZW50IHRvIHBvc2l0aW9uOiBhYnNvbHV0ZScsIGZha2VBc3luY1Rlc3QoKCkgPT4ge1xuICAgICAgc3RyYXRlZ3kuYXBwbHkoZWxlbWVudCk7XG5cbiAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICBleHBlY3QoZWxlbWVudC5zdHlsZS5wb3NpdGlvbikudG9CZSgnYWJzb2x1dGUnKTtcbiAgICB9KSk7XG5cbiAgICBpdCgnc2hvdWxkIG1ha2UgdGhlIGVsZW1lbnQgcG9zaXRpb246IGZpeGVkJywgZmFrZUFzeW5jVGVzdCgoKSA9PiB7XG4gICAgICBzdHJhdGVneS5maXhlZCgpLmFwcGx5KGVsZW1lbnQpO1xuXG4gICAgICBmbHVzaE1pY3JvdGFza3MoKTtcblxuICAgICAgZXhwZWN0KGVsZW1lbnQuc3R5bGUucG9zaXRpb24pLnRvQmUoJ2ZpeGVkJyk7XG4gICAgfSkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmFrZUFzeW5jVGVzdChmbjogKCkgPT4gdm9pZCkge1xuICByZXR1cm4gaW5qZWN0KFtdLCBmYWtlQXN5bmMoZm4pKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
