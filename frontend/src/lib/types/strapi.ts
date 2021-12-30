
export interface I_SERVER_ATTRIBUTES {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface I_SERVER_RESPONSE<T extends I_SERVER_ATTRIBUTES> {
    data: {
        attributes: T,
        meta: {
            [key: string]: any
        }
    }
}

export interface I_SERVER_MAIN_MENU extends I_SERVER_ATTRIBUTES {
    entries: Array<I_SERVER_MENU_ENTRY>
}

export interface I_SERVER_MENU_ENTRY {
    __component: string;
    title: string;
    id: number;
}

export interface I_SERVER_MENU_ENTRY_SIMPLE {
    __component: "menu.menu-entry-simple",
    link: string;
    external: boolean;

}
export interface I_SERVER_MENU_ENTRY_PAGE {
    __component: "menu.menu-entry-page",
}

export interface I_SERVER_MENU_ENTRY_REKURSIV {
    __component: "menu.menu-entry-rekursive",
    entries: Array<I_SERVER_MENU_ENTRY_PAGE>
}