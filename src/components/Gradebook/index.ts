import { Gradebook } from './Gradebook'
import { Fraction, Course } from '../../services/storage'

export default { Gradebook }

export function parseGrade(assignGrade: string): Fraction | number {
    const fractionRegex = /^([0-9]+)\/([0-9]+)$/
    const match = assignGrade.match(fractionRegex)
    if (match) {
        return { numerator: Number(match[1]), denominator: Number(match[2]) }
    }
    return Number(assignGrade)
}

export function copyCourse(course: Course): Course {
    return {
        ...course,
        items: course.items.map(item => ({ ...item })),
    }
}
