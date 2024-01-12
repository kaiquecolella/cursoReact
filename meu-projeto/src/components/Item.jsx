import PropTypes  from 'prop-types'

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired,
}
Item.defaultProps = {
    marca: 'faltou marca',
    ano_lancamento: 'faltou ano',
}
export default Item