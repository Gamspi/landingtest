import './index.scss'
import AlertController from '../../ts/alerController'
import DropdownMenu from '../../ts/dropdownMenu'
import GridSwiper from '../../ts/gridSwiper'
import ListSliderOpacity from '../../ts/listSliderOpacity'
import OpenMobileMenu from '../../ts/openMobileMenu'
import PaginationSwiper from '../../ts/paginationSwiper'
import Questionnaire from '../../ts/questionnaire'
import Resize from '../../ts/resizer'
import Search from '../../ts/search'
import CardSwiper from '../../ts/Swiper'
import ValidationForm from '../../ts/validationForm'

class Index {
  constructor () {
    this.init()
  }

  init () {
    const openMobileMenu = new OpenMobileMenu()
    const questionnaire = new Questionnaire()
    questionnaire.init()
    openMobileMenu.init()
    Resize.init()
    document.querySelectorAll('.j-alert')
      .forEach(block => {
        const Container = new AlertController(block as HTMLElement)
        Container.init()
      })
    document.querySelectorAll('.j-search')
      .forEach(block => {
        const Container = new Search(block as HTMLElement)
        Container.init()
      })
    document.querySelectorAll('.j-slider-opacity-container')
      .forEach(block => {
        const Container = new ListSliderOpacity(block as HTMLElement)
        Container.init()
      })
    document.querySelectorAll('.j-swiper')
      .forEach(element => {
        const Container = new CardSwiper(element as HTMLElement)
        Container.init()
      })
    document.querySelectorAll('.j-pagination-swiper')
      .forEach(block => {
        const Container = new PaginationSwiper(block as HTMLElement)
        Container.init()
      })
    document.querySelectorAll('.j-grid-swiper')
      .forEach(block => {
        const Container = new GridSwiper(block as HTMLElement)

        Container.init()
      })
    document.querySelectorAll('.j-dropdown')
      .forEach(block => {
        const Container = new DropdownMenu(block as HTMLElement)
        Container.init()
      })
    document.querySelectorAll('form')
      .forEach(form => {
        const Container = new ValidationForm(form as HTMLFormElement)
        Container.init()
      })
  }
}

new Index() // eslint-disable-line
