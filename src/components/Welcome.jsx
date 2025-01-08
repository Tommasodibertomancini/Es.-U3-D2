import { Alert } from 'react-bootstrap'

const Welcome = function () {
    return (
        <Alert className='text-dark text-center mt-2' variant="white">
        <Alert.Heading>Benvenuto in EPIBOOKS</Alert.Heading>
        <p>
        Scopri un mondo di conoscenza e avventura: la tua libreria online per leggere, imparare e crescere, ovunque tu sia!
        </p>
        </Alert>
    )
}

export default Welcome;