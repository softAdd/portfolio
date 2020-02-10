import React from 'react'

import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { StoreProvider } from 'store'

import AppLayout from 'components/AppLayout'
import Header from 'components/Header'
import Navbar from 'components/Navbar'
import NavList from 'components/NavList'

import 'styles/index.sass'

const App = () => {
    return (
        <StoreProvider>
            <AppLayout light>
                <Header>
                    <Navbar>
                        <NavList
                            items={
                                [
                                    {
                                        id: '_home',
                                        title: 'Home',
                                        selected: true,
                                        action: () => console.log('home')
                                    },
                                    {
                                        id: '_contact',
                                        title: 'Contact',
                                        selected: false,
                                        action: () => console.log('contact')
                                    },
                                    {
                                        id: '_works',
                                        title: 'Works',
                                        selected: false,
                                        action: () => console.log('works')
                                    },
                                ]
                            }
                        />
                    </Navbar>
                </Header>
            </AppLayout>
        </StoreProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()