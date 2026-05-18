'use client'
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Utensils, Heart, Wrench, TrendingUp, MapPin, BarChart3 } from 'lucide-react';
import ServiceLayout from './ServiceLayout';
import ServiceHero from './ServiceHero';
import ServicePageCTA from './ServicePageCTA';
import CaseStudies from './CaseStudies';
import Benefits from './Benefits';
import Solutions from './Solutions';
import Testimonials from './Testimonials';
import CTA from './CTA';
import FAQ from './FAQ';
import Contact from './Contact';
import './SEOService.css';

const seoFeatured = [
  {
    slug: 'seo-restaurant-morrisville',
    icon: Utensils,
    title: 'Restaurant Local SEO',
    industry: 'Restaurant / Food & Beverage',
    location: 'Morrisville, NC',
    service: 'Local SEO',
    color: '#6b21a8',
    colorBg: 'var(--color-primary-bg)',
    results: [
      { metric: '150%', label: 'Organic Traffic Increase' },
      { metric: 'Top 3', label: 'Google Maps Visibility' },
    ],
    highlights: [
      'Ranked for "biryani near me" and local food keywords',
      '3x increase in calls and direction requests'
    ]
  },
  {
    slug: 'seo-healthcare-physical-therapy',
    icon: Heart,
    title: 'Healthcare SEO Growth',
    industry: 'Physical Therapy / Healthcare',
    location: 'United States',
    service: 'Organic SEO',
    color: '#6b21a8',
    colorBg: 'var(--color-primary-bg)',
    results: [
      { metric: '200%+', label: 'Organic Traffic Growth' },
      { metric: '3x', label: 'Conversion Rate Lift' },
    ],
    highlights: [
      '180% increase in US-based visitors',
      '50+ keyword rankings improved across service pages'
    ]
  },
  {
    slug: 'seo-home-energy-hvac',
    icon: Wrench,
    title: 'Home Energy & HVAC SEO',
    industry: 'Home Services – HVAC & Energy',
    location: 'Local / National',
    service: 'SEO & Lead Generation',
    color: '#6b21a8',
    colorBg: 'var(--color-primary-bg)',
    results: [
      { metric: '75%', label: 'Organic Click Growth' },
      { metric: '+254', label: 'Backlinks Added' },
    ],
    highlights: [
      'Impressions grew from 15.4K to 52.5K in 6 months',
      '64 new organic keywords ranked'
    ]
  },
];

const SEOService = () => {
  const frameworkRef = useRef(null);
  const frameworkInView = useInView(frameworkRef, { once: true, margin: "-100px" });

  const valueProps = [
    {
      icon: TrendingUp,
      title: 'Sustained Organic Growth',
      desc: 'Driven by high-intent search demand'
    },
    {
      icon: MapPin,
      title: 'North Carolina-Focused Local SEO',
      desc: 'Strategies aligned with real customer behavior'
    },
    {
      icon: BarChart3,
      title: 'Transparent Performance Tracking',
      desc: 'Tied directly to leads, calls, and conversions'
    }
  ];

  const frameworkSteps = [
    {
      step: '01',
      title: 'Comprehensive SEO Audit & Strategy',
      description: 'We analyze your current rankings, website architecture, and competitor landscape to build a customized growth strategy.'
    },
    {
      step: '02',
      title: 'Technical Foundation & Optimization',
      description: 'We fix site speed, mobile responsiveness, indexability issues, and Core Web Vitals to ensure search engines can crawl your site perfectly.'
    },
    {
      step: '03',
      title: 'On-Page Content & Keyword Targeting',
      description: 'We optimize your existing content and structure new pages around high-intent keywords that your ideal customers are searching for.'
    },
    {
      step: '04',
      title: 'Local SEO & Google Business Profile',
      description: 'We optimize your map listings, build local citations, and generate targeted reviews to dominate local search results.'
    },
    {
      step: '05',
      title: 'Authority Building & Backlinks',
      description: 'We acquire high-quality, relevant backlinks from authoritative domains to significantly boost your overall domain rating.'
    },
    {
      step: '06',
      title: 'Continuous Tracking & Iteration',
      description: 'We monitor rankings, traffic, and conversions, constantly refining the strategy to adapt to algorithm updates and market changes.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <ServiceLayout className="seo-page">
      <ServiceHero 
        title={
          <>
            Rank at the Top in{' '}
            <span className="text-gradient">North Carolina</span>{' '}
            with MD Astra
          </>
        }
        valueProps={valueProps}
        formTitle="Get Your Free SEO Audit"
        formSubtitle="See exactly what's holding your rankings back and how we can fix it."
        formName="SEO Audit Form"
      />
      <CaseStudies featured={seoFeatured} />

      <ServicePageCTA
        heading={
          <>
            Stop Guessing, Start <span className="text-gradient">Ranking</span>
          </>
        }
        subtext="MD Astra builds high-impact SEO strategies that generate leads, support sales, and scale your organic traffic. Book a free strategy call today."
        cta1={{ href: 'https://booking.mdastra.com/Consultation', label: 'Book a Free Strategy Call' }}
        cta2={{ href: 'tel:+18557500568', label: 'Call +1 855-750-0568' }}
        cta3={{ href: '#contact', label: 'Send Us a Message' }}
      />

      <section className="section seo-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our SEO Growth Framework</span>
            <h2 className="heading-lg">
              Strategy-First SEO Built for <span className="text-gradient">Growth</span>
            </h2>
            <p>
              At MD Astra, search engine optimization follows a <strong>structured growth framework</strong>, ensuring your website drives high-intent traffic, leads, and sales.
            </p>
          </motion.div>

          <motion.div
            className="seo-framework-grid"
            variants={containerVariants}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
          >
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                className="seo-framework-card"
                variants={cardVariants}
              >
                <div className="seo-framework-step">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Benefits />
      <Solutions />
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
    </ServiceLayout>
  );
};

export default SEOService;
