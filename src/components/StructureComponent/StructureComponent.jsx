import { Outlet } from "react-router-dom"
import { NavbarComponent } from '../NavbarComponent/NavbarComponent'
import { FooterComponent } from "../FooterComponent/FooterComponent"


export const StructureComponent = () => {

    return(
        <>
            <NavbarComponent/>
            <Outlet/>
            <FooterComponent/>
        </>
    )
}