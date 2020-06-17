import { user1, course1 } from './mock'

export interface Fraction {
    numerator: number
    denominator: number
}

export interface Course {
    name: string
    desiredGrade: number
    items: CourseItem[]
    crn?: number
}

export interface CourseItem {
    weight: number
    name: string
    grade?: number | Fraction
    dueDate?: Date
}

export interface Semester {
    name: string
    courses: Course[]
}

export interface User {
    name: string
    semesters: Semester[]
    defaultSemester: string
    userId: string
    desiredGpa: number
}

/**
 * Currently doesn't do anything, but can be used as a fake call to store user data
 * @param id User id to store info for
 * @param Partial<User> Partial user object for updating the user's info
 */
export function store(id: string, user: Partial<User>) {
    console.log(`Store: ${id}, ${user}`)
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

export function loadCourse(id: string) {
    id // no-op
    return Promise.resolve(course1)
}
