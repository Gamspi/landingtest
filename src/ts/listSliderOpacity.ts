class ListSliderOpacity {
  // eslint-disable-next-line no-undef
  readonly cards: NodeListOf<HTMLElement> | undefined
  private list: HTMLElement
  private paginationPanel: HTMLElement
  // eslint-disable-next-line no-undef
  private paginationButtons: NodeListOf<HTMLElement> | undefined
  private position: number = 0
  private activeButton = 0
  readonly itemsCount: number

  constructor (private container: HTMLElement) {
    this.list = container.querySelector('.j-list-opacity') as HTMLElement
    this.cards = this.list.querySelectorAll('.j-slid')
    this.paginationPanel = container.querySelector('.j-pagination-panel') as HTMLElement
    this.itemsCount = this.list.childElementCount
  }

  private visibilityController () {
    this.cards!.forEach(card => {
      if (card.style.display !== 'none') {
        card.style.opacity = '0'
        card.style.display = 'none'
      }
    })
    this.cards![this.position].style.display = 'flex'
    setTimeout(_ => {
      this.cards![this.position].style.opacity = '1'
    }, 20)
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
        console.log(i)
        this.activeButton = i
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
        this.cards![i].classList.add('_active')
        this.paginationButtons![i].classList.add('_active')
      }
    })
  }
}

export default ListSliderOpacity
