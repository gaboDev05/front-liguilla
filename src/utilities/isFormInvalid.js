/** Chequea si el campo es valido o no */

export const isFormValid = err => {
    if (Object.keys(err).length > 0) return true
    return false
}