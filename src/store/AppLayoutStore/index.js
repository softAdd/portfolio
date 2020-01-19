import { observable, action } from 'mobx'

class AppLayoutStore {
    @observable theme = 'light'

    @action.bound
    selectDefaultTheme() {
        this.theme = 'dark'
    }

    @action.bound
    selectDarkTheme() {
        this.theme = 'dark'
    }

    @action.bound
    selectLightTheme() {
        this.theme = 'light'
    }
}

const appLayoutStore = new AppLayoutStore()

export default appLayoutStore
export { AppLayoutStore }