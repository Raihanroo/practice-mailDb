import './Food.css'
const Food = ({food}) => {
    console.log(food)
    const {strMealThumb} = food;
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <div>
                
            </div>
        </div>
    );
};

export default Food;