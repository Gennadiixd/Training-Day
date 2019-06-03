import React, { Component, useState, useEffect } from 'react';
import './Heatup.css'

import ExerciseContainer from '../ExerciseContainer/ExerciseContainer'
import Neck from '../HeatUpImg/neck.jpg'
import Hands from '../HeatUpImg/hands.jpg'
import ZIyE from '../HeatUpImg/ZIyE.gif'

export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activityExercises: false,
        };
    }

    async componentDidMount() {
        let res = await fetch(this.props.fetchAdress);
        let activityExercises = await res.json();
        this.setState({ activityExercises: activityExercises}); 
    }

    render() {
        return (
            <>
                {this.state.activityExercises && <ExerciseContainer setActivity={this.props.setActivity} activityExercises={this.state.activityExercises} />}
            </>
        )
    }
}


