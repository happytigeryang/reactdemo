import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
				<DockMonitor
								toggleVisibilityKey="ctrl-l"
								changePositionKey="ctrl-q"
								defaultIsVisible={false}>
								<LogMonitor theme="tomorrow"/>
				</DockMonitor>
);

module.exports = DevTools; //因为这个模板需要进行条件 require,所以这些特殊定义为module.exports