// Túdó — shared UI atoms (icons, avatars, gradient bg, tab bar, header)

const NAVY = '#1B2A6B';
const NAVY_DEEP = '#0F1A4A';
const LAVENDER = '#B8C0EE';
const LAVENDER_LIGHT = '#EEF0FF';
const INK = '#1A1F3A';
const MUTED = '#6B7290';
const HAIR = 'rgba(27, 42, 107, 0.10)';

// ── Icons ──────────────────────────────────────────────────────
const Icon = {
  search: (s = 18, c = '#8A8FA8') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke={c} strokeWidth="2"/>
      <path d="M20 20l-3.5-3.5" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  mic: (s = 18, c = '#1A1F3A') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="9" y="3" width="6" height="12" rx="3" fill={c}/>
      <path d="M5 11a7 7 0 0014 0M12 18v3M9 21h6" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  dots: (s = 18, c = '#1A1F3A') => (
    <svg width={s} height={s} viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2" fill={c}/>
      <circle cx="12" cy="12" r="2" fill={c}/>
      <circle cx="12" cy="19" r="2" fill={c}/>
    </svg>
  ),
  home: (s = 22, c = '#1B2A6B', filled = false) => filled ? (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <path d="M3 11l9-7 9 7v9a2 2 0 01-2 2h-3v-6h-8v6H5a2 2 0 01-2-2v-9z"/>
    </svg>
  ) : (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M3 11l9-7 9 7v9a2 2 0 01-2 2h-3v-6h-8v6H5a2 2 0 01-2-2v-9z" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  calendar: (s = 22, c = '#1B2A6B', filled = false) => filled ? (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <rect x="3" y="5" width="18" height="16" rx="3"/>
      <rect x="3" y="5" width="18" height="5" fill={c} opacity="0.5"/>
      <rect x="7" y="2" width="2" height="5" rx="1" fill={c}/>
      <rect x="15" y="2" width="2" height="5" rx="1" fill={c}/>
    </svg>
  ) : (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="3" stroke={c} strokeWidth="2"/>
      <path d="M3 10h18" stroke={c} strokeWidth="2"/>
      <path d="M8 3v4M16 3v4" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  chat: (s = 22, c = '#1B2A6B', filled = false) => filled ? (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H9l-5 4V5z"/>
    </svg>
  ) : (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H9l-5 4V5z" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  user: (s = 22, c = '#1B2A6B', filled = false) => filled ? (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/>
    </svg>
  ) : (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={c} strokeWidth="2"/>
      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  star: (s = 14, c = '#F5A623') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>
    </svg>
  ),
  back: (s = 22, c = '#1B2A6B') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M15 5l-7 7 7 7" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chevron: (s = 16, c = '#1B2A6B') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M9 5l7 7-7 7" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pin: (s = 14, c = '#6B7290') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="2.5" stroke={c} strokeWidth="1.8"/>
    </svg>
  ),
  online: (s = 14, c = '#2BB673') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="12" rx="2" stroke={c} strokeWidth="1.8"/>
      <path d="M8 21h8M12 17v4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  send: (s = 22, c = '#fff') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <path d="M3 12l18-9-7 18-3-7-8-2z"/>
    </svg>
  ),
  plus: (s = 18, c = '#1B2A6B') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke={c} strokeWidth="2.4" strokeLinecap="round"/>
    </svg>
  ),
  check: (s = 18, c = '#fff') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5l4.5 4.5L19 7" stroke={c} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bell: (s = 20, c = '#1B2A6B') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6zM10 19a2 2 0 004 0" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  card: (s = 20, c = '#1B2A6B') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="6" width="19" height="13" rx="2.5" stroke={c} strokeWidth="1.8"/>
      <path d="M2.5 10.5h19" stroke={c} strokeWidth="1.8"/>
    </svg>
  ),
  shield: (s = 20, c = '#1B2A6B') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  globe: (s = 20, c = '#1B2A6B') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.8"/>
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke={c} strokeWidth="1.8"/>
    </svg>
  ),
  help: (s = 20, c = '#1B2A6B') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.8"/>
      <path d="M9.5 9a2.5 2.5 0 015 0c0 2-2.5 2-2.5 4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="17" r="1" fill={c}/>
    </svg>
  ),
  logout: (s = 20, c = '#D14343') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M9 4H5a2 2 0 00-2 2v12a2 2 0 002 2h4M16 8l4 4-4 4M20 12H10" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  filter: (s = 18, c = '#1B2A6B') => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M3 5h18M6 12h12M10 19h4" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

// ── Avatar ─────────────────────────────────────────────────────
function Avatar({ teacher, size = 56, ring = false }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: teacher.avatarBg, color: teacher.avatarFg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.36, fontWeight: 700, letterSpacing: '0.02em',
      flexShrink: 0,
      boxShadow: ring ? `0 0 0 3px #fff, 0 0 0 4px ${LAVENDER}` : 'none',
      fontFamily: '"Sora", -apple-system, system-ui, sans-serif',
    }}>{teacher.initials}</div>
  );
}

