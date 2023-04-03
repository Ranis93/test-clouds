export function sliderOn(context) {
  const o2 = $('#owl-carousel2')
  const o2settings = {
    items: 1,
    singleItem: true,
    loop: false,
    margin: 0,
    // dots:false,
    pagination: false,
    nav: true,
    navText: ['', ''],
    touchDrag: true,
    slideBy: 1,
    mouseDrag: true
  }
  o2.owlCarousel(o2settings)
  const o1 = $('#owl-carousel1')
  o1.owlCarousel({
    items: 1,
    singleItem: true,
    loop: false,
    margin: 0,
    // dots:false,
    pagination: false,
    nav: true,
    navText: ['', ''],
    touchDrag: true,
    slideBy: 1,
    mouseDrag: true
  })

  o1.on('translate.owl.carousel', function (e) {
    o2.trigger('to.owl.carousel', e.page.index * o2settings.slideBy)
    context.currentSlideNum = e.item.index + 1
  })
}