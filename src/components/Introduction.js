import '../App.css';

function Introduction(props) {
    return (
        <div>
            <header>
                <h1>Introduction</h1>
                {/* props.name digunakan untuk memanggil atribut yang ada d index. name bisa d ganti dengan apa saja */}
                <p>Perkenalkan Nama Saya {props.name}</p>
            </header>
        </div>
    );
}

export default Introduction;
