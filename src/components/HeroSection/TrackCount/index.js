import React from 'react';
import VirusIllustration from '../../../assets/images/virusIllustration.svg';

const TrackCount = ({ Title, Count }) => {
    return (
        <div className="d-flex align-items-center py-3" style={{ color: '#fff' }}>
            <img className="pe-2" src={VirusIllustration} />
            <div>
                <p className="m-0" style={{ fontSize: '14px' }}>{Title}</p>
                <p className="m-0" style={{ fontSize: '24px' }}>{Count}</p>
            </div>
        </div>
    )
}

export default TrackCount
