import { getSupabase } from './supabase.js';

export const getShoppingItems = (userId) => {
  const supabase = getSupabase();

  return supabase.from('shopping_item').select('*').eq('user_id', userId);
};

export const addShippingItem = (product, amount, unit, userId) => {
  const supabase = getSupabase();
  return supabase.from('shopping_item').insert({
    product: product,
    amount: amount,
    unit: unit,
    user_id: userId,
  });
};
