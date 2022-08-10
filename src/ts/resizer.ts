class Resize {
  private static activePage: number = 0
  private static setionsCount: number
  private static main: HTMLElement
  private static header: any
  private static logoColorful: HTMLElement
  private static logoMono: HTMLElement
  private static arrowBtn: HTMLElement

  // eslint-disable-next-line no-useless-constructor
  constructor () {
  }

  static init () {
    this.header = document.querySelector('.header')
    this.arrowBtn = document.querySelector('.arrow-down')!
    this.logoMono = document.querySelector('.logo--mono')!
    this.logoColorful = document.querySelector('.logo--colorful')!
    document.addEventListener('DOMContentLoaded', () => {
      this.setionsCount = document.querySelector('main')!.childElementCount
      this.main = document.querySelector('main')!
      const resizer = new ResizeObserver(_ => {
        if (document.body.offsetWidth >= 1024) {
          this.arrowBtn.onclick = () => {
            if (this.setionsCount > (this.activePage + 2)) {
              this.activePage += 1
              this.main.style.marginTop = `-${this.activePage * 100}vh`
            }
          }
          window.scrollTo(0, 0)
          this.main.style.overflow = 'hidden'
          this.main.onwheel = e => {
            if (e.deltaY > 0) {
              if (this.setionsCount > (this.activePage + 2)) {
                this.activePage += 1
                this.main.style.marginTop = `-${this.activePage * 100}vh`
              }
            } else if (this.activePage) {
              this.activePage -= 1
              this.main.style.marginTop = `-${this.activePage * 100}vh`
            }
          }
          if (parseInt(this.main.style.marginTop) < 0) {
            this.header.classList.add('header--black-text')
            this.logoMono!.style.display = 'none'
            this.logoColorful!.style.display = 'block'
            this.arrowBtn?.classList.add('arrow-down--white')
          } else {
            this.arrowBtn?.classList.remove('arrow-down--white')

            this.header.classList.remove('header--black-text')
            this.logoMono.style.display = 'block'
            this.logoColorful!.style.display = 'none'
          }
          if (this.setionsCount > (this.activePage + 2)) {
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
        } else {
          this.main.style.overflow = 'auto'
          this.main.style.marginTop = '0'
          this.main.onwheel = null
          this.logoMono!.style.display = 'none'
          this.logoColorful!.style.display = 'block'
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
