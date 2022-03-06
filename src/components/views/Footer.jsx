import '../../index.css'
import { GithubIcon } from '../icon/GithubIcon'
import LinkedInIcon from '../icon/LinkedInIcon'
const Footer = () => {
    return (
        <>
            <footer className="footer container-fluid mt-50 bg-dark">
                <div className="row mb-3">
                    <div className="col-12 text-center text-white">
                        <h3 className="footer__texto">Mis <b>Redes:</b></h3>
                            <div className="redes__sociales">
                                <a href="https://www.linkedin.com/in/edwingrow16/" target="_blank"> <LinkedInIcon/></a>
                                <a href="https://github.com/edwingrow" target="_blank"> <GithubIcon/></a>
                            </div>
                    </div>
                </div>
                <div className="footer-final row text-center">
                    <h4 className="text-white">© Developer Edwin García 2022</h4>
                </div>
            </footer>
        </>
    )
}

export default Footer
