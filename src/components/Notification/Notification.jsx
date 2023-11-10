import { Option } from './Notification.styled';

export const Notification = ({ message }) => {
    return (
        <div>
            <Option>{ message }</Option>
        </div>
    )
}