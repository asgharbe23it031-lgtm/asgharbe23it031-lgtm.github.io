import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';

// Lazily load heavy sections
const Experience = dynamic(() => import('../components/Experience'), { ssr: false });
const Projects = dynamic(() => import('../components/Projects'), { ssr: false });
const Skills = dynamic(() => import('../components/Skills'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });

const SEO = {
    title: 'Adesh Chaudhary · Flutter Developer',
    description: 'Flutter Developer crafting high-performance cross-platform apps with clean code and modern UI/UX. Available for freelance and remote work.',
    url: 'https://asgharbe23it031-lgtm.github.io',
    image: '/og-image.png',
};

export default function Home() {
    return (
        <>
            <Head>
                <title>{SEO.title}</title>
                <meta name="description" content={SEO.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={SEO.url} />
                <meta property="og:title" content={SEO.title} />
                <meta property="og:description" content={SEO.description} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={SEO.title} />
                <meta name="twitter:description" content={SEO.description} />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Preconnect Google Fonts (already imported in globals.css, this just speeds up DNS) */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Adesh Chaudhary',
                            jobTitle: 'Flutter Developer',
                            email: 'adeshpatel700@gmail.com',
                            url: SEO.url,
                            sameAs: [
                                'https://linkedin.com/in/adesh-chaudhary-933426305',
                                'https://github.com/adeshpatel700-rgb',
                            ],
                        })
                    }}
                />
            </Head>

            {/* Noise texture overlay */}
            <div className="noise-overlay" aria-hidden="true" />

            {/* Page shell */}
            <div style={{ minHeight: '100vh', position: 'relative' }}>
                <Navbar />

                <main id="main-content">
                    <Hero />

                    {/* Section divider */}
                    <div className="container">
                        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
                    </div>

                    <About />

                    <div className="container">
                        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
                    </div>

                    <Experience />

                    <div className="container">
                        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
                    </div>

                    <Projects />

                    <div className="container">
                        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
                    </div>

                    <Skills />

                    <div className="container">
                        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
                    </div>

                    <Contact />
                </main>

                <Footer />
            </div>
        </>
    );
}
