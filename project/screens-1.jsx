// Túdó — Splash, Home, Search, Teacher Detail screens

function SplashScreen({ onSignIn, onSignUp }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <GradientBg />
      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'space-between', padding: '120px 32px 140px', zIndex: 2 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
          <img src="assets/tudo-logo.png" alt="Túdó" style={{ width: 220, height: 'auto' }}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '70%', alignItems: 'center' }}>
          <button onClick={onSignIn} style={{
            width: 200, padding: '15px 28px', borderRadius: 999,
            background: 'rgba(255,255,255,0.92)', border: 'none', cursor: 'pointer',
            color: TUDO_INK, fontSize: 16, fontWeight: 600,
            fontFamily: '"Sora", -apple-system, system-ui, sans-serif',
            boxShadow: '0 4px 14px rgba(15,26,74,0.12), 0 1px 0 rgba(255,255,255,0.9) inset',
          }}>Skrá inn</button>
          <button onClick={onSignUp} style={{
            width: 200, padding: '15px 28px', borderRadius: 999,
            background: 'rgba(255,255,255,0.92)', border: 'none', cursor: 'pointer',
            color: TUDO_INK, fontSize: 16, fontWeight: 600,
            fontFamily: '"Sora", -apple-system, system-ui, sans-serif',
            boxShadow: '0 4px 14px rgba(15,26,74,0.12), 0 1px 0 rgba(255,255,255,0.9) inset',
          }}>Stofna aðgang</button>
        </div>
      </div>
    </div>
  );
}

// ── Teacher card (rich) ────────────────────────────────────────
function TeacherCard({ teacher, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: '100%', textAlign: 'left', cursor: 'pointer',
      background: '#fff', border: `1px solid ${TUDO_HAIR}`, borderRadius: 18,
      padding: 14, display: 'flex', gap: 14, alignItems: 'center',
      boxShadow: '0 4px 14px rgba(15,26,74,0.06)',
      fontFamily: 'inherit',
    }}>
      <Avatar teacher={teacher} size={56} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: TUDO_INK,
            fontFamily: '"Sora", system-ui, sans-serif',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 160 }}>
            {teacher.name}
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, color: TUDO_NAVY,
            background: TUDO_LAVENDER_LIGHT, padding: '3px 8px', borderRadius: 6 }}>
            {teacher.degree}
          </div>
        </div>
        <div style={{ fontSize: 12.5, color: TUDO_MUTED, marginBottom: 6, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {teacher.subjects.join(' · ')}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: TUDO_INK, fontWeight: 600 }}>
            {Icon.star(13)}
            <span>{teacher.rating.toFixed(1)}</span>
            <span style={{ color: TUDO_MUTED, fontWeight: 500 }}>({teacher.reviews})</span>
          </div>
          <div style={{
            background: TUDO_LAVENDER_LIGHT, color: TUDO_NAVY,
            padding: '4px 10px', borderRadius: 999,
            fontSize: 12, fontWeight: 700, fontFamily: '"Sora", system-ui, sans-serif',
          }}>{teacher.price.toLocaleString('is-IS')} kr/klst</div>
        </div>
      </div>
    </button>
  );
}

// ── Search bar (visual only) ───────────────────────────────────
function SearchBar({ value, onChange, onFocus, placeholder = 'Leita að kennara eða grein' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 18px', position: 'relative', zIndex: 5 }}>
      <div style={{
        flex: 1, height: 44, borderRadius: 999,
        background: '#fff', border: `1px solid ${TUDO_HAIR}`,
        display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10,
        boxShadow: '0 2px 8px rgba(15,26,74,0.05)',
      }}>
        {Icon.search(18, '#8A8FA8')}
        <input value={value || ''} onChange={(e) => onChange && onChange(e.target.value)} onFocus={onFocus}
          placeholder={placeholder} style={{
          flex: 1, border: 'none', outline: 'none', fontSize: 14,
          background: 'transparent', color: TUDO_INK,
          fontFamily: 'inherit',
        }}/>
        <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 2 }}>
          {Icon.mic(18, TUDO_INK)}
        </button>
      </div>
      <button style={{
        width: 30, height: 30, border: 'none', background: 'transparent', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{Icon.dots(18, TUDO_INK)}</button>
    </div>
  );
}

