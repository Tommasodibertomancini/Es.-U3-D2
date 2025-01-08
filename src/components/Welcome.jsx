import { Alert } from 'react-bootstrap'

const Welcome = function () {
    return (
        <Alert className='text-dark text-center mt-2' variant="white">
        <Alert.Heading className='fs-1 fw-bolder'>Benvenuto in EPIBOOKS</Alert.Heading>
        <p className='fs-5'>
        Scopri un mondo di conoscenza e avventura: la tua libreria online per leggere, imparare e crescere, ovunque tu sia!
        </p>
        </Alert>
    )
}

export default Welcome;