/** Dado un objeto de error y un nombre de entrada, esta funcion filtra el objeto de errores y devuelve el error de entrada. */

export const findInputError = (errors, name) => {
    const filtered = Object.keys(errors)
        .filter(key => key.includes(name))
        .reduce((cur, key) => {
            return Object.assign(cur, { error: errors[key] })
        }, {});
    return filtered
}