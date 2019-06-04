import React, { Component, useState, useEffect } from 'react';
import './Heatup.css'

import fetchExercises from '../../services/fetchExercises'
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
        let activityExercises = await fetchExercises(this.props.fetchAdress)
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


