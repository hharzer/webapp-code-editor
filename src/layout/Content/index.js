import React from 'react';

import ContentLoader from 'sections/Content';
import { asyncComponentLoader } from 'utils';

const ContentSection = asyncComponentLoader(ContentLoader);

export const Content = _ => <div>
  <ContentSection />
</div>;

export default Content;
