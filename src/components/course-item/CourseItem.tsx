import React, { useEffect, useState } from 'react'
import { CourseItem as Item, Fraction } from '../../services/storage'
import {
    Grid,
    Typography,
    TextField,
    InputAdornment,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core'

interface Props {
    item: Item
    handleItemChange: (item: Item) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textfield: {
            // width: '10%',
        },
        root: {
            padding: theme.spacing(1),
        },
        inputContainer: {
            justifyContent: 'space-between',
        },
    }),
)

function gradeToString(grade: Fraction | number | undefined): string {
    if (!grade) return ''
    if (typeof grade === 'number') return String(grade * 100)
    return `${grade.numerator}/${grade.denominator}`
}

function parseGrade(
    grade: string,
): { valid: boolean; result: number | Fraction | undefined } {
    let newGrade: number | Fraction | undefined
    // Division regexp
    const division = /^(\d+(\.\d+)?)\/(\d+(\.\d+)?)$/
    if (grade === '') {
        newGrade = undefined
    } else if (!isNaN(Number(grade))) {
        newGrade = Number(grade) / 100
    } else {
        const match = grade.match(division)
        if (!match) {
            return { valid: false, result: undefined }
        }
        const numerator = Number(match[1])
        const denominator = Number(match[3])
        newGrade = { numerator, denominator }
    }
    return { valid: true, result: newGrade }
}

export const CourseItem: React.FC<Props> = ({
    item,
    handleItemChange,
}: Props) => {
    const classes = useStyles()

    const [weight, setWeight] = useState(String(item.weight * 100))
    const [weightErr, setWeightErr] = useState(false)
    const [grade, setGrade] = useState(gradeToString(item.grade))
    const [gradeErr, setGradeErr] = useState(false)

    const handleGradeChange = (grade: string) => {
        const { valid, result } = parseGrade(grade)
        if (!valid) {
            setGradeErr(true)
            return
        }
        setGradeErr(false)
        const newItem = { ...item, grade: result }
        handleItemChange(newItem)
    }

    const handleWeightChange = (weight: string) => {
        const newWeight = Number(weight) / 100
        if (isNaN(newWeight)) {
            setWeightErr(true)
            return
        }
        setWeightErr(false)
        const newItem = { ...item, weight: newWeight }
        handleItemChange(newItem)
    }

    useEffect(() => {
        setWeight(String(item.weight * 100))
        setGrade(gradeToString(item.grade))
    }, [item])

    return (
        <Grid container direction="column" className={classes.root}>
            <Typography>{item.name}</Typography>
            <Grid container direction="row" className={classes.inputContainer}>
                <TextField
                    variant="filled"
                    label="weight"
                    value={weight}
                    onChange={event => setWeight(event.target.value)}
                    onBlur={event => handleWeightChange(event.target.value)}
                    error={weightErr}
                    // InputProps={{
                    //     startAdornment: (
                    //         <InputAdornment position="end">
                    //             {/* <AccountCircle /> */}
                    //         </InputAdornment>
                    //     ),
                    // }}
                />
                <TextField
                    variant="filled"
                    label="grade"
                    value={grade}
                    onChange={event => setGrade(event.target.value)}
                    onBlur={event => handleGradeChange(event.target.value)}
                    error={gradeErr}
                />
            </Grid>
        </Grid>
    )
}
