"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use, useState, useEffect } from "react";
import {
  ArrowLeft,
  Clock,
  Calendar,
  MessageCircle,
  Share2,
  Bookmark,
  X,
} from "lucide-react";
import nepalSaasBlog from "../../../tests/saas";
import integrationBlog from "../../../tests/integration";
import saasBlog from "../../../tests/saasbuilding";

type BlogData = typeof nepalSaasBlog;

const blogRegistry: Record<string, BlogData> = {
  "rise-of-saas-products-in-nepal-tivazo-krispcall-dialaxy": nepalSaasBlog,
  "why-third-party-integrations-are-the-backbone-of-modern-saas-products":
    integrationBlog,
  "building-saas-products-in-real-time-development-to-customer-feedback":
    saasBlog,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPage({ params }: PageProps) {
  const { slug } = use(params);
  const blog = blogRegistry[slug];

  // State for Lightbox
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    alt: string;
  } | null>(null);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  if (!blog) notFound();

  const { heading, meta, content } = blog;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;1,8..60,300;1,8..60,400&family=DM+Mono:wght@400;500&display=swap');
        
        :root {
          --ink: #1a1410;
          --ink-soft: #3d352e;
          --ink-muted: #8a7e75;
          --cream: #faf7f2;
          --accent: #c8401a;
          --accent-light: #f5e6e0;
          --rule: #d4ccc4;
          --gold: #b8952a;
        }

        /* LIGHTBOX STYLES */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(26, 20, 16, 0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          cursor: zoom-out;
          backdrop-filter: blur(4px);
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 85vh;
          width: auto;
          height: auto;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .lightbox-close {
          position: absolute;
          top: -3rem;
          right: 0;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .zoom-cursor {
          cursor: zoom-in;
          transition: transform 0.3s ease;
        }

        .zoom-cursor:hover {
          transform: scale(1.01);
        }

        /* ORIGINAL STYLES */
        .blog-root {
          background: var(--cream);
          color: var(--ink);
          font-family: 'Source Serif 4', Georgia, serif;
          min-height: 100vh;
          position: relative;
        }

        .blog-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }

        .blog-root > * { position: relative; z-index: 1; }

        .blog-nav {
          border-bottom: 1px solid var(--rule);
          padding: 1.25rem 0;
          background: var(--cream);
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(8px);
        }

        .blog-nav-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .back-link:hover { color: var(--accent); }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-actions button {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ink-muted);
          background: none;
          border: 1px solid var(--rule);
          padding: 0.45rem 0.9rem;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .nav-actions button:hover {
          border-color: var(--ink);
          color: var(--ink);
        }

        .article-header {
          max-width: 820px;
          margin: 0 auto;
          padding: 5rem 2rem 3rem;
          text-align: center;
        }

        .article-tag {
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          border-bottom: 1px solid var(--accent);
          padding-bottom: 2px;
          margin-bottom: 2rem;
        }

        .article-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 1.75rem;
        }

        .article-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--ink-soft);
          max-width: 640px;
          margin: 0 auto 2.5rem;
          font-style: italic;
          font-weight: 300;
        }

        .article-meta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.75rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          color: var(--ink-muted);
          text-transform: uppercase;
          flex-wrap: wrap;
        }

        .article-meta-row span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .hero-image-wrap {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
        }

        .hero-image-inner {
          position: relative;
          aspect-ratio: 16/7;
          border-radius: 3px;
          overflow: hidden;
        }

        .hero-image-caption {
          margin-top: 0.75rem;
          text-align: center;
          font-style: italic;
          font-size: 0.82rem;
          color: var(--ink-muted);
        }

        .article-layout {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem 8rem;
          display: grid;
          grid-template-columns: 200px 1fr 200px;
          gap: 0 4rem;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .article-layout { grid-template-columns: 180px 1fr; }
          .sidebar-right { display: none; }
        }

        @media (max-width: 768px) {
          .article-layout { grid-template-columns: 1fr; }
          .sidebar-left { display: none; }
        }

        .article-sidebar {
          position: sticky;
          top: 5rem;
        }

        .sidebar-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--rule);
          padding-bottom: 0.5rem;
        }

        .toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .toc-list li a {
          display: block;
          font-size: 0.78rem;
          line-height: 1.4;
          color: var(--ink-muted);
          text-decoration: none;
          padding: 0.4rem 0 0.4rem 0.75rem;
          border-left: 2px solid transparent;
          transition: all 0.2s;
        }

        .toc-list li a:hover {
          color: var(--ink);
          border-left-color: var(--accent);
        }

        .article-prose { min-width: 0; }

        .intro-text {
          font-size: 1.1rem;
          line-height: 1.9;
          color: var(--ink-soft);
          margin-bottom: 3.5rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid var(--rule);
        }

        .intro-text p { margin: 0 0 1.25em; }

        .intro-text p:first-child::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4.5rem;
          font-weight: 900;
          float: left;
          line-height: 0.75;
          margin: 0.15em 0.1em 0 0;
          color: var(--accent);
        }

        .article-section {
          margin-bottom: 3.5rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid var(--rule);
        }

        .article-section:last-of-type { border-bottom: none; }

        .section-number {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 0.6rem;
          display: block;
        }

        .section-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.35rem, 2.5vw, 1.85rem);
          font-weight: 700;
          line-height: 1.2;
          color: var(--ink);
          margin: 0 0 1.5rem;
          letter-spacing: -0.01em;
        }

        .section-body {
          font-size: 1.05rem;
          line-height: 1.85;
          color: var(--ink-soft);
        }

        .section-body p { margin: 0 0 1.2em; }

        .section-body p:last-child { margin-bottom: 0; }

        .pull-quote {
          border-left: 3px solid var(--accent);
          margin: 2.5rem 0;
          padding: 1.25rem 1.75rem;
          background: var(--accent-light);
          border-radius: 0 2px 2px 0;
        }

        .pull-quote p {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.2rem;
          font-style: italic;
          color: var(--ink);
          line-height: 1.55;
          margin: 0;
        }

        .inline-image { margin: 2.5rem 0; }

        .inline-image-inner {
          position: relative;
          aspect-ratio: 16/9;
          border-radius: 2px;
          overflow: hidden;
        }

        .inline-image figcaption {
          margin-top: 0.6rem;
          font-style: italic;
          font-size: 0.8rem;
          color: var(--ink-muted);
          text-align: center;
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--rule);
        }

        .tag-pill {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-soft);
          border: 1px solid var(--rule);
          padding: 0.35rem 0.75rem;
          border-radius: 2px;
          transition: all 0.2s;
          cursor: default;
        }

        .tag-pill:hover { border-color: var(--accent); color: var(--accent); }

        .conclusion-block {
          background: var(--ink);
          color: var(--cream);
          padding: 3rem 3.5rem;
          border-radius: 3px;
          margin-top: 4rem;
        }

        .conclusion-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1rem;
          display: block;
        }

        .conclusion-block p {
          font-size: 1rem;
          line-height: 1.85;
          color: rgba(250,247,242,0.82);
          margin: 0 0 1em;
        }

        .conclusion-block p:last-child { margin-bottom: 0; }

        .keywords-block { margin-top: 0.5rem; }

        .keyword-item {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.06em;
          color: var(--ink-muted);
          padding: 0.4rem 0;
          border-bottom: 1px solid var(--rule);
          display: block;
          transition: color 0.2s;
          cursor: default;
        }

        .keyword-item:hover { color: var(--accent); }

        .article-footer {
          border-top: 3px double var(--rule);
          max-width: 820px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
          text-align: center;
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }
      `}</style>

      {/* LIGHTBOX OVERLAY */}
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              <X size={18} /> Close
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          </div>
        </div>
      )}

      <div className="blog-root">
        <nav className="blog-nav">
          <div className="blog-nav-inner">
            <Link href="/#blog" className="back-link">
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
            <div className="nav-actions">
              <button type="button">
                <Share2 size={12} />
                Share
              </button>
              <button type="button">
                <Bookmark size={12} />
                Save
              </button>
            </div>
          </div>
        </nav>

        <header className="article-header">
          <span className="article-tag">{meta.category}</span>
          <h1 className="article-title">{heading}</h1>
          <p className="article-desc">{meta.description}</p>
          <div className="article-meta-row">
            <span>
              <Calendar size={12} /> {meta.publishedAt}
            </span>
            <span>
              <Clock size={12} /> {meta.readTime}
            </span>
            <span>
              <MessageCircle size={12} /> {meta.author}
            </span>
          </div>
        </header>

        <div className="hero-image-wrap">
          <figure>
            <div
              className="hero-image-inner zoom-cursor"
              onClick={() =>
                setSelectedImage({
                  url: meta.images[0].url,
                  alt: meta.images[0].alt,
                })
              }
            >
              <Image
                src={meta.images[0].url}
                alt={meta.images[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="hero-image-caption">
              {meta.images[0].caption} (Click to zoom)
            </figcaption>
          </figure>
        </div>

        <div className="article-layout">
          <aside className="article-sidebar sidebar-left">
            <p className="sidebar-label">In This Article</p>
            <ul className="toc-list">
              {content.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.heading}</a>
                </li>
              ))}
            </ul>
          </aside>

          <article className="article-prose">
            <div className="intro-text">
              {content.introduction
                .trim()
                .split("\n\n")
                .filter(Boolean)
                .map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
            </div>

            {content.sections.map((section, index) => {
              const total = content.sections.length;
              const sectionImage = meta.images.find(
                (img) => img.placement === `after-section-${index + 1}`,
              );
              const paragraphs = section.body
                .trim()
                .split("\n\n")
                .filter(Boolean)
                .map((p) => p.trim());

              const PULL_QUOTES: Record<number, string> = {
                5: "Companies like KrispCall, Dialaxy, and Tivazo are doing more than building products — they're demonstrating what's possible.",
                8: "This is probably the best moment in Nepal's history to be building a career in tech.",
              };

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="article-section"
                >
                  <span className="section-number">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </span>
                  <h2 className="section-heading">{section.heading}</h2>
                  <div className="section-body">
                    {paragraphs.map((para, i) => (
                      <div key={i}>
                        {i === 1 && PULL_QUOTES[index] && (
                          <div className="pull-quote">
                            <p>&ldquo;{PULL_QUOTES[index]}&rdquo;</p>
                          </div>
                        )}
                        <p>{para}</p>
                      </div>
                    ))}
                  </div>
                  {sectionImage && (
                    <figure className="inline-image">
                      <div
                        className="inline-image-inner zoom-cursor"
                        onClick={() =>
                          setSelectedImage({
                            url: sectionImage.url,
                            alt: sectionImage.alt,
                          })
                        }
                      >
                        <Image
                          src={sectionImage.url}
                          alt={sectionImage.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <figcaption>
                        {sectionImage.caption} (Click to zoom)
                      </figcaption>
                    </figure>
                  )}
                </section>
              );
            })}

            <div className="conclusion-block">
              <span className="conclusion-label">Final Thoughts</span>
              {content.conclusion
                .trim()
                .split("\n\n")
                .filter(Boolean)
                .map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
            </div>

            <div className="article-tags">
              {meta.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <aside className="article-sidebar sidebar-right">
            <p className="sidebar-label">Topics</p>
            <div className="keywords-block">
              {meta.keywords.map((kw) => (
                <span key={kw} className="keyword-item">
                  {kw}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <footer className="article-footer">
          <p>
            © 2025 Nepal SaaS &nbsp;·&nbsp; {meta.author} &nbsp;·&nbsp;{" "}
            {meta.publishedAt}
          </p>
        </footer>
      </div>
    </>
  );
}
