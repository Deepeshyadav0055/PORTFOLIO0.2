import './Contact.css'

export default function Contact() {
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="contact__header">
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-heading">
                        Let's Work <span>Together</span>
                    </h2>
                    <p className="contact__subtitle">
                        Have a project in mind or just want to chat? Feel free to reach out.
                        I'm always open to discussing new opportunities.
                    </p>
                </div>

                <div className="contact__grid">
                    <div className="contact__info">
                        <div className="contact__info-card">
                            <h3 className="contact__info-title">Email</h3>
                            <a href="mailto:raoshabyadav2006@gmail.com" className="contact__info-value">
                                raoshabyadav2006@gmail.com
                            </a>
                        </div>
                        <div className="contact__info-card">
                            <h3 className="contact__info-title">Location</h3>
                            <p className="contact__info-value">Jaipur, Rajasthan, India</p>
                        </div>
                        <a href="/deepesh-resume.pdf" download className="contact__resume-btn">
                            Download Resume
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <form className="contact__form" onSubmit={e => e.preventDefault()}>
                        <div className="contact__field">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="contact__input"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="contact__field">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="contact__input"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div className="contact__field">
                            <label htmlFor="message" className="contact__label">Message</label>
                            <textarea
                                id="message"
                                className="contact__input contact__textarea"
                                placeholder="Your message..."
                                rows="5"
                            />
                        </div>
                        <button type="submit" className="contact__submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
