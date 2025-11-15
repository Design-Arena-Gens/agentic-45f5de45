'use client';

import { useEffect, useMemo, useState } from 'react';
import { IDEAS, generateIdeas } from '../lib/ideas';

export default function Page() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('rarity');
  const [skills, setSkills] = useState('coding, marketing');
  const [interests, setInterests] = useState('education, gaming');
  const [age, setAge] = useState(16);
  const [hours, setHours] = useState(10);
  const [goal, setGoal] = useState('profit');
  const [generated, setGenerated] = useState([]);
  const [pending, setPending] = useState(false);

  const categories = useMemo(() => ['all', ...Array.from(new Set(IDEAS.map(i => i.category)))], []);

  const filtered = useMemo(() => {
    let items = IDEAS.slice();
    if (category !== 'all') items = items.filter(i => i.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(i => (i.title + ' ' + i.category + ' ' + i.moat + ' ' + i.whyNow).toLowerCase().includes(q));
    }
    if (sort === 'rarity') items.sort((a,b)=>b.rarityScore - a.rarityScore);
    if (sort === 'alpha') items.sort((a,b)=>a.title.localeCompare(b.title));
    return items;
  }, [category, query, sort]);

  async function handleGenerate() {
    setPending(true);
    try {
      const res = await fetch('/api/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        age: Number(age),
        hoursPerWeek: Number(hours),
        skills: skills.split(',').map(s=>s.trim()).filter(Boolean),
        interests: interests.split(',').map(s=>s.trim()).filter(Boolean),
        goal,
      }) });
      const data = await res.json();
      setGenerated(data.ideas || []);
    } catch (_e) {
      setGenerated(generateIdeas({ age: Number(age), hoursPerWeek: Number(hours), skills: skills.split(',').map(s=>s.trim()), interests: interests.split(',').map(s=>s.trim()), goal }));
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    setGenerated(generateIdeas({ age, hoursPerWeek: hours, skills: skills.split(',').map(s=>s.trim()), interests: interests.split(',').map(s=>s.trim()), goal }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      <section className="hero">
        <div className="kicker">Curated for solo teen founders</div>
        <h2>Find a unique, low-saturation idea you can ship fast</h2>
        <p className="small">Filter the library below or generate a tailored short?list based on your skills and schedule.</p>
      </section>

      <section className="section">
        <div className="kicker">Your Profile</div>
        <div className="controls">
          <input className="input" placeholder="Your skills (comma separated)" value={skills} onChange={e=>setSkills(e.target.value)} />
          <input className="input" placeholder="Your interests (comma separated)" value={interests} onChange={e=>setInterests(e.target.value)} />
          <input className="input" type="number" min={13} max={19} value={age} onChange={e=>setAge(e.target.value)} placeholder="Age" />
          <input className="input" type="number" min={2} max={40} value={hours} onChange={e=>setHours(e.target.value)} placeholder="Hours per week" />
          <select value={goal} onChange={e=>setGoal(e.target.value)}>
            <option value="profit">Goal: Profit</option>
            <option value="learning">Goal: Learning</option>
            <option value="impact">Goal: Impact</option>
          </select>
          <button className="button" onClick={handleGenerate} disabled={pending}>{pending ? 'Generating?' : 'Generate Tailored Ideas'}</button>
        </div>
        {generated?.length ? (
          <div>
            <div className="meta">Best matches for you ({generated.length})</div>
            <div className="grid" style={{marginTop:12}}>
              {generated.map(i => <IdeaCard key={i.id} idea={i} highlight />)}
            </div>
          </div>
        ) : null}
      </section>

      <hr className="sep" />

      <section className="section">
        <div className="kicker">Explore Library</div>
        <div className="controls">
          <input className="input" placeholder="Search ideas?" value={query} onChange={e=>setQuery(e.target.value)} />
          <select value={category} onChange={e=>setCategory(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="rarity">Sort: Rarity</option>
            <option value="alpha">Sort: A ? Z</option>
          </select>
          <button className="button secondary" onClick={()=>{ setQuery(''); setCategory('all'); setSort('rarity'); }}>Reset</button>
        </div>
        <div className="grid">
          {filtered.map(i => <IdeaCard key={i.id} idea={i} />)}
        </div>
      </section>
    </div>
  );
}

function IdeaCard({ idea, highlight }) {
  return (
    <div className="card" style={highlight ? { borderColor: '#0ea5e9' } : undefined}>
      <div className="meta">
        <span className="badge">{idea.category}</span>
        <span>Rarity {idea.rarityScore}/10</span>
        {idea.score != null && <span>Match {idea.score}</span>}
      </div>
      <h3>{idea.title}</h3>
      <p className="small">Why now: {idea.whyNow}</p>
      <p>Moat: {idea.moat}</p>
      <p>First steps:
        <ul>
          {idea.firstSteps.map((s, idx) => <li key={idx}>{s}</li>)}
        </ul>
      </p>
      <p className="small">Monetization: {idea.monetization}</p>
    </div>
  );
}
