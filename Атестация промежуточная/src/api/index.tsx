/* eslint-disable max-len */
import {createClient} from '@supabase/supabase-js';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODcwODA3NywiZXhwIjoxOTU0Mjg0MDc3fQ.g2GxLW5mVbIqXSpRIRJLgT0r5WsbNFNDhntAyKZPsCo';
const SUPABASE_URL = 'https://pdhqtgrpzofkpfiaqkjm.supabase.co';
import {v4 as uuid} from 'uuid';

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
      return {'data': []};
    }
    return {data};
  },
  'createPost': async (message: any) => {
    const {data, error} = await supabase
      .from(POST)
      .insert([
        message,
      ]);
    if (error) {
      return {'data': []};
    }
    return {data};
  },
  'getAllPost': async () => {
    try {
      const {data, error} = await supabase
        .from(POST)
        .select('*');

      if (error) {
        return {'data': []};
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
      return {'data': []};
    }

    return {data};
  },
  'getCurrentUser': async (uuid: string) => {
    const {data, error} = await supabase
      .from(CLIENT)
      .select('*')
      .eq('uuid', uuid);

    if (error) {
      return {'data': []};
    }
    return {data};
  },
  'getCurrentUserPost': async (uuid: string) => {
    const {data, error} = await supabase
      .from(POST)
      .select('*');

    if (error) {
      return {'data': []};
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
      return {'data': []};
    }
    return {data};
  },
  'updateProfile': async (message: any) => {
    const {data, error} = await supabase
      .from(CLIENT)
      .update(message)
      .match({'uuid': message.uuid});

    if (error) {
      return {'data': []};
    }
    return {data};
  },
  async uploadFile(file: File | undefined) {
    return new Promise((resolve, reject) => {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const formData = new FormData();
          formData.set('name', uuid());
          formData.set('key', '9117375ef66d133ad2ec9f2f5f5a4b54');
          formData.set('image', file);

          fetch('https://api.imgbb.com/1/upload', {
            'body': formData,
            'method': 'POST',
          })
            .then((data) => data.json())
            .then(({data}: any) => {
              return resolve(data);
            })
            .catch((data: any) => {
              return reject(data);
            });
        };
      } else {
        reject(new Error('Invalid data'));
      }
    });
  },
};
