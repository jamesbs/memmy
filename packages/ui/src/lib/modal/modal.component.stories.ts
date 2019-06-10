import { ModalComponent } from './modal.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Modal', module)
  .add('basic', () => ({
    component: ModalComponent,
    props: {}
  }));
  // .add('Basic', () => ({
  //   moduleMetadata: {
  //     declarations: [ModalComponent],
  //   },
  //   template: `<lib-modal>modal content</lib-modal>`
  // }));
