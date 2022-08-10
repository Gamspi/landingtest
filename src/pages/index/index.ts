import './index.scss'
import ListSliderOpacity from '../../ts/listSliderOpacity'
import Resize from '../../ts/resizer'

class Index {
  constructor () {
    this.init()
  }

  init () {
    Resize.init()
    document.querySelectorAll('.j-slider-opacity-container')
      .forEach(block => {
        const Container = new ListSliderOpacity(block as HTMLElement)
        Container.init()
      })
  }
}

new Index() // eslint-disable-line
