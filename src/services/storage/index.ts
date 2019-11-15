import { course1 } from './mock'

export interface Course {
    name: string
    destiredGrade: number
    items: CourseItem[]
}

export interface CourseItem {
    weight: number
    name: string
    grade?: number
}

export function store(course: Course) {
    return Promise.resolve(course)
}

export function load() {
    return Promise.resolve(course1)
}
