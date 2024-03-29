var Skills = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    var data = this.props.data;
    var skillOrder = [
      'acrobatics',
      'animal_handling',
      'arcana',
      'athletics',
      'deception',
      'history',
      'insight',
      'intimidation',
      'investigation',
      'medicine',
      'nature',
      'perception',
      'performance',
      'persuasion',
      'religion',
      'sleight_of_hand',
      'stealth',
      'survival'
    ];
    var skills = skillOrder.map(function(skillName) {
      var skillAttribute = data[skillName];
      return (
        <li>
          <Skill name={skillName} attributes={skillAttribute} />
        </li>
      );
    });
    return (
      <div>
        <h3>Skills</h3>
        <div className="callout primary">
          <ul>
            {skills}
          </ul>
        </div>
      </div>
    );
  }
});
