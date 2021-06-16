import React from 'react'

export const Footer = () => {

    let footerStyle = {
        position: "absolute",
        top: "100vh",
        width: "100%"
    }


    return (
        <footer className="bg-dark text-light py-2" 
        style= {footerStyle}>

            <p className="text-center">
                Copyright &copy; akash-zredi
            </p>
        </footer>
    )
}
    