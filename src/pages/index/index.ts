import './index.scss'
import ListSliderOpacity from '../../ts/listSliderOpacity'

class Index {
  constructor () {
    this.init()
  }

  init () {
    document.querySelectorAll('.j-slider-opacity-container')
      .forEach(block => {
        const Container = new ListSliderOpacity(block as HTMLElement)
        Container.init()
      })
  }
}

new Index() // eslint-disable-line
