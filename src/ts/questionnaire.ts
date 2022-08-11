class Questionnaire {
  private container: HTMLElement
  private openBtn: HTMLElement
  private closeBtn: HTMLElement

  constructor () {
    this.container = document.querySelector('.j-questionnaire')!
    this.openBtn = document.querySelector('.j-questionnaire-open-btn')!
    this.closeBtn = document.querySelector('.j-questionnaire-close-btn')!
  }

  init () {
    this.closeBtn.onclick = () => {
      this.container.classList.remove('_show')
      document.body.style.overflow = ''
      setTimeout(() => {
        this.container.style.bottom = '-100%'
      }, 300)
    }
    this.openBtn.onclick = () => {
      this.container.classList.add('_show')
      this.container.style.bottom = '0'
      document.body.style.overflow = 'hidden'
    }
  }
}

export default Questionnaire
