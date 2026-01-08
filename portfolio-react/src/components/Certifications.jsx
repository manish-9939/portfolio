
import React from 'react';

const Certifications = () => {
    return (
        <section id="certs" className="reveal active">
            <div className="heading">
                <h2>Certifications</h2>
            </div>
            <div className="cert-grid">
                <div className="cert-card">
                    <i className="fas fa-robot"></i>
                    <div className="cert-info">
                        <h4>Python for Data Science, AI & Development</h4>
                    </div>
                </div>
                <div className="cert-card">
                    <i className="fas fa-globe"></i>
                    <div className="cert-info">
                        <h4>Next.js: Creating and Hosting a FullStack Site</h4>
                    </div>
                </div>
                <div className="cert-card">
                    <i className="fas fa-cloud"></i>
                    <div className="cert-info">
                        <h4>EXIN Cloud Computing Foundation</h4>
                    </div>
                </div>
                <div className="cert-card">
                    <i className="fas fa-cubes"></i>
                    <div className="cert-info">
                        <h4>Object-Oriented Hierarchies in Java</h4>
                    </div>
                </div>
                <div className="cert-card">
                    <i className="fas fa-brain"></i>
                    <div className="cert-info">
                        <h4>Generative AI Impact, Considerations, and Ethical</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
