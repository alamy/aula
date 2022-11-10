import './Home.css';

function Home(props) {
    return (
        <div class="conteudo">
            <h1>{props.name}</h1>
        <br />
        <h1>{props.animal}</h1>
        </div> 
    )
}
export default Home;