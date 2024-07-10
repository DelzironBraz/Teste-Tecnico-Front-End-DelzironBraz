import { CircularProgress } from '@mui/material';
import './Loading.scss';

const Loading = () => {
    return (
        <section className='loading'>
            <CircularProgress size={100} />
        </section>
    )
}

export default Loading