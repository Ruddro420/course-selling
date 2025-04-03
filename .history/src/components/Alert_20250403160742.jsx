import React from 'react';

const Alert = () => {
    return (
        <div>
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <span className="font-medium">No Data Found!</span> Change a few things up and try submitting again.
            </div>
        </div>
    );
};

export default Alert;