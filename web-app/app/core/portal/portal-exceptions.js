System.register(['angular2/src/facade/exceptions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exceptions_1;
    var MdComponentPortalAttachedToDomWithoutOriginException, MdNullPortalException, MdPortalAlreadyAttachedException, MdPortalHostAlreadyDisposedException, MdUnknownPortalTypeException, MdNullPortalHostException, MdNoPortalAttachedException;
    return {
        setters:[
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            }],
        execute: function() {
            /** Exception thrown when a ComponentPortal is attached to a DomPortalHost without an origin. */
            class MdComponentPortalAttachedToDomWithoutOriginException extends exceptions_1.BaseException {
                constructor() {
                    super('A ComponentPortal must have an origin set when attached to a DomPortalHost ' +
                        'because the DOM element is not part of the Angular application context.');
                }
            }
            exports_1("MdComponentPortalAttachedToDomWithoutOriginException", MdComponentPortalAttachedToDomWithoutOriginException);
            /** Exception thrown when attmepting to attach a null portal to a host. */
            class MdNullPortalException extends exceptions_1.BaseException {
                constructor() {
                    super('Must provide a portal to attach');
                }
            }
            exports_1("MdNullPortalException", MdNullPortalException);
            /** Exception thrown when attmepting to attach a portal to a host that is already attached. */
            class MdPortalAlreadyAttachedException extends exceptions_1.BaseException {
                constructor() {
                    super('Host already has a portal attached');
                }
            }
            exports_1("MdPortalAlreadyAttachedException", MdPortalAlreadyAttachedException);
            /** Exception thrown when attmepting to attach a portal to an already-disposed host. */
            class MdPortalHostAlreadyDisposedException extends exceptions_1.BaseException {
                constructor() {
                    super('This PortalHost has already been disposed');
                }
            }
            exports_1("MdPortalHostAlreadyDisposedException", MdPortalHostAlreadyDisposedException);
            /** Exception thrown when attmepting to attach an unknown portal type. */
            class MdUnknownPortalTypeException extends exceptions_1.BaseException {
                constructor() {
                    super('Attempting to attach an unknown Portal type. ' +
                        'BasePortalHost accepts either a ComponentPortal or a TemplatePortal.');
                }
            }
            exports_1("MdUnknownPortalTypeException", MdUnknownPortalTypeException);
            /** Exception thrown when attmepting to attach a portal to a null host. */
            class MdNullPortalHostException extends exceptions_1.BaseException {
                constructor() {
                    super('Attmepting to attach a portal to a null PortalHost');
                }
            }
            exports_1("MdNullPortalHostException", MdNullPortalHostException);
            /** Exception thrown when attmepting to detach a portal that is not attached. */
            class MdNoPortalAttachedException extends exceptions_1.BaseException {
                constructor() {
                    super('Attmepting to detach a portal that is not attached to a host');
                }
            }
            exports_1("MdNoPortalAttachedException", MdNoPortalAttachedException);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvcG9ydGFsL3BvcnRhbC1leGNlcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBR0EsZ0dBQWdHO1lBQ2hHLG1FQUEwRSwwQkFBYTtnQkFDckY7b0JBQ0ksTUFDSSw2RUFBNkU7d0JBQzdFLHlFQUF5RSxDQUFDLENBQUM7Z0JBQ25GLENBQUM7WUFDSCxDQUFDO1lBTkQsdUhBTUMsQ0FBQTtZQUVELDBFQUEwRTtZQUMxRSxvQ0FBMkMsMEJBQWE7Z0JBQ3REO29CQUNJLE1BQU0saUNBQWlDLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztZQUNILENBQUM7WUFKRCx5REFJQyxDQUFBO1lBRUQsOEZBQThGO1lBQzlGLCtDQUFzRCwwQkFBYTtnQkFDakU7b0JBQ0ksTUFBTSxvQ0FBb0MsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO1lBQ0gsQ0FBQztZQUpELCtFQUlDLENBQUE7WUFFRCx1RkFBdUY7WUFDdkYsbURBQTBELDBCQUFhO2dCQUNyRTtvQkFDSSxNQUFNLDJDQUEyQyxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7WUFDSCxDQUFDO1lBSkQsdUZBSUMsQ0FBQTtZQUVELHlFQUF5RTtZQUN6RSwyQ0FBa0QsMEJBQWE7Z0JBQzdEO29CQUNJLE1BQ0UsK0NBQStDO3dCQUMvQyxzRUFBc0UsQ0FBQyxDQUFDO2dCQUM5RSxDQUFDO1lBQ0gsQ0FBQztZQU5ELHVFQU1DLENBQUE7WUFFRCwwRUFBMEU7WUFDMUUsd0NBQStDLDBCQUFhO2dCQUMxRDtvQkFDSSxNQUFNLG9EQUFvRCxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7WUFDSCxDQUFDO1lBSkQsaUVBSUMsQ0FBQTtZQUVELGdGQUFnRjtZQUNoRiwwQ0FBaUQsMEJBQWE7Z0JBQzVEO29CQUNJLE1BQU0sOERBQThELENBQUMsQ0FBQztnQkFDMUUsQ0FBQztZQUNILENBQUM7WUFKRCxxRUFJQyxDQUFBIiwiZmlsZSI6ImNvcmUvcG9ydGFsL3BvcnRhbC1leGNlcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuXG5cbi8qKiBFeGNlcHRpb24gdGhyb3duIHdoZW4gYSBDb21wb25lbnRQb3J0YWwgaXMgYXR0YWNoZWQgdG8gYSBEb21Qb3J0YWxIb3N0IHdpdGhvdXQgYW4gb3JpZ2luLiAqL1xuZXhwb3J0IGNsYXNzIE1kQ29tcG9uZW50UG9ydGFsQXR0YWNoZWRUb0RvbVdpdGhvdXRPcmlnaW5FeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcihcbiAgICAgICAgICAnQSBDb21wb25lbnRQb3J0YWwgbXVzdCBoYXZlIGFuIG9yaWdpbiBzZXQgd2hlbiBhdHRhY2hlZCB0byBhIERvbVBvcnRhbEhvc3QgJyArXG4gICAgICAgICAgJ2JlY2F1c2UgdGhlIERPTSBlbGVtZW50IGlzIG5vdCBwYXJ0IG9mIHRoZSBBbmd1bGFyIGFwcGxpY2F0aW9uIGNvbnRleHQuJyk7XG4gIH1cbn1cblxuLyoqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhdHRtZXB0aW5nIHRvIGF0dGFjaCBhIG51bGwgcG9ydGFsIHRvIGEgaG9zdC4gKi9cbmV4cG9ydCBjbGFzcyBNZE51bGxQb3J0YWxFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcignTXVzdCBwcm92aWRlIGEgcG9ydGFsIHRvIGF0dGFjaCcpO1xuICB9XG59XG5cbi8qKiBFeGNlcHRpb24gdGhyb3duIHdoZW4gYXR0bWVwdGluZyB0byBhdHRhY2ggYSBwb3J0YWwgdG8gYSBob3N0IHRoYXQgaXMgYWxyZWFkeSBhdHRhY2hlZC4gKi9cbmV4cG9ydCBjbGFzcyBNZFBvcnRhbEFscmVhZHlBdHRhY2hlZEV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCdIb3N0IGFscmVhZHkgaGFzIGEgcG9ydGFsIGF0dGFjaGVkJyk7XG4gIH1cbn1cblxuLyoqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhdHRtZXB0aW5nIHRvIGF0dGFjaCBhIHBvcnRhbCB0byBhbiBhbHJlYWR5LWRpc3Bvc2VkIGhvc3QuICovXG5leHBvcnQgY2xhc3MgTWRQb3J0YWxIb3N0QWxyZWFkeURpc3Bvc2VkRXhjZXB0aW9uIGV4dGVuZHMgQmFzZUV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoJ1RoaXMgUG9ydGFsSG9zdCBoYXMgYWxyZWFkeSBiZWVuIGRpc3Bvc2VkJyk7XG4gIH1cbn1cblxuLyoqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhdHRtZXB0aW5nIHRvIGF0dGFjaCBhbiB1bmtub3duIHBvcnRhbCB0eXBlLiAqL1xuZXhwb3J0IGNsYXNzIE1kVW5rbm93blBvcnRhbFR5cGVFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcihcbiAgICAgICAgJ0F0dGVtcHRpbmcgdG8gYXR0YWNoIGFuIHVua25vd24gUG9ydGFsIHR5cGUuICcgK1xuICAgICAgICAnQmFzZVBvcnRhbEhvc3QgYWNjZXB0cyBlaXRoZXIgYSBDb21wb25lbnRQb3J0YWwgb3IgYSBUZW1wbGF0ZVBvcnRhbC4nKTtcbiAgfVxufVxuXG4vKiogRXhjZXB0aW9uIHRocm93biB3aGVuIGF0dG1lcHRpbmcgdG8gYXR0YWNoIGEgcG9ydGFsIHRvIGEgbnVsbCBob3N0LiAqL1xuZXhwb3J0IGNsYXNzIE1kTnVsbFBvcnRhbEhvc3RFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcignQXR0bWVwdGluZyB0byBhdHRhY2ggYSBwb3J0YWwgdG8gYSBudWxsIFBvcnRhbEhvc3QnKTtcbiAgfVxufVxuXG4vKiogRXhjZXB0aW9uIHRocm93biB3aGVuIGF0dG1lcHRpbmcgdG8gZGV0YWNoIGEgcG9ydGFsIHRoYXQgaXMgbm90IGF0dGFjaGVkLiAqL1xuZXhwb3J0IGNsYXNzIE1kTm9Qb3J0YWxBdHRhY2hlZEV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCdBdHRtZXB0aW5nIHRvIGRldGFjaCBhIHBvcnRhbCB0aGF0IGlzIG5vdCBhdHRhY2hlZCB0byBhIGhvc3QnKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
