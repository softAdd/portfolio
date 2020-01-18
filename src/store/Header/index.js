import { observable } from 'mobx'

class MenuStore {
    @observable items

    constructor() {
        this.items = [
            {
                id: 'home',
                title: 'Home',
                selected: false
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
}

const menuStore = new MenuStore()

export default menuStore
export { MenuStore }