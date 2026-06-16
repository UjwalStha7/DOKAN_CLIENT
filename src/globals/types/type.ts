
export const Status = {
    SUCCESS : 'success',
    LOADING : 'loading',
    ERROR : 'error'
} as const

export type StatusType = typeof Status[keyof typeof Status];

