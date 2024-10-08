export default function Input(
        ...props: any
    ) {
    const { id, label } = props;
    
    return (
        <p className="control">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} required {...props} />
        </p>
    );
}