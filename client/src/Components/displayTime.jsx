const displayTime = ()=>{
    const calculateTotalTaskTime = () => {
        const totalTaskTime = taskList.reduce((acc, curr) => {
          return acc + parseInt(curr.taskTime);
        }, 0);

    return (
        <div>

        </div>
    );

}

export default displayTime