import Swiper, { Navigation, Pagination } from 'swiper'

class PaginationSwiper {
  // eslint-disable-next-line no-useless-constructor
  constructor (private block: any) {
  }

  init () {
    const swiperOpinion = new Swiper(this.block, {
      observer: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      centeredSlides: false,
      modules: [Navigation, Pagination],
      pagination: {
        clickable: true,
        el: '#' + this.block.children[1].id
      },

      navigation: {
        // nextEl: '.j-swiper-button-next',
        // prevEl: '.j-swiper-button-prev'
      }
    })
    swiperOpinion.enable()
  }
}

export default PaginationSwiper
