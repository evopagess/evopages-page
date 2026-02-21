import { createClient } from '@supabase/supabase-js';

// ⚠️ ATENÇÃO: SUBSTITUA PELAS SUAS CHAVES REAIS DO SUPABASE (Configurações > API)
// Acesse https://supabase.com, crie um projeto e copie a "Project URL" e "anon public key".
// Os valores abaixo são placeholders para evitar que o site quebre ao iniciar (erro Invalid URL).

const SUPABASE_URL = 'https://seu-projeto.supabase.co'; 
const SUPABASE_ANON_KEY = 'sua-chave-publica-anonima';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);