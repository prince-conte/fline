// Video (Youtube, Vimeo)
function contentVideoResponsive() {
    $(document)
        .find('.typography iframe[src*="vimeo"], .js-content iframe[src*="youtube"]')
        .each(function() {
            $(this).wrap('<div class="typography__video"/>');
        });
}

$(window)
    .load(function() {
        contentVideoResponsive(); 
    })
    .smartresize(function() {
        contentVideoResponsive(); 
    });