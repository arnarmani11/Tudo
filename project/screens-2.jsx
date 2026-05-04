// Túdó — Booking flow, Bookings tab, Chats, Profile

// ── BOOKING FLOW ──────────────────────────────────────────────
function BookingScreen({ teacher, onBack, onConfirm }) {
  const [step, setStep] = React.useState(0); // 0 = pick, 1 = confirm, 2 = success
  const [day, setDay] = React.useState(1);
  const [time, setTime] = React.useState('16:00');
  const [mode, setMode] = React.useState('online');

  const days = [
    { d: 'Mán', n: 5 }, { d: 'Þri', n: 6 }, { d: 'Mið', n: 7 },
    { d: 'Fim', n: 8 }, { d: 'Fös', n: 9 }, { d: 'Lau', n: 10 }, { d: 'Sun', n: 11 },
  ];
  const times = ['10:00','11:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'];
  const taken = ['11:00','15:00','19:00'];

  if (step === 2) {
    return (
      <div style={{ position: 'absolute', inset: 0, background: '#fff',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
        <div style={{
          width: 96, height: 96, borderRadius: '50%',
          background: `linear-gradient(155deg, ${TUDO_NAVY} 0%, ${TUDO_NAVY_DEEP} 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 12px 28px rgba(15,26,74,0.26)',
        }}>{Icon.check(48, '#fff')}</div>
        <div style={{ fontSize: 24, fontWeight: 700, color: TUDO_INK, marginTop: 26,
          fontFamily: '"Sora", system-ui, sans-serif', textAlign: 'center' }}>
          Bókun staðfest! 🎉
        </div>
        <div style={{ fontSize: 14, color: TUDO_MUTED, marginTop: 8, textAlign: 'center', textWrap: 'pretty' }}>
          Þú ert bókuð hjá <b style={{ color: TUDO_INK }}>{teacher.name.split(' ')[0]}</b><br/>
          {days[day].d} {days[day].n}. maí · {time}
        </div>
        <div style={{ marginTop: 32, width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PillBtn variant="primary" full onClick={onConfirm}>Skoða bókanir</PillBtn>
          <PillBtn variant="soft" full onClick={onBack}>Til baka á forsíðu</PillBtn>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#FAFBFE', display: 'flex', flexDirection: 'column' }}>
      <div style={{ paddingTop: 56, padding: '56px 18px 12px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={() => step === 0 ? onBack() : setStep(0)} style={{
          width: 40, height: 40, borderRadius: 999, border: 'none', cursor: 'pointer',
          background: '#fff', boxShadow: '0 2px 6px rgba(15,26,74,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{Icon.back(20, TUDO_NAVY)}</button>
        <div style={{ fontSize: 18, fontWeight: 700, color: TUDO_INK,
          fontFamily: '"Sora", system-ui, sans-serif' }}>
          {step === 0 ? 'Veldu tíma' : 'Staðfesting'}
        </div>
      </div>

      {step === 0 && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 18px 130px' }}>
          {/* teacher mini */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
            background: '#fff', borderRadius: 16, border: `1px solid ${TUDO_HAIR}` }}>
            <Avatar teacher={teacher} size={44} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: TUDO_INK,
                fontFamily: '"Sora", system-ui, sans-serif' }}>{teacher.name}</div>
              <div style={{ fontSize: 12, color: TUDO_MUTED }}>{teacher.subjects[0]}</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: TUDO_NAVY }}>
              {teacher.price.toLocaleString('is-IS')} kr
            </div>
          </div>

          <div style={{ fontSize: 13, fontWeight: 700, color: TUDO_NAVY, textTransform: 'uppercase',
            letterSpacing: 0.6, marginTop: 22, marginBottom: 10,
            fontFamily: '"Sora", system-ui, sans-serif' }}>Maí 2026</div>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {days.map((d, i) => (
              <button key={i} onClick={() => setDay(i)} style={{
                flexShrink: 0, width: 56, padding: '10px 0', borderRadius: 16,
                background: day === i ? TUDO_NAVY : '#fff', color: day === i ? '#fff' : TUDO_INK,
                border: day === i ? 'none' : `1px solid ${TUDO_HAIR}`, cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                fontFamily: 'inherit',
                boxShadow: day === i ? '0 4px 12px rgba(27,42,107,0.22)' : 'none',
              }}>
                <span style={{ fontSize: 11, fontWeight: 600, opacity: 0.7 }}>{d.d}</span>
                <span style={{ fontSize: 18, fontWeight: 700,
                  fontFamily: '"Sora", system-ui, sans-serif' }}>{d.n}</span>
              </button>
            ))}
          </div>

          <div style={{ fontSize: 13, fontWeight: 700, color: TUDO_NAVY, textTransform: 'uppercase',
            letterSpacing: 0.6, marginTop: 22, marginBottom: 10,
            fontFamily: '"Sora", system-ui, sans-serif' }}>Lausir tímar</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {times.map(t => {
              const isTaken = taken.includes(t);
              const isActive = time === t && !isTaken;
              return (
                <button key={t} disabled={isTaken} onClick={() => setTime(t)} style={{
                  padding: '12px 0', borderRadius: 12,
                  background: isActive ? TUDO_NAVY : isTaken ? '#F0F1F6' : '#fff',
                  color: isActive ? '#fff' : isTaken ? '#B5BACA' : TUDO_INK,
                  border: isActive ? 'none' : `1px solid ${TUDO_HAIR}`,
                  cursor: isTaken ? 'not-allowed' : 'pointer',
                  fontSize: 14, fontWeight: 600,
                  textDecoration: isTaken ? 'line-through' : 'none',
                  fontFamily: 'inherit',
                }}>{t}</button>
              );
            })}
          </div>

          <div style={{ fontSize: 13, fontWeight: 700, color: TUDO_NAVY, textTransform: 'uppercase',
            letterSpacing: 0.6, marginTop: 22, marginBottom: 10,
            fontFamily: '"Sora", system-ui, sans-serif' }}>Tegund kennslu</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { id: 'online', label: 'Á netinu', icon: Icon.online },
              { id: 'inperson', label: 'Hjá kennara', icon: Icon.pin },
            ].map(m => {
              const active = mode === m.id;
              return (
                <button key={m.id} onClick={() => setMode(m.id)} style={{
                  flex: 1, padding: '14px 12px', borderRadius: 16,
                  background: active ? TUDO_LAVENDER_LIGHT : '#fff',
                  border: active ? `2px solid ${TUDO_NAVY}` : `1px solid ${TUDO_HAIR}`,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
                  fontFamily: 'inherit',
                }}>
                  {m.icon(18, active ? TUDO_NAVY : TUDO_MUTED)}
                  <span style={{ fontSize: 14, fontWeight: 600,
                    color: active ? TUDO_NAVY : TUDO_INK }}>{m.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {step === 1 && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 18px 130px' }}>
          <div style={{ background: '#fff', borderRadius: 18, border: `1px solid ${TUDO_HAIR}`,
            padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <Avatar teacher={teacher} size={56} />
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: TUDO_INK,
                  fontFamily: '"Sora", system-ui, sans-serif' }}>{teacher.name}</div>
                <div style={{ fontSize: 13, color: TUDO_MUTED }}>{teacher.subjects[0]}</div>
              </div>
            </div>
            <div style={{ height: 1, background: TUDO_HAIR, margin: '18px 0' }} />
            <SummaryRow label="Dagsetning" value={`${days[day].d} ${days[day].n}. maí`} />
            <SummaryRow label="Tími" value={`${time} – ${parseInt(time)+1}:00`} />
            <SummaryRow label="Tegund" value={mode === 'online' ? 'Á netinu' : 'Hjá kennara'} />
            <SummaryRow label="Lengd" value="60 mínútur" />
            <div style={{ height: 1, background: TUDO_HAIR, margin: '14px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontSize: 14, color: TUDO_MUTED, fontWeight: 600 }}>Samtals</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: TUDO_INK,
                fontFamily: '"Sora", system-ui, sans-serif' }}>
                {teacher.price.toLocaleString('is-IS')} kr
              </div>
            </div>
          </div>
          <div style={{ background: TUDO_LAVENDER_LIGHT, borderRadius: 14, padding: 14, marginTop: 14,
            display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            {Icon.shield(20, TUDO_NAVY)}
            <div style={{ fontSize: 12.5, color: TUDO_NAVY, lineHeight: 1.4 }}>
              <b>Þú greiðir ekki strax.</b> Greiðslan fer fram eftir kennslustundina og þú getur afbókað fram að 24 klst fyrir tíma.
            </div>
          </div>
        </div>
      )}

      {/* sticky bottom button */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '16px 18px 26px',
        background: 'linear-gradient(180deg, rgba(250,251,254,0) 0%, #FAFBFE 30%)' }}>
        <PillBtn variant="primary" full onClick={() => step === 0 ? setStep(1) : setStep(2)}>
          {step === 0 ? 'Halda áfram' : 'Staðfesta bókun'}
        </PillBtn>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
      <div style={{ fontSize: 13.5, color: TUDO_MUTED, fontWeight: 500 }}>{label}</div>
      <div style={{ fontSize: 13.5, color: TUDO_INK, fontWeight: 600, whiteSpace: 'nowrap' }}>{value}</div>
    </div>
  );
}

// ── BOOKINGS TAB ──────────────────────────────────────────────
function BookingsScreen({ onTeacher }) {
  const [tab, setTab] = React.useState('upcoming');
  const list = TUDO_BOOKINGS[tab];
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <GradientBg intensity={0.6} />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <TudoHeader showAvatar={false} />
        <div style={{ padding: '6px 22px 8px' }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: TUDO_INK,
            fontFamily: '"Sora", system-ui, sans-serif' }}>Bókanir</div>
        </div>
        {/* tabs */}
        <div style={{ display: 'flex', gap: 8, padding: '6px 22px 14px' }}>
          {[{id:'upcoming',l:'Framundan'},{id:'past',l:'Liðnir tímar'}].map(t => {
            const active = tab === t.id;
            return (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                padding: '8px 16px', borderRadius: 999,
                background: active ? TUDO_NAVY : '#fff',
                color: active ? '#fff' : TUDO_INK,
                border: active ? 'none' : `1px solid ${TUDO_HAIR}`,
                fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                whiteSpace: 'nowrap',
              }}>{t.l}</button>
            );
          })}
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 18px 110px' }}>
          {list.length === 0 && (
            <div style={{ textAlign: 'center', padding: 40, color: TUDO_MUTED, fontSize: 14 }}>
              Engar bókanir
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {list.map(b => {
              const t = TUDO_TEACHERS.find(x => x.id === b.teacherId);
              const isPast = tab === 'past';
              return (
                <button key={b.id} onClick={() => onTeacher(t)} style={{
                  width: '100%', textAlign: 'left', cursor: 'pointer',
                  background: '#fff', border: `1px solid ${TUDO_HAIR}`, borderRadius: 18,
                  padding: 14, boxShadow: '0 4px 14px rgba(15,26,74,0.06)', fontFamily: 'inherit',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Avatar teacher={t} size={48} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: TUDO_INK,
                        fontFamily: '"Sora", system-ui, sans-serif' }}>{t.name}</div>
                      <div style={{ fontSize: 12.5, color: TUDO_MUTED }}>{b.subject}</div>
                    </div>
                    {isPast && b.rated && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3,
                        background: TUDO_LAVENDER_LIGHT, padding: '4px 8px', borderRadius: 999,
                        fontSize: 12, fontWeight: 600, color: TUDO_NAVY }}>
                        {Icon.star(11)} {b.rated}.0
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: 14, marginTop: 12, paddingTop: 12,
                    borderTop: `1px dashed ${TUDO_HAIR}`, fontSize: 12.5, color: TUDO_INK }}>
                    <InfoChip icon={Icon.calendar(13, TUDO_MUTED)}>{b.date}</InfoChip>
                    <InfoChip>{b.time}</InfoChip>
                    <InfoChip>{b.mode}</InfoChip>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoChip({ children, icon }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: TUDO_MUTED, fontWeight: 500, whiteSpace: 'nowrap' }}>
      {icon}
      <span>{children}</span>
    </div>
  );
}

// ── CHAT LIST ─────────────────────────────────────────────────
function ChatsScreen({ onChat }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <GradientBg intensity={0.6} />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <TudoHeader showAvatar={false} />
        <div style={{ padding: '6px 22px 14px' }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: TUDO_INK,
            fontFamily: '"Sora", system-ui, sans-serif' }}>Spjall</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 12px 110px' }}>
          {TUDO_CHATS.map(c => {
            const t = TUDO_TEACHERS.find(x => x.id === c.teacherId);
            return (
              <button key={c.id} onClick={() => onChat(c)} style={{
                width: '100%', textAlign: 'left', cursor: 'pointer',
                background: 'transparent', border: 'none',
                padding: '12px 12px', borderRadius: 16,
                display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'inherit',
              }}>
                <Avatar teacher={t} size={52} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: TUDO_INK,
                      fontFamily: '"Sora", system-ui, sans-serif',
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: 11.5, color: TUDO_MUTED, fontWeight: 500, flexShrink: 0 }}>{c.lastTime}</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 3, gap: 8 }}>
                    <div style={{ fontSize: 13, color: c.unread ? TUDO_INK : TUDO_MUTED,
                      fontWeight: c.unread ? 600 : 400,
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1 }}>
                      {c.lastMessage}
                    </div>
                    {c.unread > 0 && (
                      <div style={{
                        background: TUDO_NAVY, color: '#fff', fontSize: 11, fontWeight: 700,
                        padding: '2px 7px', borderRadius: 999, minWidth: 18, textAlign: 'center',
                      }}>{c.unread}</div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── CHAT THREAD ───────────────────────────────────────────────
function ChatThreadScreen({ chat, onBack }) {
  const t = TUDO_TEACHERS.find(x => x.id === chat.teacherId);
  const [msgs, setMsgs] = React.useState(chat.messages);
  const [draft, setDraft] = React.useState('');
  const send = () => {
    if (!draft.trim()) return;
    setMsgs([...msgs, { from: 'me', text: draft, time: 'núna' }]);
    setDraft('');
    // simulate teacher reply
    setTimeout(() => {
      setMsgs(m => [...m, { from: 'them', text: 'Já, klárlega! 👍', time: 'núna' }]);
    }, 1200);
  };
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#FAFBFE', display: 'flex', flexDirection: 'column' }}>
      <div style={{ paddingTop: 56, padding: '56px 18px 12px',
        display: 'flex', alignItems: 'center', gap: 12,
        borderBottom: `1px solid ${TUDO_HAIR}`, background: '#fff' }}>
        <button onClick={onBack} style={{
          width: 36, height: 36, borderRadius: 999, border: 'none', cursor: 'pointer',
          background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{Icon.back(20, TUDO_NAVY)}</button>
        <Avatar teacher={t} size={36} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14.5, fontWeight: 700, color: TUDO_INK,
            fontFamily: '"Sora", system-ui, sans-serif',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.name}</div>
          <div style={{ fontSize: 11.5, color: '#2BB673', fontWeight: 500 }}>● Á netinu</div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px 100px',
        display: 'flex', flexDirection: 'column', gap: 8 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{
            alignSelf: m.from === 'me' ? 'flex-end' : 'flex-start',
            maxWidth: '78%',
            background: m.from === 'me' ? TUDO_NAVY : '#fff',
            color: m.from === 'me' ? '#fff' : TUDO_INK,
            borderRadius: m.from === 'me' ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
            padding: '10px 14px',
            fontSize: 14, lineHeight: 1.4,
            border: m.from === 'me' ? 'none' : `1px solid ${TUDO_HAIR}`,
            boxShadow: m.from === 'me' ? '0 4px 12px rgba(27,42,107,0.18)' : '0 1px 3px rgba(15,26,74,0.04)',
            textWrap: 'pretty',
          }}>{m.text}</div>
        ))}
      </div>
      {/* composer */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0,
        background: '#fff', borderTop: `1px solid ${TUDO_HAIR}`,
        padding: '10px 14px 26px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1, background: '#F2F3F8', borderRadius: 999,
          padding: '4px 6px 4px 16px', display: 'flex', alignItems: 'center' }}>
          <input value={draft} onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Skrifaðu skilaboð…" style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontSize: 14, padding: '8px 0', fontFamily: 'inherit',
          }}/>
        </div>
        <button onClick={send} style={{
          width: 44, height: 44, borderRadius: '50%',
          background: TUDO_NAVY, border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(27,42,107,0.28)',
        }}>{Icon.send(20)}</button>
      </div>
    </div>
  );
}

// ── PROFILE ───────────────────────────────────────────────────
function ProfileScreen() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <GradientBg intensity={0.5} />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <TudoHeader showAvatar={false} />
        <div style={{ flex: 1, overflowY: 'auto', padding: '6px 18px 110px' }}>
          {/* user card */}
          <div style={{
            background: `linear-gradient(160deg, ${TUDO_NAVY} 0%, ${TUDO_NAVY_DEEP} 100%)`,
            borderRadius: 24, padding: '22px 20px',
            display: 'flex', alignItems: 'center', gap: 16,
            boxShadow: '0 12px 28px rgba(15,26,74,0.20)', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', right: -30, top: -40, width: 140, height: 140,
              borderRadius: '50%', background: 'rgba(184,192,238,0.18)' }}/>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: TUDO_LAVENDER, color: TUDO_NAVY,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24, fontWeight: 700, position: 'relative',
              fontFamily: '"Sora", system-ui, sans-serif',
            }}>LJ</div>
            <div style={{ position: 'relative', flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#fff',
                fontFamily: '"Sora", system-ui, sans-serif' }}>Lísa Jónsdóttir</div>
              <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.74)', marginTop: 2 }}>
                Menntaskóli við Hamrahlíð
              </div>
              <div style={{ display: 'inline-block', marginTop: 8,
                background: 'rgba(255,255,255,0.18)', padding: '3px 10px', borderRadius: 999,
                fontSize: 11, fontWeight: 600, color: '#fff' }}>Nemandi</div>
            </div>
          </div>

          {/* stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 14 }}>
            <StatCard label="Bókanir" value="7" />
            <StatCard label="Kennarar" value="4" />
            <StatCard label="Klst" value="9" />
          </div>

          {/* sections */}
          <SettingsGroup>
            <SettingsRow icon={Icon.bell(18)} label="Tilkynningar" />
            <SettingsRow icon={Icon.card(18)} label="Greiðslumáti" detail="Visa **84" />
            <SettingsRow icon={Icon.globe(18)} label="Tungumál" detail="Íslenska" last />
          </SettingsGroup>

          <SettingsGroup>
            <SettingsRow icon={Icon.shield(18)} label="Friðhelgi & öryggi" />
            <SettingsRow icon={Icon.help(18)} label="Hjálp & aðstoð" last />
          </SettingsGroup>

          <SettingsGroup>
            <SettingsRow icon={Icon.user(18, TUDO_NAVY)} label="Verða kennari á Túdó" badge="Nýtt" last />
          </SettingsGroup>

          <button style={{
            width: '100%', marginTop: 14, padding: '14px 18px', borderRadius: 16,
            background: '#fff', border: `1px solid ${TUDO_HAIR}`, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'inherit',
            color: '#D14343', fontSize: 14.5, fontWeight: 600,
          }}>
            {Icon.logout(18)}
            Skrá út
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 16, padding: '14px 8px',
      border: `1px solid ${TUDO_HAIR}`, textAlign: 'center',
      boxShadow: '0 2px 6px rgba(15,26,74,0.04)',
    }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: TUDO_NAVY,
        fontFamily: '"Sora", system-ui, sans-serif' }}>{value}</div>
      <div style={{ fontSize: 11.5, color: TUDO_MUTED, marginTop: 2, fontWeight: 500 }}>{label}</div>
    </div>
  );
}

function SettingsGroup({ children }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 18, marginTop: 14,
      border: `1px solid ${TUDO_HAIR}`, padding: '4px 16px',
      boxShadow: '0 2px 6px rgba(15,26,74,0.04)',
    }}>{children}</div>
  );
}

function SettingsRow({ icon, label, detail, badge, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0',
      borderBottom: last ? 'none' : `1px solid ${TUDO_HAIR}`,
    }}>
      <div style={{ width: 24, display: 'flex', justifyContent: 'center' }}>{icon}</div>
      <div style={{ flex: 1, fontSize: 14.5, color: TUDO_INK, fontWeight: 500 }}>{label}</div>
      {badge && <div style={{
        background: TUDO_LAVENDER_LIGHT, color: TUDO_NAVY,
        fontSize: 10.5, fontWeight: 700, padding: '3px 8px', borderRadius: 999,
      }}>{badge}</div>}
      {detail && <div style={{ fontSize: 13, color: TUDO_MUTED }}>{detail}</div>}
      {Icon.chevron(14, '#B5BACA')}
    </div>
  );
}

Object.assign(window, {
  BookingScreen, BookingsScreen, ChatsScreen, ChatThreadScreen, ProfileScreen,
});
