import React from 'react';
import { Chip } from '@material-ui/core';

interface FoodProps {
    onDelete(): void;
    label: string;
  }

const Food : React.FunctionComponent<FoodProps> = ({ onDelete, label }) => {
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