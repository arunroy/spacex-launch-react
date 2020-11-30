import styles from './mission-tile.module.scss';

export default function MissionTile({ id, data }) {
    return <div className={ styles.missionTile} aria-label={`mission details for flight number ${ data.flight_number }`}>
        <img src = { data.links.mission_patch_small} alt='space mission logo'></img>
        <span className={ styles.missionName } id='missionName'>
            { `${ data.mission_name } #${ data.flight_number }`}
        </span>
        <span> 
            { `Mission ids: ${ data.mission_id.map( missionId => (` ${ missionId }`))}` }
        </span>
        <span>{ `Launch Year : ${ data.launch_year }` }</span>
        <span>{ `Successful Launch : ${ data.launch_success }` }</span>
        <span>{ `Successful Landing : ${ data.launch_landing || '' }` }</span>
        
    </div>
}