import type { EndpointOutput } from '@sveltejs/kit';

export async function get(): Promise<EndpointOutput> {

    let strapiToken = 'a95dbbad0ef6f131ca9daed7029e2fcb8e785cdf91298d021e118705859930aaec451309c53f554786fc52dc5daa1bfa26577dc5fb46f1106f078416a3e16f15ceb98ae276921ffee2c04ecd091afea23666ae71499f44fbb54f46b12e1bc61cb345647eb79220ef1e56e4284e317e800842bd01c930b7e071e694db9b7c4026';

    const res = await fetch('http://localhost:1337/api/impressum', {
        credentials: "include",
        mode: 'cors',
        headers: {
            Authorization: `Bearer ${strapiToken}`
        }
    });
    const data = await res.json();

    return { body: data };
}