// ── HOME ──────────────────────────────────────────────────────
function HomeScreen({ onTeacher, onSearch, onSubject }) {
  const featured = TUDO_TEACHERS.slice(0, 3);
  const recommended = TUDO_TEACHERS.slice(2, 6);
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <GradientBg intensity={0.85} />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <TudoHeader showAvatar={false} />
        <div style={{ marginTop: 4 }}>
          <SearchBar onFocus={onSearch} onChange={() => {}} />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 110, marginTop: 18 }}>
          {/* Greeting */}
          <div style={{ padding: '4px 22px 14px' }}>
            <div style={{ fontSize: 13, color: TUDO_MUTED, fontWeight: 500 }}>Halló Lísa 👋</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: TUDO_INK, lineHeight: 1.15,
              fontFamily: '"Sora", system-ui, sans-serif', marginTop: 2, textWrap: 'balance' }}>
              Hvað ertu að læra<br/>þessa dagana?
            </div>
          </div>

          {/* Subject chips */}
          <div style={{ display: 'flex', gap: 8, padding: '4px 18px 6px', overflowX: 'auto',
            scrollbarWidth: 'none' }}>
            {TUDO_SUBJECTS.map(s => (
              <SubjectChip key={s.id} subject={s} onClick={() => onSubject(s)} />
            ))}
          </div>

          {/* Featured carousel */}
          <SectionHeader title="Vinsælir kennarar" action="Sjá alla" onAction={onSearch} />
          <div style={{ display: 'flex', gap: 12, padding: '4px 18px 8px', overflowX: 'auto',
            scrollbarWidth: 'none' }}>
            {featured.map(t => <FeaturedCard key={t.id} teacher={t} onClick={() => onTeacher(t)} />)}
          </div>

          {/* Recommended list */}
          <SectionHeader title="Mælt með fyrir þig" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 18px' }}>
            {recommended.map(t => <TeacherCard key={t.id} teacher={t} onClick={() => onTeacher(t)} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, action, onAction }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 22px 10px' }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: TUDO_INK,
        fontFamily: '"Sora", system-ui, sans-serif' }}>{title}</div>
      {action && <button onClick={onAction} style={{
        border: 'none', background: 'transparent', cursor: 'pointer',
        fontSize: 13, fontWeight: 600, color: TUDO_NAVY, padding: 0,
      }}>{action}</button>}
    </div>
  );
}

