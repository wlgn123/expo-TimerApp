import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Timer from './presenter';
import { actionCreator  } from '../../reducer'


function mapStateToProps(state) {
	const { isPlaying, elapsedTime, timerDuration } = state;

	return {
		isPlaying,
		elapsedTime,
		timerDuration,
	}
}

// 액션을 리듀서와 연동해줌
function mapDispatchToProps(dispatch) {
	return {
		startTimer: bindActionCreators(actionCreator.startTimer, dispatch),
		restartTimer: bindActionCreators(actionCreator.restartTimer, dispatch),
		addSecond: bindActionCreators(actionCreator.addSecond, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);