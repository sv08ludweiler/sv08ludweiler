import { envVariables } from '$lib/utils/variables';
import type { EndpointOutput } from '@sveltejs/kit';



export async function get(): Promise<EndpointOutput> {

    let serverBase = envVariables.serverBasePath;
    let apiToken = envVariables.apiToken;

    const url = serverBase + '/api/main-menu?populate=*';

    const res = await fetch(url, {
        credentials: "include",
        mode: 'cors',
        headers: {
            Authorization: `Bearer ${apiToken}`
        }
    });
    const data = await res.json();

    return { body: data };
}


