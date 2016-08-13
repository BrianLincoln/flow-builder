import React from 'react';
import SelectActionType from './select-action-type';

class StepEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleActionTypeChange = this.handleActionTypeChange.bind(this);

        this.state = {
            actionType: props.step.actionType
        };
    }
    handleActionTypeChange (event) {
        console.log('changey');
    }
    render() {
        return (
            <div>
                <label htmlFor="action-type">
                    <SelectActionType handleActionTypeChange={this.handleActionTypeChange} />
                    <div>Choose Action Type</div>
                    <input id="action-type" onChange={this.handleActionTypeChange} type="text" value={this.state.actionType} />
                </label>
                <button>save</button>
            </div>
        );
    }
}

StepEditor.propTypes = {
    step: React.PropTypes.object.isRequired,
    stepActions: React.PropTypes.object.isRequired
};

export default StepEditor;
