import { createClient } from '@supabase/supabase-js'
import { useSession } from 'next-auth/react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "";

export default function LoginSupa() {
	const { data: session, status } = useSession();
	const supabase = createClient(supabaseUrl, supabaseKey, {
		db: {
			schema: 'next_auth',
		},
		auth: {
			autoRefreshToken: true,
			persistSession: true,
			detectSessionInUrl: true,
		},
		global: {
		},
	});

};
