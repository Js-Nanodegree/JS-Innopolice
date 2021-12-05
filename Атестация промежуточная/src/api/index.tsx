/* eslint-disable max-len */
import {createClient} from '@supabase/supabase-js';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODcwODA3NywiZXhwIjoxOTU0Mjg0MDc3fQ.g2GxLW5mVbIqXSpRIRJLgT0r5WsbNFNDhntAyKZPsCo';
const SUPABASE_URL = 'https://pdhqtgrpzofkpfiaqkjm.supabase.co';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const CLIENT = 'Client';
const POST = 'Post';

export default {
  'auth': async (uuid: string) => {
    const {data, error} = await supabase
      .from(CLIENT)
      .select('*')
      .eq('uudi', uuid);

    if (error) {
      throw new Error(({error}).toString());
    }
    return {data};
  },
  'createPost': async (uuid: string, message: string, title: string, img: any) => {
    const {data, error} = await supabase
      .from(POST)
      .insert([
        {img, message, title, uuid},
      ]);
    if (error) {
      throw new Error(({error}).toString());
    }
    return {data};
  },
  'getAllPost': async () => {
    try {
      const {data, error} = await supabase
        .from(POST)
        .select('*');

      if (error) {
        throw new Error(({error}).toString());
      }

      return {data};
    } catch (e) {
      console.log(e);
    }
  },
  'getAllUser': async () => {
    const {data, error} = await supabase
      .from(CLIENT)
      .select('*');

    if (error) {
      throw new Error(({error}).toString());
    }

    return {data};
  },
  'getCurrentUser': async (uuid: string) => {
    const {data, error} = await supabase
      .from(CLIENT)
      .select('*')
      .eq('uuid', uuid);

    if (error) {
      throw new Error(({error}).toString());
    }
    return {data};
  },
  'getCurrentUserPost': async (uuid: string) => {
    const {data, error} = await supabase
      .from(POST)
      .select('*');

    if (error) {
      throw new Error(({error}).toString());
    }

    return {data};
  },
  'register': async (state: any) => {
    const client = state;
    const {data, error} = await supabase
      .from(CLIENT)
      .insert([
        client,
      ]);
    if (error) {
      throw new Error(({error}).toString());
    }
    return {data};
  },

};
