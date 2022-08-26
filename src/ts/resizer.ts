class Resize {
  private static activePage: number = 0
  private static setionsCount: number
  private static main: HTMLElement
  private static header: any
  private static logoColorful: HTMLElement
  private static logoMono: HTMLElement
  private static arrowBtn: HTMLElement
  private static sections: HTMLCollection
  private static pagination: Element
  // eslint-disable-next-line no-undef
  private static paginationButtons: NodeListOf<HTMLElement>
  // eslint-disable-next-line no-useless-constructor
  constructor () {
  }

  private static changeActivePagination () {
    this.pagination.children[1].innerHTML = `${this.activePage + 1}/${this.setionsCount}`
    this.paginationButtons!.forEach(b => {
      if (b.classList.contains('_active')) {
        b.classList.remove('_active')
      }
    }
    )
    this.paginationButtons![this.activePage].classList.add('_active')
  }

  static init () {
    this.header = document.querySelector('.header')
    this.arrowBtn = document.querySelector('.j-arrow-down')!
    this.logoMono = document.querySelector('.logo--mono')!
    this.logoColorful = document.querySelector('.logo--colorful')!
    this.pagination = document.querySelector('.j-page-pagination')!
    this.setionsCount = document.querySelector('main')!.childElementCount
    this.sections = document.querySelector('main')!.children
    this.main = document.querySelector('main')!
    for (let i = 0; i < this.setionsCount; i++) {
      const newPaginationItem = document.createElement('button')
      newPaginationItem.classList.add('page-pagination__item')
      if (i === this.activePage) {
        newPaginationItem.classList.add('_active')
      }
      this.pagination.children[0].append(newPaginationItem)
    }
    this.pagination.children[1].innerHTML = `${this.activePage + 1}/${this.setionsCount}`
    this.paginationButtons = this.pagination.querySelectorAll('.page-pagination__item')
    this.paginationButtons!.forEach((btn, i) => {
      btn.onclick = () => {
        this.activePage = i
        this.main.style.marginTop = `-${this.activePage * 100}vh`
        this.changeActivePagination()
      }
    })
    document.addEventListener('DOMContentLoaded', () => {
      const resizer = new ResizeObserver(_ => {
        if (document.body.offsetWidth >= 1024) {
          this.arrowBtn.onclick = () => {
            if (this.setionsCount > (this.activePage + 1)) {
              this.activePage += 1
              this.main.style.marginTop = `-${this.activePage * 100}vh`
            }
          }
          window.scrollTo(0, 0)
          this.main.style.overflow = 'hidden'
          this.main.onwheel = e => {
            if (e.deltaY > 0) {
              if (this.setionsCount > (this.activePage + 1)) {
                this.activePage += 1
              }
            } else if (this.activePage) {
              this.activePage -= 1
            }
            this.main.style.marginTop = `-${this.activePage * 100}vh`

            this.changeActivePagination()
          }
          if (parseInt(this.main.style.marginTop) < 0 && !(this.setionsCount === (this.activePage + 1))) {
            this.header.classList.add('header--black-text')
            this.logoMono!.style.display = 'none'
            this.logoColorful!.style.display = 'block'
            this.arrowBtn?.classList.add('arrow-down--white')
            this.pagination.classList.add('_dark')
          } else {
            this.arrowBtn?.classList.remove('arrow-down--white')
            this.pagination.classList.remove('_dark')

            this.header.classList.remove('header--black-text')
            this.logoMono.style.display = 'block'
            this.logoColorful!.style.display = 'none'
          }
          if (this.setionsCount > (this.activePage + 1)) {
            this.arrowBtn.style.visibility = 'visible'
            this.arrowBtn.style.opacity = '1'
            // @ts-ignore
            this.arrowBtn.firstElementChild!.disabled = false
          } else {
            this.arrowBtn.style.opacity = '0'
            this.arrowBtn.style.visibility = 'hidden'
            // @ts-ignore
            this.arrowBtn.firstElementChild!.disabled = true
          }
          if (!this.sections[this.activePage].classList.contains('_active')) {
            for (let i = 0; i < this.sections.length; i++) {
              this.sections[i].classList.remove('_active')
            }
            this.sections[this.activePage].classList.add('_active')
          }
        } else {
          this.main.style.overflow = 'hidden'
          this.main.style.marginTop = '0'
          this.main.onwheel = null
          this.logoMono!.style.display = 'block'
          this.logoColorful!.style.display = 'none'
          if (this.header.classList.contains('header--black-text')) {
            this.header.classList.remove('header--black-text')
          }
        }
      })
      resizer.observe(document.body)
    })
  }
}

export default Resize
