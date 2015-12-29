import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Accounts from './../../components/Accounts'
import * as AccountActions from './../../actions/Accounts'

function mapStateToProps(state) {
  return {
    accounts: state.Account
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AccountActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)
