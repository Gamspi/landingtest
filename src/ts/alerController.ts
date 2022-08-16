class AlertController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private container: HTMLElement) {
  }

  init () {
    this.container.querySelectorAll('.j-close-alert-btn').forEach(elem => {
      // @ts-ignore
      elem.onclick = () => {
      //   this.container.style.opacity = '0'
      //   setTimeout(() => {
      //     this.container.classList.remove('_active')
      //   }, 300)
        this.container.classList.remove('_active')
      }
    })
  }
}

export default AlertController
