import './Skills.css'

const skillCategories = [
    {
        title: 'Frontend',
        skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Auth', 'Socket.io'],
    },
    {
        title: 'Database & Cloud',
        skills: ['MongoDB', 'Supabase (PostgreSQL)', 'Firebase', 'AWS (EC2, S3, IAM)'],
    },
    {
        title: 'Tools & AI',
        skills: ['Git & GitHub', 'Postman', 'VS Code', 'Claude API', 'Claude Code', 'MCP Servers', 'Vercel', 'Netlify'],
    },
]

export default function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="skills__header">
                    <span className="section-label">What I'm Learning</span>
                    <h2 className="section-heading">
                        Skills & <span>Technologies</span>
                    </h2>
                </div>
                <div className="skills__grid">
                    {skillCategories.map((cat, i) => (
                        <div key={i} className="skills__card">
                            <h3 className="skills__card-title">{cat.title}</h3>
                            <div className="skills__card-divider" />
                            <ul className="skills__list">
                                {cat.skills.map((skill, j) => (
                                    <li key={j} className="skills__item">
                                        <span className="skills__dot" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
