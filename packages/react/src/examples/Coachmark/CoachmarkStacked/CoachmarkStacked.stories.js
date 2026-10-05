/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import DocsPage from './CoachmarkStacked.mdx';
import { CoachmarkStackedExample } from './example/components/CoachmarkStackedExample';
import './example/styles/_coachmark-stacked.scss';
import './example/styles/_story-styles.scss';

export default {
  title: 'Examples/Coachmark/Coachmark Stacked',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: DocsPage,
    },
  },
};

export const CoachmarkStack = (args) => {
  return <CoachmarkStackedExample {...args} />;
};
CoachmarkStack.storyName = 'Coachmark stacked';
CoachmarkStack.args = {};
