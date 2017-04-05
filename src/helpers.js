import { OrderedMap } from 'immutable'

export function arrayToMap(arr, Model) {
    return arr.reduce((acc,entity) => {
        const model = Model ? new Model(entity) : entity
        return acc.set(entity.id, model)
    }, new OrderedMap({}))
}

export function mapToArray(immutableMap) {
    return immutableMap.valueSeq().toArray()
}

export function generateRandomId() {
    return Date.now() + Math.random()
}

export function formatDate(date) {
    const formattedDate = new Date(Date.parse(date)).toISOString().split('T')[0]
    return formattedDate
}
