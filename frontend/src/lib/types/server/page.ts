import type { I_SERVER_ATTRIBUTES, I_SERVER_RESPONSE } from "../strapi";
import type { I_SERVER_IMAGE } from "./image";

export interface I_SERVER_PAGE extends I_SERVER_ATTRIBUTES {
    title: string,
    headerimage: I_SERVER_RESPONSE<I_SERVER_IMAGE> | null;
    content: string;
}