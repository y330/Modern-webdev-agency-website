import "./LocationPin.scss";

const LocationPin = () => {
    return (
        <svg
            className="location-pin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64">
            {/* Rounded square outline */}
            <rect
                className="square"
                x="4"
                y="4"
                width="56"
                height="56"
                rx="8"
                ry="8"
                fill="none"
            />

            {/* Landmark-style location pin */}
            <path
                className="pin"
                fill="none"
                d="M32 20c-6 0-10 4.5-10 10
                0 7 10 14 10 14
                s10-7 10-14
                c0-5.5-4-10-10-10z
                M32 32a2 2 0 1 1 0-4
                2 2 0 0 1 0 4z
                "
            />
        </svg>
    );
};

export default LocationPin;
