import { useState, useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails"

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts') // http://localhost:5000 has been transfered to package.json to access backend via proxy
            const json = await response.json() // get the array of objects from workout controller

            if(response.ok){
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])

    return (
    <div className="home">
        <div className="workouts">
            { workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout}/>
            )) }
        </div>
    </div>
    )
}

export default Home