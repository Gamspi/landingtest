class DropdownMenu {
  private btn: HTMLElement
  private menu: HTMLElement
  private prevBtn: HTMLElement

  constructor (private DBContainer: HTMLElement) {
    this.btn = this.DBContainer.querySelector('.j-button-dropdown')!
    this.menu = document.querySelector('.j-list-menu')!
    this.prevBtn = DBContainer.querySelector('.j-prev-btn')!
  }

  init () {
    if (this.btn) {
      this.prevBtn.onclick = () => {
        this.DBContainer.classList.remove('_open')
        this.menu.classList.remove('_open')
      }
      this.btn.onclick = () => {
        this.DBContainer.classList.add('_open')
        this.menu.classList.add('_open')
      }
    }
  }
}

export default DropdownMenu
