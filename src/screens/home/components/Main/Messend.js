const Mesend = (message) => {
    let json = `Добрый день! Пишу по поводу покупки данной сборки: ${message}.`
    window.location.href = `https://wa.me/87760061908?text=${json}`;
}
export default Mesend