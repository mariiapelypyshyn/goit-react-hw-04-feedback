import { Option } from './Statistics.styled'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
        <h2>Statistics</h2>
        <Option>Good: {good}</Option>
        <Option>Neutral: {neutral}</Option>
        <Option>Bad: {bad}</Option>
        <Option>Total: {total}</Option>
            <Option>Positive feedback: {positivePercentage}%</Option>
            </div>
    )
}