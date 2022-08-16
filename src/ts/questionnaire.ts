class Questionnaire {
  private container: HTMLElement
  private openBtn: HTMLElement
  private closeBtn: HTMLElement
  private form: HTMLFormElement
  private alert: HTMLFormElement

  constructor () {
    this.container = document.querySelector('.j-questionnaire')!
    this.alert = document.querySelector('.j-alert-subscription')!
    this.openBtn = document.querySelector('.j-questionnaire-open-btn')!
    this.closeBtn = document.querySelector('.j-questionnaire-close-btn')!
    this.form = this.container.querySelector('form')!
  }

  close () {
    this.container.classList.remove('_show')
    setTimeout(() => {
      this.container.style.bottom = '-100%'
    }, 300)
  }

  init () {
    this.form.onsubmit = e => {
      console.log('...submit')
      e.preventDefault()
      this.container.style.opacity = '0'
      this.close()
      this.alert.classList.add('_active')
    }
    this.closeBtn.onclick = () => {
      this.close()
    }
    this.openBtn.onclick = () => {
      this.container.classList.add('_show')
      this.container.style.bottom = '0'
    }
  }
}

export default Questionnaire
