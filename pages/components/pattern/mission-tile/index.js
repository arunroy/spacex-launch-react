import styles from './mission-tile.module.scss';

export default function MissionTile({ id, data }) {

    MissionTile.defaultProps = {
        id: null,
        data: null
    }
    return <div className={ styles.missionTile} aria-label={`mission details for flight number ${ data && data.flight_number }`}>
        <img src = { data && data.links && data.links.mission_patch_small} alt='space mission logo'></img>
        <span className={ styles.missionName } id='missionName'>
            { `${ data && data.mission_name } #${ data && data.flight_number }`}
        </span>
        <span> 
            { `Mission ids: ${ data && data.mission_id.map( missionId => (` ${ missionId }`))}` }
        </span>
        <span>{ `Launch Year : ${ data && data.launch_year }` }</span>
        <span>{ `Successful Launch : ${ data && data.launch_success }` }</span>
        <span>{ `Successful Landing : ${ data && data.launch_landing || '' }` }</span>
        
    </div>
}