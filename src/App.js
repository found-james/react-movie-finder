import Form from './components/Form.js'
import MovieDisplay from './components/MovieDisplay.js';

export default function App (){

    const apiKey='d1d01b90';
    const[ movie, setMovie ] = useState(null);

    

    return (
        <>
            <MovieDisplay />
            <Form />
        </>
    ) 
}