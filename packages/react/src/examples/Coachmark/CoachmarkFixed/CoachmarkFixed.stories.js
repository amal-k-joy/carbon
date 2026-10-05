/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import DocsPage from './CoachmarkFixed.mdx';
import { CoachmarkFixedExample } from './example/components/CoachmarkFixedExample';
import './example/styles/_coachmark-fixed.scss';

export default {
  title: 'Examples/Coachmark/Coachmark Fixed',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DocsPage,
    },
  },
};

const CoachmarkFixedPattern = (args) => {
  return <CoachmarkFixedExample {...args} />;
};

export const CoachmarkFixed = CoachmarkFixedPattern.bind({});
CoachmarkFixed.args = {};
