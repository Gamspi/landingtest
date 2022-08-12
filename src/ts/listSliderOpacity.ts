class ListSliderOpacity {
  // eslint-disable-next-line no-undef
  readonly cards: NodeListOf<HTMLElement> | undefined
  private list: HTMLElement
  private paginationPanel: HTMLElement
  // eslint-disable-next-line no-undef
  private paginationButtons: NodeListOf<HTMLElement> | undefined
  private activeButton = 0
  private time = 3000
  readonly itemsCount: number
  private timeout: any

  constructor (private container: HTMLElement) {
    this.list = container.querySelector('.j-list-opacity') as HTMLElement
    this.cards = this.list.querySelectorAll('.j-slid')
    this.paginationPanel = container.querySelector('.j-pagination-panel') as HTMLElement
    this.itemsCount = this.list.childElementCount
  }

  private handelChangeActiveCard () {
    this.paginationButtons!.forEach(b => {
      if (b.classList.contains('_active')) {
        b.classList.remove('_active')
      }
    }
    )
    this.cards!.forEach(b => {
      if (b.classList.contains('_active')) {
        b.classList.remove('_active')
      }
    }
    )
    this.cards![this.activeButton].classList.add('_active')
    this.paginationButtons![this.activeButton].classList.add('_active')
  }

  autoChang () {
    this.timeout = setTimeout(() => {
      if (this.cards!.length - 1 > this.activeButton) {
        this.activeButton += 1
      } else {
        this.activeButton = 0
      }
      this.handelChangeActiveCard()
      this.autoChang()
    }, this.time)
  }

  init () {
    for (let i = 0; i < this.itemsCount; i++) {
      const newPaginationItem = document.createElement('button')
      newPaginationItem.classList.add('main-pagination__item')
      if (i === this.activeButton) {
        newPaginationItem.classList.add('_active')
      }
      this.paginationPanel.append(newPaginationItem)
    }
    this.paginationButtons = this.container.querySelectorAll('.main-pagination__item')
    this.paginationButtons!.forEach((btn, i) => {
      btn.onclick = () => {
        this.activeButton = i
        this.handelChangeActiveCard()
        window.clearTimeout(this.timeout)
        this.autoChang()
      }
    })
    this.autoChang()
  }
}

export default ListSliderOpacity
