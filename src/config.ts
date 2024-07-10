
export const defaultLocale = "pl" as const
export const locales = ["pl", "en"] as const

export const pathnames = {
    "/": {
        pl: "/",
        en: "/",
    },
    "/page": {
        pl: "/strona",
        en: "/page",
    },
}

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