// ── Gradient background (white → navy fade) ───────────────────
function GradientBg({ children, intensity = 1 }) {
  // intensity 0..1 controls how dark the bottom gets
  const navy = `rgba(27, 42, 107, ${0.55 * intensity})`;
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `linear-gradient(180deg, #ffffff 0%, #ffffff 38%, ${navy} 100%)`,
      overflow: 'hidden',
    }}>
      {children}
    </div>
  );
}

// ── Túdó top header (logo + avatar) ────────────────────────────
function TudoHeader({ onProfile, showAvatar = true }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px 18px 10px',
      position: 'relative', zIndex: 5,
    }}>
      <div style={{ width: 40 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <img src="assets/tudo-logo.png" alt="Túdó" style={{ height: 38, width: 'auto', objectFit: 'contain', marginTop: -2 }}/>
      </div>
      {showAvatar ? (
        <button onClick={onProfile} style={{
          width: 40, height: 40, borderRadius: '50%',
          background: '#7B85D1', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(27,42,107,0.18)',
        }}>
          {Icon.user(22, '#fff', true)}
        </button>
      ) : <div style={{ width: 40 }} />}
    </div>
  );
}

// ── Floating tab bar ───────────────────────────────────────────
function TabBar({ active, onChange }) {
  const tabs = [
    { id: 'home', icon: Icon.home, label: 'Heim' },
    { id: 'bookings', icon: Icon.calendar, label: 'Bókanir' },
    { id: 'chats', icon: Icon.chat, label: 'Spjall' },
    { id: 'profile', icon: Icon.user, label: 'Prófíll' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 16, right: 16, bottom: 18,
      height: 64, borderRadius: 36,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: '0 8px 28px rgba(15, 26, 74, 0.18), 0 1px 0 rgba(255,255,255,0.9) inset',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      padding: '0 12px', zIndex: 30,
    }}>
      {tabs.map(t => {
        const isActive = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} style={{
            position: 'relative', border: 'none', background: 'transparent', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            padding: '8px 14px', borderRadius: 20,
          }}>
            {isActive && (
              <div style={{
                position: 'absolute', inset: 4,
                background: LAVENDER_LIGHT, borderRadius: 20, zIndex: 0,
              }} />
            )}
            <div style={{ position: 'relative', zIndex: 1 }}>
              {t.icon(22, NAVY, isActive)}
            </div>
            <div style={{
              position: 'relative', zIndex: 1,
              fontSize: 10, fontWeight: 600, color: NAVY,
              opacity: isActive ? 1 : 0.55, letterSpacing: 0.2,
            }}>{t.label}</div>
          </button>
        );
      })}
    </div>
  );
}

// ── Pill button (primary / secondary) ─────────────────────────
function PillBtn({ children, variant = 'primary', onClick, full = false, style = {} }) {
  const styles = {
    primary: { background: NAVY, color: '#fff', boxShadow: '0 6px 18px rgba(27,42,107,0.28)' },
    secondary: { background: '#fff', color: NAVY, boxShadow: '0 4px 14px rgba(15,26,74,0.10)' },
    soft: { background: LAVENDER_LIGHT, color: NAVY, boxShadow: 'none' },
    ghost: { background: 'transparent', color: NAVY, boxShadow: 'none', border: `1.5px solid ${NAVY}` },
  };
  return (
    <button onClick={onClick} style={{
      ...styles[variant],
      border: variant === 'ghost' ? styles[variant].border : 'none',
      borderRadius: 999, padding: '14px 28px',
      fontSize: 16, fontWeight: 600, cursor: 'pointer',
      width: full ? '100%' : 'auto',
      fontFamily: '"Sora", -apple-system, system-ui, sans-serif',
      letterSpacing: 0.1,
      transition: 'transform 0.15s, box-shadow 0.15s',
      ...style,
    }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.97)'}
      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {children}
    </button>
  );
}

// ── Subject pill ───────────────────────────────────────────────
function SubjectChip({ subject, active = false, onClick }) {
  return (
    <button onClick={onClick} style={{
      flexShrink: 0,
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '9px 16px 9px 12px', borderRadius: 999,
      background: active ? NAVY : '#fff',
      color: active ? '#fff' : NAVY,
      border: active ? 'none' : `1px solid ${HAIR}`,
      fontSize: 14, fontWeight: 600, cursor: 'pointer',
      fontFamily: '"Sora", -apple-system, system-ui, sans-serif',
      boxShadow: active ? '0 4px 12px rgba(27,42,107,0.22)' : '0 2px 6px rgba(15,26,74,0.04)',
      transition: 'all 0.15s',
    }}>
      <span style={{
        width: 22, height: 22, borderRadius: '50%',
        background: active ? 'rgba(255,255,255,0.18)' : subject.color,
        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 700,
      }}>{subject.emoji}</span>
      {subject.name}
    </button>
  );
}

window.TUDO_NAVY = NAVY;
window.TUDO_NAVY_DEEP = NAVY_DEEP;
window.TUDO_LAVENDER = LAVENDER;
window.TUDO_LAVENDER_LIGHT = LAVENDER_LIGHT;
window.TUDO_INK = INK;
window.TUDO_MUTED = MUTED;
window.TUDO_HAIR = HAIR;
Object.assign(window, { Icon, Avatar, GradientBg, TudoHeader, TabBar, PillBtn, SubjectChip });
