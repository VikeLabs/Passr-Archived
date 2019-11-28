import { Course, CourseItem, User } from './index'

const course1items: CourseItem[] = [
    { name: 'Assignment 1', weight: 0.07, grade: 1 },
    { name: 'Assignment 2', weight: 0.07, grade: 1 },
    { name: 'Assignment 3', weight: 0.07 },
    { name: 'Assignment 4', weight: 0.11 },
    {
        name: 'Midterm 1',
        weight: 0.22,
        grade: { numerator: 19, denominator: 22 },
    },
    {
        name: 'Midterm 2',
        weight: 0.22,
        grade: { numerator: 20, denominator: 22 },
    },
    { name: 'Midterm 3', weight: 0.24 },
]

export const course1: Course = {
    name: 'CSC 370',
    desiredGrade: 0.8,
    items: course1items,
}

const course2: Course = {
    name: 'ECE 355',
    desiredGrade: 0.75,
    items: [
        { name: 'Midterm1', weight: 0.2 },
        { name: 'Assignment 1', weight: 0.5 / 6 },
        { name: 'Assignment 2', weight: 0.5 / 6 },
        { name: 'Assignment 3', weight: 0.5 / 6 },
        { name: 'Assignment 4', weight: 0.5 / 6 },
        { name: 'Assignment 5', weight: 0.5 / 6 },
        { name: 'Assignment 6', weight: 0.5 / 6 },
        { name: 'Lab', weight: 0.3 },
        { name: 'final', weight: 0.45 },
    ],
}

const course3: Course = {
    name: 'SENG 350',
    desiredGrade: 0.8,
    items: [
        { name: 'Quiz 1', weight: 0.02 },
        { name: 'Quiz 2', weight: 0.02 },
        { name: 'Quiz 3', weight: 0.02 },
        { name: 'Quiz 4', weight: 0.02 },
        { name: 'Quiz 5', weight: 0.02 },
        { name: 'Midterm', weight: 0.25 },
        { name: 'Project', weight: 0.55 },
        { name: 'Class Participation', weight: 0.1 },
    ],
}

export const user1: User = {
    name: 'Burt Macklin',
    courses: [course1, course2, course3],
    userId: '0ab128adf',
    desiredGpa: 7,
}
