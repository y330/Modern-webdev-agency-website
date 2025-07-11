import { useEffect, useState } from 'react'
import { AnimatedPage, Button, RouterLink } from '../../components'
import './Error404.scss'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Error404 = () => {
    const [timer, setTimer] = useState<number>(7);
    const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isTimerActive) return;

        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer => timer - 1);
            } else {
                navigate("/");
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    return (
        <AnimatedPage>
            <Helmet>
                <title>404 Error – Page Not Found</title>
                <meta
                    name="description"
                    content="Sorry, the page you’re looking for doesn’t exist or has been moved."
                />
            </Helmet>
            <div className="error404">
                <span>404 Error</span>
                <h1>This page doesn’t exist</h1>
                <p>Unfortunately, the page you’re trying to reach either doesn’t exist or has been moved.</p>
                <div className="gohome">
                    <RouterLink
                        to="/"
                        variant="primary"
                        className="pulsating">
                        Go Home
                    </RouterLink>
                    {isTimerActive && (
                        <>
                            <p>or</p>
                            <p>
                                You’ll be redirected automatically in {timer} seconds
                                <Button
                                    variant="link"
                                    onClick={() => setIsTimerActive(false)}>
                                    Cancel
                                </Button>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Error404;
