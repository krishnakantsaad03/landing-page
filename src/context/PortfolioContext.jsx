import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import * as staticData from '../data/portfolio';

const PortfolioContext = createContext(null);

const defaults = {
  personalInfo:   staticData.personalInfo,
  stats:          staticData.stats,
  experience:     staticData.experience,
  education:      staticData.education,
  certifications: staticData.certifications,
  achievements:   staticData.achievements,
  projects:       staticData.projects,
  skills:         staticData.skills,
};

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(defaults);

  useEffect(() => {
    if (!supabase) return; // no env vars → keep static data

    async function fetchAll() {
      try {
        const [
          { data: pi },
          { data: stats },
          { data: exp },
          { data: edu },
          { data: certs },
          { data: ach },
          { data: proj },
          { data: skillRows },
        ] = await Promise.all([
          supabase.from('personal_info').select('*').single(),
          supabase.from('stats').select('*').order('sort_order'),
          supabase.from('experience').select('*').order('sort_order'),
          supabase.from('education').select('*').order('sort_order'),
          supabase.from('certifications').select('*').order('sort_order'),
          supabase.from('achievements').select('*').order('sort_order'),
          supabase.from('projects').select('*').order('sort_order'),
          supabase.from('skills').select('*').order('category, sort_order'),
        ]);

        // Normalize personal_info snake_case → camelCase
        const personalInfo = pi ? {
          ...pi,
          yearsOfExperience: pi.years_of_experience,
          currentRole:       pi.current_role,
        } : defaults.personalInfo;

        // Group skills by category
        const skills = {};
        skillRows?.forEach(({ name, level, category }) => {
          if (!skills[category]) skills[category] = [];
          skills[category].push({ name, level });
        });

        // Achievements as plain string array
        const achievements = ach?.map((a) => a.text) ?? defaults.achievements;

        setData({
          personalInfo,
          stats:          stats          ?? defaults.stats,
          experience:     exp            ?? defaults.experience,
          education:      edu            ?? defaults.education,
          certifications: certs          ?? defaults.certifications,
          achievements,
          projects:       proj           ?? defaults.projects,
          skills:         Object.keys(skills).length ? skills : defaults.skills,
        });
      } catch (err) {
        console.warn('Supabase fetch failed — using static data:', err.message);
      }
    }

    fetchAll();
  }, []);

  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolioData() {
  return useContext(PortfolioContext);
}
