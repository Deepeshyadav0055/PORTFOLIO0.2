import './Experience.css'

const experiences = [
    {
        year: '2026',
        title: 'THE WHACK HACKATHON 4.0 — Team HackX',
        company: 'IEEE Student Branch, Amity University Rajasthan',
        description:
            'Participated in a 24-hour inter-college hackathon. Built and shipped MediTrack under time pressure. Earned Certificate of Achievement.',
        tags: ['React', 'Node.js', 'Supabase', 'Claude API', 'Socket.io'],
    },
    {
        year: '2024',
        title: 'Web Development Intern',
        company: 'Oasis Infobyte (AICTE OIB-SIP)',
        description:
            'Gained hands-on experience in web development, working on real-world projects and learning industry best practices.',
        tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
    },
]

const certifications = [
    'Claude Code in Action — Anthropic',
    'AWS for Beginners with Hands-On Labs',
]

export default function Experience() {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <div className="experience__header">
                    <span className="section-label">Career Path</span>
                    <h2 className="section-heading">
                        Work Experience & <span>Achievements</span>
                    </h2>
                </div>

                <div className="experience__timeline">
                    {experiences.map((exp, i) => (
                        <div key={i} className="experience__card">
                            <div className="experience__year-badge">{exp.year}</div>
                            <div className="experience__content">
                                <h3 className="experience__title">{exp.title}</h3>
                                <p className="experience__company">{exp.company}</p>
                                <p className="experience__desc">{exp.description}</p>
                                <div className="experience__tags">
                                    {exp.tags.map((tag, j) => (
                                        <span key={j} className="experience__tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="experience__certs">
                    <h3 className="experience__certs-title">Certifications</h3>
                    <div className="experience__certs-grid">
                        {certifications.map((cert, i) => (
                            <div key={i} className="experience__cert-card">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="experience__cert-icon">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
