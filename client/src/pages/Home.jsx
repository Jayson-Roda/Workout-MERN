import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext();
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            }) // http://localhost:5000 has been transfered to package.json to access backend via proxy
            const json = await response.json() // get the array of objects from workout controller

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        if (user) {
            fetchWorkouts()
        }
        
    }, [dispatch, user])

    return (
    <div className="home">
        <div className="workouts">
            { workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout}/>
            )) }
        </div>
        <WorkoutForm />
    </div>
    )
}

export default Home