import React from 'react';
import VirusIllustration from '../../../assets/images/virusIllustration.svg';

const TrackCount = ({ Title, Count }) => {
    return (
        <div className="TrackCount">
            <img className="TrackCountImage" src={VirusIllustration} alt="Virus Illustration" />
            <div>
                <p className="TrackCountTitle">{Title}</p>
                <p className="TrackCountCount">{Count}</p>
            </div>
        </div>
    )
}

export default TrackCount
