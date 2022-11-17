import { useNavigate } from 'react-router-dom'

function AboutPages() {

    const navegation = useNavigate();
    return (
        
        <div>
            <button class="waves-effect waves-light btn-small" onClick={()=>navegation('/usuario')}>clique aqui</button>
        </div> 
    )
}
export default AboutPages;