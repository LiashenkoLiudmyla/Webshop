export const Input = ({ label, ...props }) => {  
    return (
        <>
            <label htmlFor={props.name} className='form-label'>{label}</label>
            <input {...props} />
        </>
    );
}



// export const Input = ({ name, className, placeholder, type='text', value, onChange, onBlur, label }) => {  
//     return(
//         <>
//             <label htmlFor={name} className='form-label'>{label}</label>
//             <input
//                 id={name}
//                 name={name}
//                 className={className}
//                 placeholder={placeholder}
//                 type={type}
//                 value={value}
//                 onChange={onChange}
//                 onBlur={onBlur}
//             />
//         </>
//     )
// }