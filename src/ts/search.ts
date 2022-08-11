class Search {
  private form: HTMLElement
  private btn: HTMLElement
  private input: HTMLElement
  private main: HTMLElement

  constructor () {
    this.form = document.querySelector('.search')!
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
        this.input.value = ''
        document.body.onclick = null
      } else {
        this.form.classList.add('_focus')
        document.body.onclick = e => {
          if (!e.target.closest('.search')) {
            this.form.classList.remove('_focus')
          }
        }
      }
    }
  }
}

export default Search
