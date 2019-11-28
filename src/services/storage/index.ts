import { user1 } from './mock'

interface DateRange {
    start: Date
    end: Date
}

export interface Fraction {
    numerator: number
    denominator: number
}

export interface Course {
    name: string
    desiredGrade: number
    items: CourseItem[]
    crn?: number
    dateRange?: DateRange
}

export interface CourseItem {
    weight: number
    name: string
    grade?: number | Fraction
    dueDate?: Date
}

export interface User {
    name: string
    courses: Course[]
    userId: string
    desiredGpa: number
}

/**
 * Currently doesn't do anything, but can be used as a fake call to store user data
 * @param id User id to store info for
 * @param Partial<User> Partial user object for updating the user's info
 */
export function store(id: string, user: Partial<User>) {
    ;[user, id] // no-op
    return Promise.resolve('Success')
}

/**
 * Currently set id to anything, and it will return mock data
 * @param id User id
 */
export function loadUser(id: string) {
    id // no-op
    return Promise.resolve(user1)
}
