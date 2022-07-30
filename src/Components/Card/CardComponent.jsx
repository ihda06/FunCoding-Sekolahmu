import { BsStar, BsStarFill } from "react-icons/bs"
import "./CardComponent.css"

export function CardComponent({ title, author, rating }) {
    // const outlinestar = rating-5
    return (
        <>
            <div className="card shadow">
                <div className="card-image">
                    <img src="https://cdn.sekolah.mu/assets/living/living-english/paud-full.webp"
                        width="100%" alt="ini gambar" />
                </div>
                <div className="card-body px-2">
                    <div className="card-title">
                        {title}
                    </div>
                    <div className="card-subtitle">
                        Oleh <b>{author}</b>
                    </div>
                    <div className="card-text">
                        <div className="rating d-flex align-items-center">
                            {
                                [...Array(rating)].map(item => (
                                    <BsStarFill className="me-1" />
                                ))
                            }
                            {
                                [...Array(5-rating)].map(item => (
                                    <BsStar className="me-1" />
                                ))

                            }
                            {rating}(0)
                        </div>
                        <div className="button pt-2">
                            <p>
                                Gratis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}