function FeaturedCard({ teacher, onClick }) {
  return (
    <button onClick={onClick} style={{
      flexShrink: 0, width: 180, height: 200,
      borderRadius: 22, border: 'none', cursor: 'pointer', padding: 0,
      background: `linear-gradient(155deg, ${teacher.avatarBg} 0%, ${TUDO_NAVY_DEEP} 100%)`,
      color: '#fff', textAlign: 'left', position: 'relative', overflow: 'hidden',
      boxShadow: '0 8px 22px rgba(15,26,74,0.20)',
      fontFamily: 'inherit',
    }}>
      {/* decorative blob */}
      <div style={{
        position: 'absolute', right: -30, top: -30, width: 130, height: 130,
        borderRadius: '50%', background: 'rgba(184,192,238,0.22)',
      }} />
      <div style={{ position: 'relative', padding: 14, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Avatar teacher={teacher} size={52} ring />
        <div style={{ marginTop: 'auto' }}>
          <div style={{ fontSize: 14, fontWeight: 700,
            fontFamily: '"Sora", system-ui, sans-serif',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {teacher.name.split(' ')[0]} {teacher.name.split(' ').slice(-1)[0][0]}.
          </div>
          <div style={{ fontSize: 11.5, opacity: 0.78, marginTop: 2,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {teacher.subjects[0]}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 12, fontWeight: 600 }}>
              {Icon.star(12, '#FFD466')}
              <span>{teacher.rating.toFixed(1)}</span>
            </div>
            <div style={{ fontSize: 11.5, fontWeight: 700,
              background: 'rgba(255,255,255,0.22)', padding: '3px 8px', borderRadius: 999 }}>
              {(teacher.price/1000).toFixed(1)}k kr
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

// ── SEARCH RESULTS ────────────────────────────────────────────
function SearchScreen({ filterSubject, onTeacher, onBack, onSubjectChange }) {
  const [q, setQ] = React.useState('');
  let list = TUDO_TEACHERS;
  if (filterSubject) {
    list = list.filter(t => t.subjectIds.includes(filterSubject.id));
  }
  if (q.trim()) {
    const lq = q.toLowerCase();
    list = list.filter(t => t.name.toLowerCase().includes(lq) ||
      t.subjects.some(s => s.toLowerCase().includes(lq)));
  }
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#FAFBFE', display: 'flex', flexDirection: 'column' }}>
      <div style={{ paddingTop: 56, padding: '56px 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 18px 14px' }}>
          <button onClick={onBack} style={{
            width: 40, height: 40, borderRadius: 999, border: 'none', cursor: 'pointer',
            background: '#fff', boxShadow: '0 2px 6px rgba(15,26,74,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.back(20, TUDO_NAVY)}</button>
          <div style={{ flex: 1, height: 44, borderRadius: 999, background: '#fff',
            border: `1px solid ${TUDO_HAIR}`, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10 }}>
            {Icon.search(18, '#8A8FA8')}
            <input autoFocus value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="Leita…" style={{
              flex: 1, border: 'none', outline: 'none', fontSize: 14, background: 'transparent',
              fontFamily: 'inherit',
            }}/>
          </div>
          <button style={{
            width: 40, height: 40, borderRadius: 999, border: 'none', cursor: 'pointer',
            background: '#fff', boxShadow: '0 2px 6px rgba(15,26,74,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.filter(18, TUDO_NAVY)}</button>
        </div>
      </div>
      {/* subject chips row */}
      <div style={{ display: 'flex', gap: 8, padding: '4px 18px 14px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        <button onClick={() => onSubjectChange(null)} style={{
          flexShrink: 0, padding: '8px 16px', borderRadius: 999,
          background: !filterSubject ? TUDO_NAVY : '#fff',
          color: !filterSubject ? '#fff' : TUDO_NAVY,
          border: !filterSubject ? 'none' : `1px solid ${TUDO_HAIR}`,
          fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
        }}>Allt</button>
        {TUDO_SUBJECTS.map(s => (
          <SubjectChip key={s.id} subject={s} active={filterSubject?.id === s.id}
            onClick={() => onSubjectChange(s)} />
        ))}
      </div>
      <div style={{ padding: '0 22px 8px', fontSize: 13, color: TUDO_MUTED, fontWeight: 500 }}>
        {list.length} kennara{list.length === 1 ? 'r' : 'r'} fundust
        {filterSubject && <> í <span style={{ color: TUDO_NAVY, fontWeight: 700 }}>{filterSubject.name}</span></>}
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 18px 32px',
        display: 'flex', flexDirection: 'column', gap: 10 }}>
        {list.length === 0 && (
          <div style={{ padding: 40, textAlign: 'center', color: TUDO_MUTED, fontSize: 14 }}>
            Engir kennarar fundust 😅<br/>Prófaðu aðra leit.
          </div>
        )}
        {list.map(t => <TeacherCard key={t.id} teacher={t} onClick={() => onTeacher(t)} />)}
      </div>
    </div>
  );
}

// ── TEACHER DETAIL ────────────────────────────────────────────
function TeacherDetailScreen({ teacher, onBack, onBook, onChat }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#FAFBFE', display: 'flex', flexDirection: 'column' }}>
      {/* hero */}
      <div style={{
        background: `linear-gradient(160deg, ${teacher.avatarBg} 0%, ${TUDO_NAVY_DEEP} 100%)`,
        paddingTop: 56, paddingBottom: 28, position: 'relative',
        borderBottomLeftRadius: 28, borderBottomRightRadius: 28,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px 14px' }}>
          <button onClick={onBack} style={{
            width: 40, height: 40, borderRadius: 999, border: 'none', cursor: 'pointer',
            background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.back(20, '#fff')}</button>
          <button style={{
            width: 40, height: 40, borderRadius: 999, border: 'none', cursor: 'pointer',
            background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18,
          }}>♡</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px 24px 0' }}>
          <Avatar teacher={teacher} size={92} ring />
          <div style={{ color: '#fff', fontSize: 22, fontWeight: 700, marginTop: 14,
            fontFamily: '"Sora", system-ui, sans-serif', textAlign: 'center' }}>{teacher.name}</div>
          <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 13.5, marginTop: 4 }}>
            {teacher.subjects.join(' · ')}
          </div>
          <div style={{ display: 'flex', gap: 18, marginTop: 14, color: '#fff', fontSize: 12 }}>
            <Stat label="Mat" value={
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                {Icon.star(12, '#FFD466')}{teacher.rating.toFixed(1)}
              </span>
            }/>
            <Stat label="Umsagnir" value={teacher.reviews} />
            <Stat label="Reynsla" value={teacher.experience} />
          </div>
        </div>
      </div>
      {/* body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 22px 130px' }}>
        <SectionTitle>Um kennarann</SectionTitle>
        <p style={{ fontSize: 14, color: TUDO_INK, lineHeight: 1.55, margin: 0, textWrap: 'pretty' }}>
          {teacher.bio}
        </p>
        <SectionTitle>Greinar</SectionTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {teacher.subjects.map(s => (
            <div key={s} style={{
              background: TUDO_LAVENDER_LIGHT, color: TUDO_NAVY,
              padding: '7px 14px', borderRadius: 999,
              fontSize: 13, fontWeight: 600,
            }}>{s}</div>
          ))}
        </div>
        <SectionTitle>Stig</SectionTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {teacher.levels.map(s => (
            <div key={s} style={{
              background: '#fff', color: TUDO_INK, border: `1px solid ${TUDO_HAIR}`,
              padding: '7px 14px', borderRadius: 999,
              fontSize: 13, fontWeight: 600,
            }}>{s}</div>
          ))}
        </div>
        <SectionTitle>Upplýsingar</SectionTitle>
        <div style={{ background: '#fff', borderRadius: 18, border: `1px solid ${TUDO_HAIR}`, padding: '4px 16px' }}>
          <InfoRow icon={Icon.pin(16)} label="Staðsetning" value={teacher.location} />
          <InfoRow icon={Icon.online(16)} label="Á netinu" value={teacher.online ? 'Já' : 'Nei'} />
          <InfoRow icon={Icon.user(16, TUDO_MUTED)} label="Hjá kennara" value={teacher.inPerson ? 'Já' : 'Nei'} />
          <InfoRow icon={Icon.globe(16, TUDO_MUTED)} label="Tungumál" value={teacher.languages.join(', ')} last />
        </div>
      </div>
      {/* sticky CTA */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(180deg, rgba(250,251,254,0) 0%, #FAFBFE 30%)',
        padding: '20px 18px 26px',
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center',
          background: '#fff', borderRadius: 999, padding: 8,
          boxShadow: '0 8px 24px rgba(15,26,74,0.14)' }}>
          <button onClick={onChat} style={{
            width: 44, height: 44, borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: TUDO_LAVENDER_LIGHT,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>{Icon.chat(20, TUDO_NAVY, true)}</button>
          <div style={{ flex: 1, paddingLeft: 4 }}>
            <div style={{ fontSize: 11, color: TUDO_MUTED, fontWeight: 500 }}>Verð</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: TUDO_INK,
              fontFamily: '"Sora", system-ui, sans-serif', lineHeight: 1.1 }}>
              {teacher.price.toLocaleString('is-IS')} kr<span style={{ fontSize: 12, color: TUDO_MUTED, fontWeight: 500 }}>/klst</span>
            </div>
          </div>
          <button onClick={onBook} style={{
            background: TUDO_NAVY, color: '#fff', border: 'none', cursor: 'pointer',
            borderRadius: 999, padding: '12px 22px', fontSize: 14.5, fontWeight: 700,
            fontFamily: '"Sora", system-ui, sans-serif',
          }}>Bóka tíma</button>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 60 }}>
      <div style={{ fontSize: 15, fontWeight: 700 }}>{value}</div>
      <div style={{ fontSize: 11, opacity: 0.7, marginTop: 1 }}>{label}</div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ fontSize: 13, fontWeight: 700, color: TUDO_NAVY, textTransform: 'uppercase',
      letterSpacing: 0.6, marginTop: 22, marginBottom: 10,
      fontFamily: '"Sora", system-ui, sans-serif' }}>
      {children}
    </div>
  );
}

function InfoRow({ icon, label, value, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '12px 0',
      borderBottom: last ? 'none' : `1px solid ${TUDO_HAIR}`,
    }}>
      <div style={{ width: 24, display: 'flex', justifyContent: 'center', marginRight: 10 }}>{icon}</div>
      <div style={{ flex: 1, fontSize: 13.5, color: TUDO_MUTED, fontWeight: 500 }}>{label}</div>
      <div style={{ fontSize: 13.5, color: TUDO_INK, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

Object.assign(window, {
  SplashScreen, HomeScreen, SearchScreen, TeacherDetailScreen, TeacherCard,
});
