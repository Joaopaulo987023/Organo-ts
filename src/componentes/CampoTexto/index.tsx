import './CampoTexto.css'
interface CampoTextoProps{
    aoAlterado:(valor : string)=> void //função que não retorna nada, e tem param tipo string
    placeholder:string
    label:string
    valor:string
    obrigatorio?:boolean
    tipo ?: "text" |"email"|"number"|"password"|"date"
    
}
const CampoTexto = ({aoAlterado,placeholder,label,valor,obrigatorio=false, tipo="text"}:CampoTextoProps) => {

    const placeholderModificada = `${placeholder}` 

    const aoDigitado = (evento:React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} 
            onChange={aoDigitado} 
            required={obrigatorio} 
            placeholder={placeholderModificada}
            type={tipo}
            />
        </div>
    )
}

export default CampoTexto