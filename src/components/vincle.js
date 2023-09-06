export default function Vincle ({children, text, href}) {
    return (
        <a href={href} className="vincle">
            {children}
            <span>{text}</span>
        </a>
    );
}