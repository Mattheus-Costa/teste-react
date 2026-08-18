import PropTypes from 'prop-types'

function Student({name = "Guest", age = 0, IsStudent = false}){
    return(
        <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {IsStudent ? "Yes" : "No"}</p>
    </div>
    );
    
}

 
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    IsStudent: PropTypes.bool,
 }

export default Student