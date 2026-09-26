import { profile } from '../data/developer'
import './Hero.css'

export function Hero() {
  return (
    <header className="hero">
      <p className="hero-eyebrow">{profile.role}</p>
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="hero-meta">
        <span>{profile.location}</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        {profile.links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
