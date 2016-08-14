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
    handleActionTypeChange (actionType) {
        this.setState({
            actionType,            
        });
    }
    render() {
        return (
            <div className="step-editor">
                <label htmlFor="action-type">
                    <SelectActionType handleActionTypeChange={this.handleActionTypeChange} />
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
