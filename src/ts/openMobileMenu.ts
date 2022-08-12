class openMobileMenu {
  private openBurger: HTMLElement
  private mobileMenu: HTMLElement
  // private mobileMenu: HTMLElement
  // private static burger: HTMLElement

  constructor () {
    this.openBurger = document.querySelector('.j-burger')!
    this.mobileMenu = document.querySelector('.j-mobile-menu')!
  }

  init () {
    this.openBurger.ontouchend = () => {
      document.body.style.overflow = 'hidden'
      this.mobileMenu.classList.add('_active')
    }

    document.querySelectorAll('.j-close-menu-btn')!.forEach(elem => {
      // @ts-ignore
      elem.ontouchend = () => {
        document.body.style.overflow = ''
        this.mobileMenu.classList.remove('_active')
      }
    })
  }
}

export default openMobileMenu
