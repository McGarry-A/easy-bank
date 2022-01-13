import "./Features.css"
import Feature from "../Feature/Feature.js"
const Features = () => {
    return <section className="features-section">
        <div className="features-header">
            <h2>Why Choose Easybank?</h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        <div className="feature-container">
            <Feature />
        </div>
    </section>
}

export default Features