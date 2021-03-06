import voteState from '../../common/data/vote'
import reducerUtil from '../../common/utils/reducer'

const SHOW_UP_VOTE = 'SHOW_UP_VOTE'
const SHOW_DOWN_VOTE = 'SHOW_DOWN_VOTE'
const CLOSE_VOTE = 'CLOSE_VOTE'

export const showUpVoteAction = () => ({
  type: SHOW_UP_VOTE,
  payload: null,
})

export const showDownVoteAction = () => ({
  type: SHOW_DOWN_VOTE,
  payload: null,
})

export const closeVoteAction = () => ({
  type: CLOSE_VOTE,
  payload: null,
})

const showUpVote = state => {
  return Object.assign({}, state, {
    visible: true,
  })
}

const showDownVote = state => {
  return Object.assign({}, state, {
    visible: true,
  })
}

const closeVote = state => {
  return Object.assign({}, state, {
    visible: false,
  })
}

const map = {
  [SHOW_UP_VOTE]: showUpVote,
  [SHOW_DOWN_VOTE]: showDownVote,
  [CLOSE_VOTE]: closeVote,
}

export default reducerUtil(map, voteState)
