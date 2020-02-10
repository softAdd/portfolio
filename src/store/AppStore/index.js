import { observable, action, computed } from 'mobx'

class AppStore {
    @observable items

    constructor() {
        this.items = [
            {
                id: 'home',
                title: 'Home',
                selected: true
            },
            {
                id: 'works',
                title: 'Works',
                selected: false
            },
            {
                id: 'contact',
                title: 'About Me',
                selected: false
            }
        ]
    }

    @action.bound
    selectPage(id) {
        this.items = this.items.map(item => {
            item.id === id ? item.selected = true : item.selected = false
            return item
        })
    }

    @computed
    get selectedItem() {
        const selected = this.items.find(item => item.selected === true)
        return selected ? selected : this.items[1]
    }
}

const appStore = new AppStore()

export default appStore
export { AppStore }