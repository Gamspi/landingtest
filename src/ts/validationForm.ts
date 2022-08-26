class ValidationForm {
  private noValidArr: HTMLElement[]| undefined
  // eslint-disable-next-line no-useless-constructor
  constructor (private form: HTMLFormElement) {

  }

  init () {
    this.form.onsubmit = e => {
      e.preventDefault()
      this.noValidArr = Array.from(this.form.querySelectorAll('input')).filter(input => !input.validity.valid)
      if (this.noValidArr.length) {
        this.form.querySelectorAll('input').forEach(input => {
          if (input.validity.valid) {
            input.classList.remove('_error')
          } else {
            input.classList.add('_error')
            input.oninput = () => {
              if (input.validity.valid) {
                input.classList.remove('_error')
              }
            }
          }
        })
      } else {
        console.log('submit')
      }
    }
  }
}

export default ValidationForm
