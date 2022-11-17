function Usuario() {

    const nome = {
        firtName: "aldalberto",
        secondName: "vitalino"
    }
    
    return (
        <p>{name(nome)} </p>
    )
    function name(text){
        return text.firtName + ' ' + text.secondName;
    }
   
}



export default Usuario