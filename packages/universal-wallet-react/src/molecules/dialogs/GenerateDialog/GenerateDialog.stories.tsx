import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '@material-ui/core/Button';
import { action } from '@storybook/addon-actions';
import {
  FullscreenDialog as Component,
  Props,
} from '../../../atoms/FullscreenDialog';
import { GenerateDialogContent } from './GenerateDialogContent';

import { seedToId, passwordToKey } from '../../../__fixtures__/wallet';

const meta: Meta = {
  title: 'Molecules/Dialogs/Generate',
  component: Component,
};

export default meta;

const Template: Story<Props> = (args) => <Component {...args} />;

export const Dialog = Template.bind({});

Dialog.args = {
  trigger: <Button>trigger</Button>,
  dialogTitle: 'Generate',
  dialogSubmitTitle: 'Generate',
  dialogContent: (
    <GenerateDialogContent
      seedToId={seedToId}
      passwordToKey={passwordToKey}
      setDialogState={(state: any) => {
        action('setDialogState')(state);
      }}
    />
  ),
  handleSubmit: async () => {
    action('handleSubmit')();
  },
  handleCancel: async () => {
    action('handleCancel')();
  },
};