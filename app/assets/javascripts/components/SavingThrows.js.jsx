var SavingThrows = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    var data = this.props.data;
    var savingThrowOrder = [
      'strength',
      'dexterity',
      'constitution',
      'intelligence',
      'wisdom',
      'charisma'
    ];
    var savingThrows = savingThrowOrder.map(function(savingThrowName) {
      var savingThrowAttributes = data[savingThrowName];
      return (
        <li>
          <SavingThrow name={savingThrowName} attributes={savingThrowAttributes} />
        </li>
      );
    });
    return (
      <div>
        <h3>Saving Throws</h3>
        <div className="callout primary">
          <ul>
            {savingThrows}
          </ul>
        </div>
      </div>
    );
  }
});
