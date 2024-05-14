import { Outlet } from "react-router-dom"
import { NavbarComponent } from '../NavbarComponent/NavbarComponent'
import { FooterComponent } from "../Footer/FooterComponent"


export const StructureComponent = () => {

    return(
        <>
            <NavbarComponent/>
            <Outlet/>
            <FooterComponent/>
        </>
    )
}