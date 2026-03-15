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

const SITE_URL = 'https://asgharbe23it031-lgtm.github.io';
const TITLE = 'Adesh Chaudhary — Flutter Developer for Hire | Mobile App Development India';
const DESCRIPTION = 'Hire Adesh Chaudhary, an experienced Flutter developer from India. I build fast, scalable cross-platform mobile apps for iOS & Android using Flutter, Firebase, REST APIs, and GetX. Available for freelance projects and full-time remote roles.';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Adesh Chaudhary',
    jobTitle: 'Flutter Developer',
    description: 'Cross-platform mobile app developer specialising in Flutter, Dart, Firebase, and RESTful APIs. Available for freelance and remote opportunities.',
    email: 'adeshpatel700@gmail.com',
    url: SITE_URL,
    image: OG_IMAGE,
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressRegion: 'India',
    },
    knowsAbout: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'GetX', 'Hive', 'Riverpod', 'Android', 'iOS', 'Mobile App Development', 'Cross-platform Development'],
    sameAs: [
        'https://linkedin.com/in/adesh-chaudhary-933426305',
        'https://github.com/adeshpatel700-rgb',
    ],
    offers: {
        '@type': 'Offer',
        description: 'Flutter mobile app development services — from MVP to production. Fixed price or hourly.',
        areaServed: 'Worldwide',
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: `${SITE_URL}/#contact`,
        },
    },
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Adesh Chaudhary — Flutter Developer',
    url: SITE_URL,
    description: DESCRIPTION,
    author: { '@type': 'Person', name: 'Adesh Chaudhary' },
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Adesh Chaudhary — Flutter App Development',
    description: 'End-to-end Flutter mobile app development for startups and businesses. iOS, Android, Firebase backend, clean architecture.',
    url: SITE_URL,
    telephone: null,
    email: 'adeshpatel700@gmail.com',
    areaServed: 'Worldwide',
    priceRange: '$$',
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mobile App Development Services',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter App Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Firebase Integration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API Integration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Implementation from Figma' } },
        ],
    },
};

const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Flutter App Portfolio — Adesh Chaudhary',
    description: 'Shipped cross-platform mobile apps built with Flutter and Firebase.',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'FaithConnect', description: 'Social platform for religious communities with posts, Reels, DMs and dual-role access.' },
        { '@type': 'ListItem', position: 2, name: 'Savora', description: 'Full-stack food delivery app with real-time tracking, Google Maps, and Razorpay.' },
        { '@type': 'ListItem', position: 3, name: 'StudySync', description: 'Offline-first student productivity app with Pomodoro, timetable, and notes.' },
        { '@type': 'ListItem', position: 4, name: 'CalorieWala', description: 'Smart calorie tracker with ML-based food recognition and barcode scanning.' },
        { '@type': 'ListItem', position: 5, name: 'Workly', description: 'HR workforce management app for attendance, leave, and payroll tracking.' },
        { '@type': 'ListItem', position: 6, name: 'Expense Tracker', description: 'Personal finance tracker with visual charts and offline local storage.' },
    ],
};

export default function Home() {
    return (
        <>
            <Head>
                {/* === Primary === */}
                <title>{TITLE}</title>
                <meta name="description" content={DESCRIPTION} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="canonical" href={SITE_URL} />

                {/* === Keywords (still read by some crawlers & local SEO) === */}
                <meta name="keywords" content="Flutter developer, hire Flutter developer, Flutter developer India, Flutter developer for hire, cross-platform app developer, mobile app developer India, Flutter Firebase developer, Android iOS app developer, Flutter freelancer, React Native alternative, mobile app development services, Flutter app development, Dart developer" />
                <meta name="author" content="Adesh Chaudhary" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

                {/* === Geo (helps local & regional SEO) === */}
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />

                {/* === Open Graph (LinkedIn, WhatsApp, Slack previews) === */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:title" content={TITLE} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:image" content={OG_IMAGE} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Adesh Chaudhary — Flutter Developer Portfolio" />
                <meta property="og:site_name" content="Adesh Chaudhary" />
                <meta property="og:locale" content="en_US" />

                {/* === Twitter Card === */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={TITLE} />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta name="twitter:image" content={OG_IMAGE} />
                <meta name="twitter:image:alt" content="Adesh Chaudhary Flutter Developer" />
                <meta name="twitter:creator" content="@adeshchaudhary" />

                {/* === Theme / App === */}
                <meta name="theme-color" content="#0a0a0a" />
                <meta name="application-name" content="Adesh Chaudhary Portfolio" />

                {/* === Favicon === */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

                {/* === Fonts === */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* === Structured Data === */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }} />
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
