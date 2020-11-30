import Button from '../block/button';
import styles from './filter.module.scss';

export default function Filter({ onClickFilter, onLaunchStatusFilter, onLandStatusFilter }) {
    const START_YEAR = 2006;

    const onClickHandler = ( e ) => {
       onClickFilter(e.target.id);
    }

    const onLaunchStatusToggle = ( e ) => {
        onLaunchStatusFilter( e.target.value );
    }

    const onLandStatusToggle = ( e ) => {
        onLandStatusFilter( e.target.value );
    }

    return <div className={ styles.dataFilter }>
            <h3>Filters</h3>
            <span>Launch year</span>
            <br/>
            { Array.from({ length: 15}, (x, i) => i + START_YEAR).map( (title, index) => {
                return <Button index = { index } id = { title } onClickHandler = { onClickHandler }>{ title }</Button>
            })}
            <span>
                Successful launch
            </span>
            <Button onClickHandler = { onLaunchStatusToggle } value='true'>True</Button>  
            <Button onClickHandler = { onLaunchStatusToggle } value='false'>False</Button>
            <span>
                Successful landing
            </span>
            <Button onClickHandler = { onLandStatusToggle } value='true'>True</Button>  
            <Button onClickHandler = { onLandStatusToggle } value='false'>False</Button>
        </div>
}