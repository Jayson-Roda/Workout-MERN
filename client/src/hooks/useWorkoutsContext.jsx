import { WorkoutsContext } from "../Context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);

    if(!context){
        throw Error('useWorkoutsContext context must be used inside an WorkoutsContextProvider')
    }

    return context;
}