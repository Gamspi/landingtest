import Swiper, { Navigation, Pagination } from 'swiper'
class CardSwiper {
  // eslint-disable-next-line no-useless-constructor
  constructor (private block: any) {
  }

  init () {
    const swiperOpinion = new Swiper(this.block, {
      slidesPerView: 'auto',
      spaceBetween: 50,
      centeredSlides: false,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.j-swiper-button-next',
        prevEl: '.j-swiper-button-prev'
      }
    })
    swiperOpinion.enable()
  }
}
export default CardSwiper
