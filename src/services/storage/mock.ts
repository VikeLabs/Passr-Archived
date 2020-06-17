import { Course, User, Semester } from './index'

export const course1: Course = {
    name: 'CSC 370',
    desiredGrade: 0.8,
    items: [
        {
            name: 'Assignment 1',
            weight: 0.07,
            grade: { numerator: 10, denominator: 10 },
        },
        {
            name: 'Assignment 2',
            weight: 0.07,
            grade: { numerator: 10, denominator: 10 },
        },
        {
            name: 'Assignment 3',
            weight: 0.07,
            grade: { numerator: 8, denominator: 10 },
        },
        {
            name: 'Assignment 4',
            weight: 0.11,
            grade: { numerator: 9, denominator: 10 },
        },
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
    ],
}

export const course2: Course = {
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

const course4: Course = {
    name: 'EPHE 155',
    desiredGrade: 0.9,
    items: [
        { name: 'Assignemnt 1', weight: 0.05 },
        { name: 'Assignment 2', weight: 0.1 },
        { name: 'Assignemnt 3', weight: 0.05 },
        { name: 'Assignemnt 4', weight: 0.05 },
        { name: 'Assignment 5', weight: 0.1 },
        { name: 'Midterm', weight: 0.25 },
        { name: 'Final', weight: 0.4 },
    ],
}

const course5: Course = {
    name: 'CSC 421',
    desiredGrade: 0.75,
    items: [
        { name: 'Assignment 1', weight: 0.05 },
        { name: 'Assignment 2', weight: 0.05 },
        { name: 'Assignment 3', weight: 0.1 },
        { name: 'Assignment 4', weight: 0.1 },
        { name: 'Midterm', weight: 0.2 },
    ],
}

const semester1: Semester = {
    name: 'Fall 2019',
    courses: [course1, course2, course3],
}

const semester2: Semester = {
    name: 'Summer 2020',
    courses: [course4, course5],
}

export const user1: User = {
    name: 'Burt Macklin',
    semesters: [semester1, semester2],
    userId: '0ab128adf',
    defaultSemester: 'Summer 2020', // Temp for maintaining current semester
    desiredGpa: 7,
}
