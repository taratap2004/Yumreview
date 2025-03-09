import { createContext, useContext, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../app/lib/supabase';
import { ReactNode } from 'react';

const AuthContext = createContext<{ user: Session['user'] | null, session: Session | null }>({ user: null, session: null });
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<Session['user'] | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // ตรวจสอบสถานะการเข้าสู่ระบบเมื่อโหลดแอป
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    // ตรวจจับการเปลี่ยนแปลงสถานะการเข้าสู่ระบบ
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, session }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);