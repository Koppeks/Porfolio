import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, Link, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import NavBar from "../Navbar/Navbar";
import { PROJECTS } from "../../projects";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback((images) => setLightboxIndex(i => (i - 1 + images.length) % images.length), []);
  const nextImage = useCallback((images) => setLightboxIndex(i => (i + 1) % images.length), []);

  const project = PROJECTS.find(p => p.id === Number(id));

  useEffect(() => {
    if (lightboxIndex === null || !project) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prevImage(project.images);
      else if (e.key === "ArrowRight") nextImage(project.images);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage, project]);

  if (!project) {
    return (
      <div className="app">
        <NavBar />
        <main className="project-detail">
          <div className="section-container">
            <p>{t('project_detail.not_found')}</p>
            <button className="btn btn--ghost" onClick={() => navigate('/#sectionPorfolio')}>
              <ArrowLeft size={16} />
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <NavBar />
      <main className="project-detail">
        <div className="section-container">
          <header className="project-detail__header">
            <button className="project-detail__back btn btn--ghost" onClick={() => navigate('/#sectionPorfolio')}>
              <ArrowLeft size={16} />
            </button>
            <h1 className="project-detail__title">{t(project.name)}</h1>
            <div className="project-detail__links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label="View on GitHub">
                  <SiGithub size={16} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label="View live site">
                  <Link size={16} />
                </a>
              )}
              {project.extra && (
                <a href={project.extra} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label="View extra link">
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </header>

          <div className="project-detail__stack">
            {project.stack.map(tech => (
              <span key={tech} className="project-card__tech">{tech}</span>
            ))}
          </div>

          <p className="project-detail__desc">{t(project.descKey)}</p>

          {project.details?.length > 0 && (
            <ul className="project-detail__details">
              {project.details.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          )}

          {project.images.length > 0 && (
            <div className="project-detail__gallery">
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${t(project.name)} screenshot ${i + 1}`}
                  className="project-detail__image"
                  onClick={() => setLightboxIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox}><X size={24} /></button>
          {project.images.length > 1 && (
            <>
              <button className="lightbox__nav lightbox__nav--prev" onClick={e => { e.stopPropagation(); prevImage(project.images); }}>
                <ChevronLeft size={32} />
              </button>
              <button className="lightbox__nav lightbox__nav--next" onClick={e => { e.stopPropagation(); nextImage(project.images); }}>
                <ChevronRight size={32} />
              </button>
            </>
          )}
          <img
            className="lightbox__img"
            src={project.images[lightboxIndex]}
            alt={`${t(project.name)} screenshot ${lightboxIndex + 1}`}
            onClick={e => e.stopPropagation()}
          />
          {project.images.length > 1 && (
            <span className="lightbox__counter">{lightboxIndex + 1} / {project.images.length}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
