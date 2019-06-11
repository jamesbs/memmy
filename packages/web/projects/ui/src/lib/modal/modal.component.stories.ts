import { storiesOf } from '@storybook/angular';
import { ModalComponent } from './modal.component';

storiesOf('Modal', module)
  .add('basic', () => ({
    component: ModalComponent,
    props: {},
  }));
