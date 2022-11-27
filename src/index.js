import { App } from './App/index.js';
import './style.css';

document.body.append(App({}));


import { getSupabase } from './functions/supabase.js';
console.log(getSupabase());