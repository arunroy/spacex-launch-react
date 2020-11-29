import Button from '../block/button'
import styles from './filter.module.scss';

export default function Filter() {
    const START_YEAR = 2006;

    return <div className={ styles.dataFilter }>
            FILTER APPEARS HERE
            <br></br>
            <span>Launch year</span>
            <br/>
            { Array.from({ length: 15}, (x, i) => i + START_YEAR).map( title => {
                return <Button>{ title }</Button>
            })}
            <br></br>
            Successful launches
            <br></br>
            <Button>True</Button>  
            <Button>False</Button>
            <br></br>
            Successful landing    
            <br></br>
            <Button>True</Button>
            <Button>False</Button>
            <br></br>

        </div>
}