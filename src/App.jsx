import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu,
    Workflow,
    Zap,
    ArrowRight,
    ExternalLink,
    Menu,
    X,
    Play,
    Maximize2,
    CheckCircle,
    Database,
    Brain,
    MessageSquare,
    FileText,
    Image as ImageIcon,
    Clock,
    AlertTriangle,
    TrendingDown,
    Timer,
    Sparkles,
    Palette,
    Users,
    Wand2,
    Layers
} from 'lucide-react';

/* --- DATA CONSTANTS --- */

const CLIENTS = [
    { name: "Alyousr For Trade", logo: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Client%20Logos/Alyousrtrade.jpg" },
    { name: "Honda", logo: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Client%20Logos/honda-logo.png" },
    { name: "Serenity Spa", logo: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Client%20Logos/Serenity-Spa%20(1).png" },
    { name: "Aladdin Trips", logo: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Client%20Logos/alaadintrips.png" },
    { name: "Egypt Best Properties", logo: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Client%20Logos/EBPlogo.png" },
    { name: "Menon Furniture", logo: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Client%20Logos/menonlogo.png" },
    { name: "Albayt Alhadith", logo: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Client%20Logos/modernhome.png" },
];

const PROJECTS = [
    {
        id: 1,
        title: "Multimodal AI Agent: Alyousr For Trade",
        subtitle: "Handling complex Egyptian edge-cases & dialect nuances",
        description: "A state-of-the-art agent designed for a rural customer base. It handles voice, video, text, and understands context from screenshots (like Reels). It features intelligent message aggregation to prevent token over-usage and provides a natural, human-like CX.",
        tech: ["n8n", "OpenAI", "Supabase", "Vector Embeddings"],
        media: [
            { type: 'video', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/agentinaction.MP4", label: "Agent in Action" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/main-agent.png", label: "Main n8n Architecture" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/advanced-image-recognition-for-sent-photos.png", label: "Advanced Image Recognition" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/escalation-withquestion-workflow.png", label: "Escalation Workflow" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/order-processing-agent.png", label: "Order Processing Sub-agent" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/sendingproductphotos.png", label: "Product Photo Retrieval" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/usage-trackingfor-aitokens.png", label: "AI Token Analytics" },
        ]
    },
    {
        id: 2,
        title: "Serenity Spa & Wellness Agent",
        subtitle: "Multilingual Negotiation & Upselling Engine | Official WhatsApp API (No BSP)",
        description: "A 'dreamy persona' agent designed to sell the experience before the price. It features intelligent language routing (Arabic/English), advanced upselling strategies, and connects directly to the Official WhatsApp API without a BSP. Integrated with a self-hosted Chatwoot interface and Airtable for analytics, plus a custom HTML-to-Image API for generating instant branded reservation cards.",
        tech: ["n8n", "WhatsApp Cloud API", "Chatwoot (Self-hosted)", "Airtable", "Custom API", "Meta Verified"],
        media: [
            { type: 'video', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/serenity.MP4", label: "Live Negotiation Demo" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/serenity-spa-agent-whatsapp.png", label: "Main Agent Logic" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/custom-res-card.png", label: "Card Generation Workflow" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/card.png", label: "Generated Branded Card" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/businessverification.png", label: "Meta Business Verification" },
        ]
    },
    {
        id: 3,
        title: "Kitchen Design Agent: Saudi Market",
        subtitle: "Stateful AI Designer | 2D-to-3D Generation | Complex Revision Logic",
        description: "A masterclass in stateful AI engineering. This agent acts as a professional designer (not a salesperson), taking room dimensions, photos, or even videos to generate full buildable kitchen specifications (Blum/Egger standards). It features a custom 3D API to generate walkthroughs, handles complex revision cycles—including understanding client markups/drawings on previous renders—and translates Saudi dialect requests into precise UK manufacturing terminology.",
        tech: ["Custom 3D Rendering API", "Complex State Management", "Computer Vision (Markup Analysis)", "Video Processing", "PostgreSQL"],
        media: [
            { type: 'video', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/kitchenvidagent.MP4", label: "Agent In Action (Saudi Dialect)" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/designagentmain.png", label: "Main Agent Architecture" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/convertdesignto3dtour.png", label: "2D to 3D Generation Logic" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/kitchenfirstdesignandeditdesign-sub.png", label: "Design Generation Sub-workflow" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/editamarkedupphotobytheclient.png", label: "Handling Client Markups/Drawings" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/editanearlierdesign.png", label: "Contextual Revision History" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/kitchenresphoto.png", label: "Reservation Card Gen" },
        ]
    }
];

const MORE_AGENTS = [
    {
        client: "Aladdin Trips",
        title: "Trip Reservation Agent",
        icon: <Database className="text-pink-400" size={28} />,
        description: "A specialized reservation agent connected to a highly structured database to update and query complex trip details. It manages itineraries and generates custom branded reservation cards instantly.",
        tags: ["Structured DB", "Custom Res Cards"],
        status: "Live"
    },
    {
        client: "Egypt Best Properties (EBP)",
        title: "Internal CRM Voice Agent",
        icon: <MessageSquare className="text-green-400" size={28} />,
        description: "An in-house voice assistant for employees. You can say \"مش هعرف اجي بكره\" to create leave requests, or \"اخبار السيلز ايه\" to get detailed lead followup reports and sales analytics.",
        tags: ["Arabic NLP", "Voice Commands", "Internal CRM"],
        status: "In Production"
    },
    {
        client: "Albayt Alhadith",
        title: "Professional Sales & Quotation Agent",
        icon: <ImageIcon className="text-yellow-400" size={28} />,
        description: "Fine-tuned to NOT sound like an AI. This agent guides customers through sales processes and provides quotations based on deep visual analysis of photos and videos sent by the user.",
        tags: ["Fine-tuned Model", "Visual Analysis", "Sales Funnel"],
        status: "Live"
    }
];

const BPO_PROJECTS = [
    {
        id: 'bpo-1',
        title: "Ad Review Automation",
        subtitle: "End-to-End Compliance & QA for Real Estate Listings",
        painPoint: "The operations team was overwhelmed manually reviewing 1200+ property listings daily from over 200 sales agents. They had to check for spelling, structure, and missing info, leading to bottlenecks and fatigue.",
        solution: "I built a self-serve dashboard connected to an n8n backend. Agents input the Ad ID, and a highly trained AI model reviews it instantly. It provides copy-paste corrections for mistakes or auto-publishes/schedules the ad if it passes compliance. Includes state management to prevent hallucinated errors on re-reviews.",
        metrics: {
            before: "50 Hrs/Week",
            after: "0 Hrs/Week",
            impact: "100% Automated"
        },
        media: [
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/adreviewmain.png", label: "Main Automation Workflow" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/adreviewdashboard.png", label: "Agent Review Dashboard" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/adreviewdashboard2.png", label: "Error Correction Interface" },
        ]
    },
    {
        id: 'bpo-2',
        title: "Strategic Ad Unpublishing",
        subtitle: "Automated Lifecycle Management & Reach Protection",
        painPoint: "Operations manually filtered and clicked 'unpublish' for 1200+ ads daily (at the 27-day mark). They lacked granular control, risking the removal of ads for VIP accounts or damaging account reach by removing too many ads at once.",
        solution: "Developed an intelligent dashboard with n8n backend that auto-lists expiring ads. It features advanced filtering to protect VIP managers and enforce 'max removed' quotas per account to maintain algorithmic reach, reducing a 3-hour daily task to a simple 5-minute approval.",
        metrics: {
            before: "21 Hrs/Week",
            after: "0.5 Hrs/Week",
            impact: "98% Time Saved"
        },
        media: [
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/unpublishdashboard1.png", label: "Advanced Filtering Dashboard" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/unpublishmainn8n.png", label: "Main n8n Workflow" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/n8nunpublishsubworkflow.png", label: "Sub-Workflow Logic" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/unpublishdash2.png", label: "Bulk Action View" },
        ]
    },
    {
        id: 'bpo-3',
        title: "Market Intelligence Scraper",
        subtitle: "High-Volume Competitor Analysis & Trend Tracking",
        painPoint: "To understand market positioning, agents manually audited Property Finder, counting ads per project, developer, and tier. It took a full work day to analyze just 600 listings, making broad, real-time market analysis effectively impossible.",
        solution: "Engineered a high-performance scraping engine coupled with an analytics dashboard. It extracts, categorizes, and visualizes 12,000+ live listings in under 5 minutes, offering extensive filtering capabilities that transform raw data into instant strategic leverage.",
        metrics: {
            before: "8 Hrs / 600 Ads",
            after: "5 Mins / 12k Ads",
            impact: "20x Data Scale"
        },
        media: [
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/scraper1.png", label: "Market Overview Dashboard" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/scraper2.png", label: "Granular Filtering" },
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/scraper3.png", label: "Data Visualization" },
        ]
    },
    {
        id: 'bpo-4',
        title: "Offline Conversion API (CAPI)",
        subtitle: "AI-Powered 'Pixel' for DM-Based Commerce",
        painPoint: "The business sells products directly through Instagram DMs, not a website. This meant Meta's ad algorithms were completely blind to actual sales ('Offline Conversions'), making it impossible to optimize ads for purchase objectives or track true ROAS.",
        solution: "Built a stealth AI listener using Meta's webhook echo subscription. It scans chat logs for phone numbers via Regex, uses an AI model to verify 'Order Confirmation' context, structures the data, hashes it for privacy, and pushes it directly to Facebook's Conversions API—unlocking true ad optimization for chat commerce.",
        metrics: {
            before: "0% Tracking",
            after: "100% Attribution",
            impact: "Ads Optimization"
        },
        media: [
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/CAPINSTA.png", label: "CAPI Automation Architecture" },
        ]
    },
    {
        id: 'bpo-5',
        title: "Smart Lead Routing & Assignment",
        subtitle: "Zero-Latency CRM Sync with Hybrid AI Matching",
        painPoint: "Manual insertion of 100+ daily leads caused a critical 3-hour delay, cooling down potential buyers. Furthermore, matching lead locations (e.g., 'New Cairo') to rigid CRM drop-downs was error-prone and slow.",
        solution: "Implemented instant API ingestion that routes leads to the CRM in milliseconds. It utilizes a hybrid engine: SQL `ILIKE` commands for precise project matching, with an AI fallback to 'fuzzy match' inconsistent location names. Includes a custom logic layer for dynamic sales team assignment and feeds a real-time ads scoreboard.",
        metrics: {
            before: "21 Hrs / Week",
            after: "Instant",
            impact: "21 Hrs Saved / Week"
        },
        media: [
            { type: 'image', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/PFleadsrouting.png", label: "Routing & Matching Logic" },
        ]
    },
    {
        id: 'bpo-6',
        title: "Intelligent Bulk Data Cleaner",
        subtitle: "Automated ETL & Fuzzy Logic Validation",
        painPoint: "The backend required strict data types and expressions for bulk uploads. Two employees spent 4 hours each (8 hours total per day) manually cleaning 600+ rows of inconsistent human entry to prevent upload rejections.",
        solution: "Developed an advanced Excel-based ETL tool that syncs with backend schemas. It auto-generates SEO-friendly titles/descriptions from raw cell data and uses fuzzy matching algorithms to map inconsistent inputs to precise database values automatically.",
        metrics: {
            before: "40 Hrs / Week",
            after: "1 Hr / Week",
            impact: "98% Efficiency Gain"
        },
        media: [
            { type: 'video', url: "https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/excel-cleaner.MP4", label: "Cleaning Process Demo" },
        ]
    }
];

const ADDITIONAL_BPO = [
    {
        title: "Automated Design Pipeline",
        icon: <Palette className="w-8 h-8 text-pink-400" />,
        desc: "AI-driven daily graphic design generation and execution, auto-synced and organized directly to Google Drive for marketing teams."
    },
    {
        title: "Round-Robin Lead Routing",
        icon: <Users className="w-8 h-8 text-blue-400" />,
        desc: "Intelligent Facebook Leads routing to CRM with fairness-based Round Robin assignment to ensure equitable distribution among agents."
    },
    {
        title: "AI Listing Enhancement",
        icon: <Wand2 className="w-8 h-8 text-purple-400" />,
        desc: "Bulk processing pipeline that automatically upscales, crops, and watermarks thousands of property images for listing readiness."
    }
];

const SERVICES = [
    { icon: <Workflow className="w-6 h-6" />, title: "n8n Automation", desc: "Complex workflow orchestration connecting disparate APIs." },
    { icon: <Zap className="w-6 h-6" />, title: "Make (Integromat)", desc: "Rapid scenario building for business logic and data sync." },
    { icon: <Cpu className="w-6 h-6" />, title: "UiPath RPA", desc: "Enterprise-grade robotic process automation for legacy systems." },
];

/* --- COMPONENTS --- */

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo Replacement */}
                <a href="#" className="text-2xl font-bold tracking-tighter text-white group">
                    Flowmatic<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
                    <a href="#clients" className="hover:text-white transition-colors">Clients</a>
                    <a href="#work" className="hover:text-white transition-colors">Work</a>
                    <a href="#more-agents" className="hover:text-white transition-colors">More Agents</a>
                    <a href="#optimization" className="hover:text-white transition-colors">Efficiency</a>
                    <a href="#services" className="hover:text-white transition-colors">Stack</a>
                    <a href="#contact" className="px-4 py-2 bg-white text-slate-900 rounded-full hover:bg-blue-50 transition-colors">Let's Talk</a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-white/10"
                    >
                        <div className="flex flex-col p-6 space-y-4 text-center">
                            <a href="#clients" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Clients</a>
                            <a href="#work" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Work</a>
                            <a href="#more-agents" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">More Agents</a>
                            <a href="#optimization" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Efficiency</a>
                            <a href="#services" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Stack</a>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="text-blue-400 font-bold">Contact Me</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

/* --- VISUAL EFFECT COMPONENTS --- */

const ParticleNetwork = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-blue-500/30 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "vw",
                            y: Math.random() * 100 + "vh",
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            x: [
                                Math.random() * 100 + "vw",
                                Math.random() * 100 + "vw",
                                Math.random() * 100 + "vw",
                            ],
                            y: [
                                Math.random() * 100 + "vh",
                                Math.random() * 100 + "vh",
                                Math.random() * 100 + "vh",
                            ],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: Math.random() * 4 + 1 + "px",
                            height: Math.random() * 4 + 1 + "px",
                        }}
                    />
                ))}
            </div>
            {/* Connection Lines (Simulated with SVG for performance) */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
    );
};

const TiltCard = ({ children }) => {
    const x = motion.useMotionValue(0);
    const y = motion.useMotionValue(0);
    const rotateX = motion.useTransform(y, [-100, 100], [5, -5]);
    const rotateY = motion.useTransform(x, [-100, 100], [-5, 5]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * width);
        y.set(yPct * height);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{
                perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="h-full"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full transition-shadow duration-300 ease-out"
            >
                {/* Holographic Shine Effect */}
                <motion.div
                    style={{
                        x: motion.useTransform(x, [-200, 200], [-100, 100]),
                        y: motion.useTransform(y, [-200, 200], [-100, 100]),
                    }}
                    className="absolute inset-0 z-10 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 pointer-events-none rounded-3xl transition-opacity duration-300 mix-blend-overlay"
                />

                {children}
            </motion.div>
        </motion.div>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
            {/* Digital Nervous System Background */}
            <ParticleNetwork />

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Profile Photo Integration */}
                    <div className="relative mx-auto w-64 h-64 mb-2 md:w-72 md:h-72">
                        <img
                            src="https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/528133800_122098887482967786_7658994577312817335_n%20(1).jpg"
                            alt="Seif Elshamy"
                            className="w-full h-full object-cover object-top rounded-full relative z-10"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                            }}
                        />
                        {/* Glowing ring behind photo */}
                        <div className="absolute inset-0 rounded-full border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.3)] animate-pulse z-0"></div>
                    </div>

                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium backdrop-blur-md">
                        Available for new projects
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Hello, I'm Seif, and my favorite hobby is <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            automating the impossible.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Specializing in n8n, Make, and UiPath. I build multimodal AI agents that handle complex nuances, edge cases, and real-world chaos.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#work" className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-600/30">
                            View Case Studies <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-500">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

/* 
   Improved Client Marquee 
   - Removes CSS animation bugs
   - Implements seamless infinite scroll using Framer Motion
   - Adds "Center Magnification" effect
*/
const ClientMarquee = () => {
    return (
        <section id="clients" className="py-20 bg-slate-950 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Trusted By Market Leaders</p>
            </div>

            <div className="relative w-full max-w-[100vw] overflow-hidden mask-gradient">
                {/* 
                    We use a container that is wide enough to hold multiple copies.
                    We animate it effectively. But for "middle larger", we need a different approach.
                    Standard Marquee + localized scaling is hard.
                    Let's use a simpler robust marquee first to fix the "bug".
                    To fake the 'middle larger', we can use a static lens? No.
                    We will rely on simple hover effects for now to ensure stability, 
                    OR we can use a 'Carousel' instead if the user wants focus?
                    The user said "make it spin".
                    
                    Let's stick to a robust standard marquee without the glitchy CSS.
                 */}
                <div className="flex w-max animate-marquee-smooth hover:[animation-play-state:paused]">
                    {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
                        <div key={`${client.name}-${idx}`} className="w-64 mx-8 flex items-center justify-center transition-all duration-300 hover:scale-125 grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-h-24 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .mask-gradient {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                @keyframes marquee-smooth {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                }
                .animate-marquee-smooth {
                    animation: marquee-smooth 40s linear infinite;
                }
            `}</style>
        </section>
    );
};

const Modal = ({ src, type, label, onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={onClose}>
            <button className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors">
                <X size={32} />
            </button>
            <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                {type === 'video' ? (
                    <video
                        controls
                        autoPlay
                        className="w-full max-h-[80vh] rounded-lg shadow-2xl border border-white/10"
                        src={src} // Direct src ensures better format compatibility (mp4/mov)
                    >
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={src} alt={label} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
                )}
                <p className="mt-4 text-white font-medium text-lg">{label}</p>
            </div>
        </div>
    );
};

const ProjectShowcase = () => {
    const [activeModal, setActiveModal] = useState(null);

    return (
        <section id="work" className="pt-24 pb-12 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Automation</h2>
                    <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
                </div>

                {PROJECTS.map((project) => (
                    <div key={project.id} className="mb-16 last:mb-0">
                        <TiltCard>
                            <div className="bg-slate-950 rounded-3xl border border-white/10 overflow-hidden shadow-2xl h-full">
                                {/* Header / Info */}
                                <div className="p-8 md:p-12 border-b border-white/5">
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-xl text-slate-300 mb-6 italic">{project.subtitle}</p>
                                    <p className="text-slate-400 leading-relaxed max-w-4xl">{project.description}</p>

                                    {project.media.find(m => m.type === 'video') && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setActiveModal(project.media.find(m => m.type === 'video')); }}
                                            className="mt-8 group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-1 relative z-20"
                                        >
                                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Play size={14} className="text-blue-600 fill-blue-600 ml-0.5" />
                                            </div>
                                            Watch Full Video
                                        </button>
                                    )}
                                </div>

                                {/* Media Grid */}
                                <div className="p-8 md:p-12 bg-slate-900/50">
                                    <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                                        <Database size={20} className="text-purple-400" /> System Architecture & Demos
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {/* Highlight Video (Spans 2 cols on desktop) */}
                                        {project.media.filter(m => m.type === 'video').map((item, idx) => (
                                            <div key={idx} className="md:col-span-2 relative group rounded-xl overflow-hidden aspect-video border border-white/10 cursor-pointer"
                                                onClick={(e) => { e.stopPropagation(); setActiveModal(item); }}>
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all z-10">
                                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                                                        <Play fill="white" className="text-white" />
                                                    </div>
                                                </div>
                                                <video className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                                                    <source src={item.url} type="video/mp4" />
                                                </video>
                                                <div className="absolute bottom-4 left-4 z-20">
                                                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Video Demo</span>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Image Grid */}
                                        {project.media.filter(m => m.type === 'image').map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ y: -5 }}
                                                className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 border border-white/10 cursor-pointer"
                                                onClick={(e) => { e.stopPropagation(); setActiveModal(item); }}
                                            >
                                                <img
                                                    src={item.url}
                                                    alt={item.label}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                                    <p className="text-white text-sm font-medium">{item.label}</p>
                                                    <div className="flex items-center text-blue-400 text-xs mt-1 gap-1">
                                                        <Maximize2 size={12} /> Click to expand
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </div>
                ))}
            </div>

            {activeModal && (
                <Modal
                    src={activeModal.url}
                    type={activeModal.type}
                    label={activeModal.label}
                    onClose={() => setActiveModal(null)}
                />
            )}
        </section>
    );
};

const MoreAgents = () => {
    return (
        <section id="more-agents" className="py-20 bg-slate-900 border-t border-white/5">
            <div className="container mx-auto px-6">
                <h3 className="text-2xl font-bold text-slate-300 mb-10 flex items-center gap-3">
                    <Brain className="text-blue-500" /> More Agents in the Wild
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MORE_AGENTS.map((agent, idx) => (
                        <div key={idx} className="bg-slate-950 p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all hover:translate-y-[-5px] group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white/5 rounded-xl text-slate-300 group-hover:text-blue-400 transition-colors">
                                    {agent.icon}
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-bold border ${agent.status === 'Live' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                                    {agent.status}
                                </div>
                            </div>

                            <div className="text-blue-500 text-sm font-semibold mb-2">{agent.client}</div>
                            <h4 className="text-xl font-bold text-white mb-4">{agent.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {agent.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {agent.tags.map(tag => (
                                    <span key={tag} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProcessOptimization = () => {
    const [activeModal, setActiveModal] = useState(null);

    return (
        <section id="optimization" className="py-24 bg-slate-950 relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-emerald-500/10 rounded-lg">
                            <TrendingDown className="text-emerald-400 w-6 h-6" />
                        </div>
                        <span className="text-emerald-400 font-bold tracking-wider text-sm uppercase">Operational Efficiency</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Business Process Optimization</h2>
                    <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
                </div>

                {BPO_PROJECTS.map((project) => (
                    <div key={project.id} className="bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl mb-12 last:mb-0">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                            {/* Left Column: Context & Solution */}
                            <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
                                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 italic mb-8">{project.subtitle}</p>

                                <div className="space-y-8">
                                    <div className="bg-red-500/5 border-l-4 border-red-500/50 p-6 rounded-r-xl">
                                        <div className="flex items-center gap-2 mb-3 text-red-400 font-bold uppercase text-xs tracking-wider">
                                            <AlertTriangle size={16} /> Pain Point
                                        </div>
                                        <p className="text-slate-300 leading-relaxed">{project.painPoint}</p>
                                    </div>

                                    <div className="bg-emerald-500/5 border-l-4 border-emerald-500/50 p-6 rounded-r-xl">
                                        <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold uppercase text-xs tracking-wider">
                                            <Zap size={16} /> The Automation
                                        </div>
                                        <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: The Numbers */}
                            <div className="lg:col-span-5 bg-slate-950 p-8 md:p-12 flex flex-col justify-center">
                                <h4 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-8 text-center">Impact Analysis</h4>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-red-500/20 text-center relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
                                        <p className="text-slate-500 text-xs font-bold uppercase mb-2">Manual Effort</p>
                                        <p className="text-2xl md:text-3xl font-bold text-red-400 flex items-center justify-center gap-2">
                                            {project.metrics.before}
                                        </p>
                                        <p className="text-slate-600 text-xs mt-1">Human Time / Week</p>
                                    </div>

                                    <div className="bg-emerald-900/10 p-6 rounded-2xl border border-emerald-500/20 text-center relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                                        <p className="text-emerald-500/70 text-xs font-bold uppercase mb-2">Automated</p>
                                        <p className="text-2xl md:text-3xl font-bold text-emerald-400 flex items-center justify-center gap-2">
                                            {project.metrics.after}
                                        </p>
                                        <p className="text-emerald-500/50 text-xs mt-1">Human Time / Week</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-center shadow-lg shadow-emerald-900/20">
                                    <p className="text-emerald-100 text-sm font-medium mb-1">Total Efficiency Gain</p>
                                    <p className="text-3xl font-bold text-white">{project.metrics.impact}</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row: Visual Proof */}
                        <div className="bg-slate-950/50 p-8 border-t border-white/5">
                            <p className="text-slate-500 text-sm font-bold uppercase mb-4 flex items-center gap-2">
                                <ImageIcon size={16} /> Visual Evidence
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {project.media.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative aspect-video bg-slate-800 rounded-lg overflow-hidden cursor-pointer border border-white/10 hover:border-emerald-500/50 transition-all"
                                        onClick={() => setActiveModal(item)}
                                    >
                                        <img src={item.url} alt={item.label} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                            <Maximize2 className="text-white" size={24} />
                                        </div>
                                        <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white backdrop-blur-sm">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {/* --- High-Velocity Workflows Grid --- */}
                <div className="mt-24">
                    <h3 className="text-2xl font-bold text-slate-300 mb-8 flex items-center gap-3">
                        <Layers className="text-emerald-400" /> And much more...
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ADDITIONAL_BPO.map((item, idx) => (
                            <div key={idx} className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:bg-slate-900 hover:border-emerald-500/30 transition-all duration-300 group">
                                <div className="mb-6 p-4 bg-slate-950 rounded-xl inline-block group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {activeModal && (
                <Modal
                    src={activeModal.url}
                    type={activeModal.type}
                    label={activeModal.label}
                    onClose={() => setActiveModal(null)}
                />
            )}
        </section>
    );
};

const Capabilities = () => {
    return (
        <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Technical Capabilities</h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            I don't just connect APIs; I build resilient, self-healing systems. My agents are designed to handle the unpredictability of real human interaction, especially in challenging environments.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400"><Brain size={24} /></div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Visual Intelligence</h4>
                                    <p className="text-slate-400 text-sm">Processing varying image ratios, screenshots, and extracting context from visual data.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400"><Workflow size={24} /></div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Complex Routing</h4>
                                    <p className="text-slate-400 text-sm">Handling back-to-back messaging, token aggregation, and dialect-specific responses.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {SERVICES.map((s, idx) => (
                            <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-white/10 hover:bg-slate-800 transition-colors flex items-center gap-4">
                                <div className="text-slate-200">{s.icon}</div>
                                <div>
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <p className="text-slate-500 text-sm">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const DentistReveal = () => {
    return (
        <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/5 blur-3xl"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 p-12 rounded-3xl max-w-4xl mx-auto shadow-2xl relative"
                >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg border border-blue-400">
                        Plot Twist!
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 mt-4">
                        I am also a <span className="text-blue-400">Dentist!</span> 🦷
                    </h3>

                    <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                        When I'm not automating workflows, I'm perfecting smiles. It's all about precision, aesthetics, and solving complex problems—whether in code or in the clinic.
                    </p>

                    <a
                        href="https://whmbrguzumyatnslzfsq.supabase.co/storage/v1/object/public/Agents/DrSeif%20Elshamy_241031_235029_compressed%20(1).pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg"
                    >
                        <ExternalLink size={20} /> View Dentist Portfolio
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-900 border-t border-white/10">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to automate?</h2>
                <p className="text-slate-400 text-lg mb-10">
                    Whether you need a complex n8n workflow or a full-scale AI agent for your business, I'm ready to build it.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="mailto:connect@flowmaticlabs.com" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-colors">
                        Email Me
                    </a>
                    <a href="https://www.linkedin.com/in/seif-ahmed-801a59339/" target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full border border-slate-700 hover:bg-slate-700 transition-colors">
                        LinkedIn
                    </a>
                    <a href="tel:+201069591087" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full border border-slate-700 hover:bg-slate-700 transition-colors">
                        +20 106 959 1087
                    </a>
                </div>

                <footer className="mt-20 pt-10 border-t border-white/5 text-slate-600 text-sm">
                    <p>© {new Date().getFullYear()} Seif Elshamy. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

const App = () => {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
            <Navbar />
            <Hero />
            <ClientMarquee />
            <ProjectShowcase />
            <MoreAgents />
            <ProcessOptimization />
            <Capabilities />
            <DentistReveal />
            <Contact />

            {/* Tailwind Custom Animations Style Block */}
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        .group:hover .animate-marquee,
        .group:hover .animate-marquee2 {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default App;