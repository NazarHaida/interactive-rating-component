import './App.css'
import {useState} from "react";

function App() {
    const ratings = [1, 2, 3, 4, 5]
    const [selectedRating, setSelectedRating] = useState<number | null>(null)
    const [isRated, setIsRated] = useState<boolean>(false)
    return (
        <>
            {!isRated ? <section>
                    <div className="card">
                        <div className="star-wrapper">
                            <img
                                src={`${import.meta.env.BASE_URL}images/icon-star.svg`}
                                alt="star"
                            />                        </div>
                        <header className="card-header">
                            <h1 className="card-title">How did we do?</h1>
                            <p className="card-text">Please let us know how we did with your support request. All feedback
                                is appreciated
                                to help us improve our offering!</p>
                        </header>
                        <div className="card-ratings">
                            {ratings.map((rating) => (
                                <button onClick={() => setSelectedRating(rating)}
                                        className={`card-rating ${selectedRating === rating ? 'card-rating-selected' : ''}`}
                                        key={rating}>{rating}</button>
                            ))}
                        </div>
                        <button onClick={() => {
                            if (selectedRating) {
                                setIsRated(true)
                            }
                        }
                        } className="card-submit-button">Submit
                        </button>
                    </div>
                </section> :
                <section>
                    <div className="card thank-you-card">
                        <div className="card-img-wrapper">
                            <img
                                src={`${import.meta.env.BASE_URL}images/illustration-thank-you.svg`}
                                alt="thank you"
                            />
                        </div>
                        <div className="card-selected-chip">
                            You selected: {selectedRating} out of 5
                        </div>
                        <h1 className="card-title">Thank You!</h1>
                        <p className="card-subtitle">We appreciate you taking the time to give a rating. If you ever need more support,
                            don’t hesitate to get in touch!</p>
                    </div>
                </section>}
        </>
    )
}

export default App
