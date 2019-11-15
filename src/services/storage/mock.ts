import { Course, CourseItem } from './index'

const items: CourseItem[] = [
    { name: 'a1', weight: 0.1, grade: 0.9 },
    { name: 'a2', weight: 0.1, grade: 0.87 },
    { name: 'a3', weight: 0.1 },
    { name: 'midterm1', weight: 0.2, grade: 19 / 22 },
    { name: 'midterm2', weight: 0.2, grade: 20 / 22 },
    { name: 'final', weight: 0.3 },
]

export const course1: Course = {
    name: 'CSC 370',
    destiredGrade: 0.8,
    items,
}
