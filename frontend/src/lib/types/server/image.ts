import type { I_SERVER_ATTRIBUTES } from "../strapi";

export interface I_SERVER_IMAGE extends I_SERVER_ATTRIBUTES {
    "name": string;
    "alternativeText": string;
    "caption": string;
    "width":  number;
    "height":  number;
    "formats": {
        "thumbnail": {
            "name": string;
            "hash": string;
            "ext": string;
            "mime": string;
            "width":  number;
            "height":  number;
            "size":  number;
            "path": null,
            "url": string;
        },
        "large": {
            "name": string;
            "hash": string;
            "ext": string;
            "mime": string;
            "width":  number;
            "height":  number;
            "size":  number;
            "path": null,
            "url": string;
        },
        "medium": {
            "name": string;
            "hash": string;
            "ext": string;
            "mime": string;
            "width":  number;
            "height":  number;
            "size":  number;
            "path": null,
            "url": string;
        },
        "small": {
            "name": string;
            "hash": string;
            "ext": string;
            "mime": string;
            "width":  number;
            "height":  number;
            "size":  number;
            "path": null,
            "url": string;
        }
    },
    "hash": string;
    "ext": string;
    "mime": string;
    "size": number;
    "url": string;
    "previewUrl": null,
    "provider": string;
    "provider_metadata": null,
} 