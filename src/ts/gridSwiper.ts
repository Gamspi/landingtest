import Swiper, { Pagination, Grid } from 'swiper'

class GridSwiper {
  // eslint-disable-next-line no-useless-constructor
  constructor (private block: any) {
  }

  init () {
    const swiperOpinion = new Swiper(this.block, {
      observer: true,
      slidesPerView: 1,
      spaceBetween: 0,
      modules: [Pagination, Grid],
      grid: {
        rows: 3
      },
      pagination: {
        clickable: true,
        el: '#' + this.block.children[1].id
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          enabled: false
        }
      }
    })
    swiperOpinion.enable()
  }
}

export default GridSwiper
