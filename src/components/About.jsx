import './About.css'

const stats = [
    { value: 'MERN', label: 'Full Stack' },
    { value: 'Claude API', label: 'AI Integration' },
    { value: '3', label: 'Projects Shipped' },
    { value: '1', label: 'Hackathon' },
]

export default function About() {
    return (
        <section className="section about" id="about">
            <div className="container about__inner">
                <div className="about__image-container">
                    <div className="about__image-stack">
                        <div className="about__image-bg" />
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=700&fit=crop"
                            alt="Developer workspace"
                            className="about__image"
                        />
                    </div>
                </div>
                <div className="about__content">
                    <span className="section-label">About Me</span>
                    <h2 className="section-heading">
                        Building & <span>Shipping</span>
                    </h2>
                    <p className="about__text">
                        I'm Deepesh Yadav, a Computer Science student at Amity University Rajasthan
                        with hands-on experience building full-stack web apps and integrating AI APIs
                        into real systems. I shipped MediTrack — a real-time hospital resource dashboard
                        — in 24 hours at THE WHACK HACKATHON 4.0 (IEEE Student Branch). I'm actively
                        building toward a Full Stack AI Developer profile combining MERN, Python, FastAPI,
                        and LLM integration.
                    </p>
                    <div className="about__divider" />
                    <div className="about__stats">
                        {stats.map((stat, i) => (
                            <div key={i} className="about__stat">
                                <span className="about__stat-value">{stat.value}</span>
                                <span className="about__stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
