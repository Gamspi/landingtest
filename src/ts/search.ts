class Search {
  private btn: HTMLElement
  private input: HTMLElement
  private main: HTMLElement

  constructor (private form: HTMLElement) {
    this.btn = document.querySelector('.j-search-btn')!
    this.input = document.querySelector('.j-search-input')!
    this.main = document.querySelector('main')!
  }

  init () {
    this.form.onsubmit = e => {
      e.preventDefault()
      if (this.form.classList.contains('_focus')) {
        this.form.classList.remove('_focus')
        console.log('searching...')
        // @ts-ignore
        this.input.value = ''
        document.body.onclick = null
      } else {
        this.form.classList.add('_focus')
        document.body.onclick = e => {
          // @ts-ignore
          if (!e.target.closest('.j-search')) {
            this.form.classList.remove('_focus')
          }
        }
      }
    }
  }
}

export default Search
