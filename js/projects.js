var filterFns = { /* set filters */ };
      
function getHashFilter() {
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent( hashFilter );
}

var $grid = $('.grid');

var $filterButtonGroup = $('.project-categories');
$filterButtonGroup.on( 'click', 'a', function(event) {
  var filterAttr = $(this).attr('data-filter');
  event.preventDefault();
  location.hash = 'filter=' + encodeURIComponent( filterAttr );
});

var isIsotopeInit = false;

function onHashchange() {
  var hashFilter = getHashFilter();
  if ( !hashFilter && isIsotopeInit ) {
    return;
  }
  isIsotopeInit = true;
  // filter isotope
  $grid.isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    animationEngine: 'best-available',
    filter: hashFilter,
    sortBy: 'alpha',
    getSortData: {
      alpha: '[data-alpha]'
    }
  });
  if ( hashFilter ) {
    $filterButtonGroup.find('.active').removeClass('active');
    $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass('active');
  }
};

$(window).on( 'hashchange', onHashchange );
onHashchange();