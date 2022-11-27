import { getSupabase } from './supabase.js';

export const getShopingItems = (userId) => {
  const supabase = getSupabase();

  return supabase.from('shopping_item').select('*').eq('user_id', userId);
};

export const addShoppingItem = (product, amount, unit, userId) => {
  const supabase = getSupabase();
  return supabase.from('shopping_item').insert({
    product: product,
    amount: amount,
    unit: unit,
    done: false,
    user_id: userId,
  });
};