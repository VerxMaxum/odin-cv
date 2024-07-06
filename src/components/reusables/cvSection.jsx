// import Experience from './experience';
// import { useState } from 'react';

export default function CVSection({label, timeline}) {
    return (
        <>
            <h2 className="section-label">{label}</h2>
            <section className="cv-section">
                {timeline}
            </section>
        </>
    );
}