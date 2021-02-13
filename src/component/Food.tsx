import React from 'react';
import { Chip } from '@material-ui/core';

const Food = (props) => {
    const { onDelete, label, key } = props;
    return (
        <Chip
            onDelete={onDelete}
            label={label}
            style={styles.chip}
        />
    );
}

const styles = {
    chip: {
      margin: 4,
      flex: 1,
    }
}

export default Food;