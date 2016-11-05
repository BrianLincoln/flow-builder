import React from 'react';
import FlowName from './flow-name';
import FlowEditor from './flow-editor/flow-editor';
import FlowTester from './flow-tester/flow-tester';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions';

class FlowManager extends React.Component {

    constructor(props) {
        super(props);
        this.saveNameChangeForm = this.saveNameChangeForm.bind(this);
        this.showNameChangeForm = this.showNameChangeForm.bind(this);
        this.cancelNameChangeForm = this.cancelNameChangeForm.bind(this);
        this.handleNameFieldChange = this.handleNameFieldChange.bind(this);
        this.handleRunTestButtonClick = this.handleRunTestButtonClick.bind(this);
    }
    componentDidMount() {
        this.props.actions.fetchFlow(this.props.flowId);
        this.props.actions.fetchTest(this.props.flowId);
    }
    componentWillReceiveProps (newProps) {
        this.state = {
            showNameEditField: false,
            name: newProps.flow.name
        };
    }
    saveNameChangeForm () {
        this.props.actions.editFlowName(this.props.flow.id, this.state.name);
        this.setState({ showNameEditField: false });
    }
    showNameChangeForm () {
        this.setState({ showNameEditField: true });
    }
    cancelNameChangeForm () {
        this.setState({
            showNameEditField: false,
            name: this.props.flow.name
        });
    }
    handleNameFieldChange (e) {
        this.setState({ name: e.target.value });
    }
    handleRunTestButtonClick () {
        if (this.props.flow.steps !== undefined && this.props.flow.steps.length > 0) {
            this.props.actions.runTest(this.props.flow);
        }
    }
    render() {
        const runTestButtonClasses = (this.props.flow.steps !== undefined && this.props.flow.steps.length > 0) ? 'btn btn-primary' : 'btn btn-primary disabled';

        if (this.props.flow.id !== undefined) {
            return (
                <div className="flow-manager">
                    <div className="page-header text-center clearfix">
                        <FlowName cancelNameChangeForm={this.cancelNameChangeForm} handleNameFieldChange={this.handleNameFieldChange} isEditable={this.state.showNameEditField} name={this.state.name} saveNameEdit={this.saveNameChangeForm} showNameChangeForm={this.showNameChangeForm} />
                        <div className="btn-group pull-right">
                            <button className={runTestButtonClasses} data-tar="run-test" onClick={this.handleRunTestButtonClick}>Run Test</button>
                            <a className="btn btn-default" href={'/flow/' + this.props.flow.id + '/delete'}><span className="fa fa-trash-o" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <FlowEditor actions={this.props.actions} flow={this.props.flow} />
                        <FlowTester actions={this.props.actions} flow={this.props.flow} test={this.props.test} />
                    </div>
                </div>
            );
        }
        return null;
    }
}

FlowManager.propTypes = {
    actions: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    flow: React.PropTypes.object.isRequired,
    flowId: React.PropTypes.string.isRequired,
    test: React.PropTypes.object,
    uiState: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        uiState: state.uiState,
        flow: state.flow,
        test: state.test
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(action, dispatch),
        dispatch
    };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FlowManager);
