import { URL } from 'url'

export function urlParse(url: string) {
    const uri = new URL(url)
    return {
        protocol: uri.protocol.replace(/:$/, '').trim(),
        port: uri.port,
        host: decodeURIComponent(uri.hostname).trim(),
        username: decodeURIComponent(uri.username).trim(),
        password: decodeURIComponent(uri.password).trim(),
        pathname: decodeURIComponent(uri.pathname.slice(1)).trim(),
        query: uri.searchParams,
    }
}
