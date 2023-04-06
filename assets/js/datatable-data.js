(function ($) {
    'use strict';
    $(document).ready(function () {
        $('#example').DataTable({
            //DataTable Options
        });
        $('#example-height').DataTable({
            scrollY:        '50vh',
            scrollCollapse: true,
            paging:         false
        });
        $('#example-multi').DataTable({
            //DataTable Options
            "ordering": false
        });
        $('#example-multi tbody').on( 'click', 'tr', function () {
            $(this).toggleClass('bg-gray-400');
        } );
    });

})(window.jQuery);
jQuery(document).ready(function(){
    jQuery('#tree-doted').live('click', function(event) {        
         jQuery('#icon-hover-box').toggle('show');
    });
});