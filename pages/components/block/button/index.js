import styles from './button.module.scss';

export default function Button({ id, index, value, children, onClickHandler }) {
    return <button className={ styles.button } value = { value } id = { id } key = { index } onClick={ onClickHandler }>{ children }</button>
}