import React, { Component, useState, useEffect } from 'react';
import './Heatup.css'

import fetchExercises from '../../services/fetchExercises'
import ExerciseContainer from '../ExerciseContainer/ExerciseContainer'
import AssesmentContainer from '../AssesmentConainer/AssesmentContainer'
import Neck from '../img/neck.jpg'
import Hands from '../img/hands.jpg'
import ZIyE from '../img/ZIyE.gif'

export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activityExercises: false,
        };
    }

    async componentDidMount() {
        let activityExercises = await fetchExercises(this.props.fetchAdress)
        this.setState({ activityExercises: activityExercises });
    }

    render() {
        return (
            <>
                {this.props.fetchAdress === '/exercises/assesment'
                    ?
                    this.state.activityExercises && <AssesmentContainer setActivity={this.props.setActivity} activityExercises={this.state.activityExercises} />
                    :
                    this.state.activityExercises && <ExerciseContainer setActivity={this.props.setActivity} activityExercises={this.state.activityExercises} />}
            </>
        )
    }
}


