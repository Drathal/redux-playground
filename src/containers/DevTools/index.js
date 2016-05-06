import React from 'react';
import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-y"
        changePositionKey="ctrl-q"
        defaultIsVisible={ false }
        fluid={ true }>
        <LogMonitor select={ state => state }
            expandStateRoot={ false }
            expandActionRoot={ false }
            theme="tomorrow" />
    </DockMonitor>
);

export default DevTools;
