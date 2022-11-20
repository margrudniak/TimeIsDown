import React from 'react';
import {Button, Screen} from 'src/components';
import {NewTimerProps} from './NewTimerScreen.types';

export const NewTimerScreen = ({navigation}: NewTimerProps) => {
  return (
    <Screen isLoading={false}>
      <Button category="primary" text={'Add new timer'} />
    </Screen>
  );
};
