import { Row, Col } from "react-bootstrap";
import { CardComponent } from "../../Components/Card/CardComponent";
import { NavBar } from "../../Components/NavBar/NavBar";

export function LandingPages() {
    return (
        <>
            <NavBar></NavBar>
            <section className="main-content">
                <div className="container">
                    <div className="title text-center py-5">
                        Pilih kursusmu!
                    </div>
                    <Row className="g-3" >
                        {
                            [...Array(12)].map((item) => (
                                <Col lg={2} md={4} >
                                    <CardComponent title="Living English PAUD (Metode Pembayaran Penuh)" author="Sekolah.Mu" rating={5} />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </section>
        </>
    )

}