export const SUPABASE_URL = 'https://rkjhmlqyjlxjjrbqpqfo.supabase.co'; 

const BASE_URL = `${SUPABASE_URL}/storage/v1/object/public/assets/images`;

export const imagePaths = Array.from({ length: 48 }, (_, i) => ({
    path: `${BASE_URL}/fro${i + 1}.jpeg`,
    alt: `Image ${i + 1}`,
}));

export const videoPaths = {
    "coffee-1": `${SUPABASE_URL}/storage/v1/object/public/assets/videos/coffee-1(1)(1).mp4`,
    "coffee-2": `${SUPABASE_URL}/storage/v1/object/public/assets/videos/coffee-2(1)(1).mp4`,
}
