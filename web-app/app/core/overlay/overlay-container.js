System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Create the overlay container element, which is simply a div
     * with the 'md-overlay-container' class on the document body.
     */
    function createOverlayContainer() {
        let container = document.createElement('div');
        container.classList.add('md-overlay-container');
        document.body.appendChild(container);
        return container;
    }
    exports_1("createOverlayContainer", createOverlayContainer);
    return {
        setters:[],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9vdmVybGF5LWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTs7O09BR0c7SUFDSDtRQUNFLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFMRCwyREFLQyxDQUFBIiwiZmlsZSI6ImNvcmUvb3ZlcmxheS9vdmVybGF5LWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKipcbiAqIENyZWF0ZSB0aGUgb3ZlcmxheSBjb250YWluZXIgZWxlbWVudCwgd2hpY2ggaXMgc2ltcGx5IGEgZGl2XG4gKiB3aXRoIHRoZSAnbWQtb3ZlcmxheS1jb250YWluZXInIGNsYXNzIG9uIHRoZSBkb2N1bWVudCBib2R5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3ZlcmxheUNvbnRhaW5lcigpOiBFbGVtZW50IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWQtb3ZlcmxheS1jb250YWluZXInKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
