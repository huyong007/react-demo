

export default function Input({ callback, type = 'text', disabled = false, readOnly = false, placeholder = '' }) {
    return (
        <input
            type={type}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
            onChange={({ target: { value } }) => callback(value)}
        />
    );
}