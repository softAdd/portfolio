import { observable, action } from 'mobx'

class MenuStore {
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
                title: 'Contact',
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
}

const menuStore = new MenuStore()

export default menuStore
export { MenuStore }