import { observable } from 'mobx'

class MenuStore {
    @observable items

    constructor() {
        this.items = [
            {
                title: 'Home',
                selected: false
            },
            {
                title: 'Works',
                selected: false
            },
            {
                title: 'Contact',
                selected: false
            }
        ]
    }
}

const menuStore = new MenuStore()

export default menuStore
export { MenuStore }