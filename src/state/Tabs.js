import React from "react";

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    state = {
        currentTabIndex: 0
    };

    handleButtonClick(index) {
        this.setState({ currentTabIndex: index })
    }
    
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.name}
            </button>
        ))
    }

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }
    
    render() {
        return (
          <div>
            {this.renderButtons()}
            {/* the !! coerces .length into a boolean so our Enzyme test snapshot file won't show a zero for the length. */}
            {/* Tip came from the Client-side programming with React unit, in 10. Event Handlers, about 2/3 of the way down. */}
            {!!this.props.tabs.length && this.renderContent()}
          </div>
        )
    }

}

export default Tabs;