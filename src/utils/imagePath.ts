const BASE_URL = 'https://assets.frocafe.de';

export const imagePaths = Array.from({ length: 48 }, (_, i) => ({
    path: `${BASE_URL}/images/fro${i + 1}.jpeg`,
    alt: `Image ${i + 1}`,
}));

export const videoPaths = {
    "coffee-1": `${BASE_URL}/videos/coffee1.mp4`,
    "coffee-2": `${BASE_URL}/videos/coffee2.mp4`,
}
