
import { envVariables } from '$lib/utils/variables';
import type { EndpointOutput } from '@sveltejs/kit';
import { objectToQueryString } from '$lib/utils/queryParams';


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }): Promise<EndpointOutput> {

    let serverBase = envVariables.serverBasePath;
    let apiToken = envVariables.apiToken;

    const url = `${serverBase}/api/pages`;


    console.log({ params });


    const queries = {
        populate: '*',
        filters: {
            slug: {
                $eq: 'hygiene'
            }
        }
    }

    const query = objectToQueryString(queries);

    console.log('url', url + '?' + query);


    const res = await fetch(url + '?' + query, {
        credentials: "include",
        mode: 'cors',
        headers: {
            Authorization: `Bearer ${apiToken}`
        }
    });
    const data = await res.json();

    console.log({ data });


    return { body: data };
}


