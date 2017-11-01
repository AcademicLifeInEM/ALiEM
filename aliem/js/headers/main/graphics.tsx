import * as React from 'react';

export const LogoText = ({ className = '' }: React.HTMLProps<HTMLElement>): any => [
    <svg
        key="logo-text-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="125"
        height="40"
        viewBox="0 0 125 40"
        className={className}
    >
        <path
            d="M15.327 13.148l-3.489 8.925h7.02zM12.894 4.79h5.233l12.496 28.725h-7.14l-2.475-6.086H9.85l-2.393 6.086H.479L12.894 4.79m20.853 0h6.33v22.882h11.725v5.843H33.747V4.79M54.6 13.797h6.086v19.718H54.6zm-.487-6.207a3.4 3.4 0 0 1 1.035-2.496 3.398 3.398 0 0 1 2.495-1.034 3.4 3.4 0 0 1 2.496 1.034 3.399 3.399 0 0 1 1.034 2.496 3.4 3.4 0 0 1-1.034 2.495 3.4 3.4 0 0 1-2.496 1.034 3.4 3.4 0 0 1-2.495-1.034 3.401 3.401 0 0 1-1.035-2.495m11.969-2.8h19.515v5.842H72.411v5.356h12.456v5.842H72.41v5.842h13.916v5.843H66.082V4.79m25.316 0h9.575l6.614 18.744h.08l6.654-18.744h9.535v28.725h-6.33V11.484h-.08l-7.547 22.03h-4.828l-7.262-22.03h-.082v22.03h-6.329V4.79"
            fill="#706d6e"
        />
    </svg>,
    <div key="logo-text-text" className={`${className} logo-text__container`}>
        <span>Academic Life in</span>
        <span>Emergency Medicine</span>
    </div>,
];

export const LogoIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        id="logo-icon"
    >
        <title>Logo Icon</title>
        <path
            d="M7.547 24.716a41.09 41.09 0 0 1 1.491-1.897 2.76 2.76 0 0 1-.317-1.279c-3.236-.704-6.243-.58-8.721-.155V26.8h6.104c.453-.695.931-1.39 1.443-2.084m6.717-3.236c.506.24 1.006.497 1.499.773a2.767 2.767 0 0 1 4.068.288 25.94 25.94 0 0 1 4.244-.932c.695-.09 1.386-.142 2.073-.17a2.77 2.77 0 0 1 .652-1.047 32.29 32.29 0 0 0-2.67-4.917 2.764 2.764 0 0 1-2.776-.47 35.839 35.839 0 0 0-7.38 5.29c.179.358.283.76.29 1.184m.626 2.791c0-.12.01-.237.025-.353a23.461 23.461 0 0 0-1.255-.657 2.768 2.768 0 0 1-3.25.825c-.464.564-.92 1.14-1.362 1.739-.24.324-.47.65-.697.976h2.644a39.163 39.163 0 0 1 3.908-2.266 2.845 2.845 0 0 1-.014-.264m12.314 9.274V26.8h1.679a38.42 38.42 0 0 0-.427-1.698 2.772 2.772 0 0 1-2.289-1.796 21.11 21.11 0 0 0-1.851.153 23.744 23.744 0 0 0-3.88.852 2.764 2.764 0 0 1-.229 1.064c2.532 2.168 4.867 4.894 6.997 8.17m-8.273-6.81a2.763 2.763 0 0 1-3.222-.498c-.72.365-1.422.753-2.107 1.16V40h13.602v-2.87c-2.458-4.326-5.22-7.797-8.273-10.395m1.777-18.198c.545.515 1.1 1.08 1.658 1.688a2.766 2.766 0 0 1 2.998 1.006 42.08 42.08 0 0 1 1.84-.637V0H13.6v3.365a34.357 34.357 0 0 1 7.106 5.172m10.469 15.181a2.783 2.783 0 0 1-.928.972 40.9 40.9 0 0 1 .526 2.11h7.8c-2.39-1.518-4.862-2.548-7.398-3.082M9.351 19.77a2.767 2.767 0 0 1 3.303-.756 38.371 38.371 0 0 1 7.777-5.542 2.767 2.767 0 0 1 .417-2.144c-.459-.49-.93-.97-1.422-1.436A32.454 32.454 0 0 0 13.6 5.518v7.681H0v6.277c2.67-.425 5.883-.505 9.351.293m17.852-6.57v-.722a39.13 39.13 0 0 0-1.29.458c-.009.49-.145.948-.376 1.345a34.935 34.935 0 0 1 2.9 5.315 2.772 2.772 0 0 1 3.06 2.28c3.214.665 6.324 2.06 9.307 4.177V13.199H27.203"
            fill="#00b092"
        />
    </svg>
);

export const Icons = {
    facebook: () => (
        <svg
            aria-labelledby="simpleicons-facebook-icon"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title id="simpleicons-facebook-icon">Facebook icon</title>
            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
        </svg>
    ),
    googleplus: () => (
        <svg
            aria-labelledby="simpleicons-googleplus-icon"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title id="simpleicons-googleplus-icon">Google+ icon</title>
            <path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.331 3.295-2.604 0-4.731-2.16-4.731-4.823 0-2.662 2.122-4.822 4.728-4.822 1.485 0 2.479.633 3.045 1.178l2.073-1.994c-1.33-1.245-3.056-1.995-5.115-1.995C3.412 4.365 0 7.785 0 12s3.414 7.635 7.635 7.635c4.41 0 7.332-3.098 7.332-7.461 0-.501-.054-.885-.12-1.265H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.181h2.184v2.184h2.189V13.09H24" />
        </svg>
    ),
    rss: () => (
        <svg
            aria-labelledby="simpleicons-rss-icon"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title id="simpleicons-rss-icon">RSS icon</title>
            <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z" />
        </svg>
    ),
    soundcloud: () => (
        <svg
            aria-labelledby="simpleicons-soundcloud-icon"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title id="simpleicons-soundcloud-icon">SoundCloud icon</title>
            <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.307c0-.148-.12-.27-.271-.27m1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.045-.029-.105-.044-.165-.044s-.119.015-.165.044c-.09.054-.149.15-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18.058.061.142.104.234.104.08 0 .158-.044.209-.09.058-.06.091-.135.091-.225l.015-.24.117-2.203-.135-6.086c0-.104-.061-.193-.135-.239l-.002-.022zm1.006-.547c-.045-.045-.09-.061-.15-.061-.074 0-.149.016-.209.061-.075.061-.119.15-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637c0-.12-.074-.221-.165-.277m8.934 3.777c-.405 0-.795.086-1.139.232-.24-2.654-2.46-4.736-5.188-4.736-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952" />
        </svg>
    ),
    twitter: () => (
        <svg
            aria-labelledby="simpleicons-twitter-icon"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title id="simpleicons-twitter-icon">Twitter icon</title>
            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
        </svg>
    ),
};