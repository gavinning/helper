
export function ok(condition: any, message: string) {
    not(!condition, message)
}

export function not(condition: any, message: string) {
    if (condition) {
        throw new Error(message)
    }
}
