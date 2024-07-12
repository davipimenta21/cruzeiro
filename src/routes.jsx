import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Elenco from './pages/Elenco'
import Musica from './pages/Musica'
import Page404 from './pages/Page404'
import PageBase from './pages/PaginaBase'

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/sobre" element={<Sobre />}></Route>
                    <Route path="/elenco" element={<Elenco />}></Route>
                    <Route path="/musicas" element={<Musica />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
